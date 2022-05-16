import { BindObject, observeInsert, observeRender } from "../js/bind";
import juicer from "juicer";

import "./app.scss";
import { Footer } from "./views/footer/footer";
import { kvdb } from "../js/kvdb";
const compiledTpl = juicer(require("./app.shtml"));

export class App {
  //
  components = [];

  componentFooter;

  data = {};
  containerId = "";

  constructor(id) {
    this.data = new BindObject(this);
    this.containerId = id;
    observeInsert(this);

    const footer = new Footer("footer");
    this.componentFooter = footer;

    this.components = [footer];
  }

  init() {
    this.data.init({
      readList: [],
      taskList: [],
      form1: {
        name: "",
        dueDate: "",
        taskPriority: "",
        estimateTime: "",
      },
      form2: {
        name: "",
        readLink: "",
        projectName: "",
      },
    });

    this.getData();
  }

  async getData() {
    const taskList = await kvdb.get("taskList", []);
    const readList = await kvdb.get("readList", []);

    const data = this.data.get();
    data["taskList"] = taskList ? taskList : [];
    data["readList"] = taskList ? readList : [];

    this.data.set(data);
  }

  viewRender() {
    if (!this.containerId) {
      return;
    }
    observeRender(this, this.containerId, compiledTpl, this.data.get());
  }

  showMenu(id) {
    this.hideMenu();
    document.getElementById(id).style.display = "block";
  }

  hideMenu() {
    const els = document.querySelectorAll(".menu-box");
    for (const item of els) {
      item.style.display = "none";
    }
  }

  setFormValue(formName, key, value) {
    // console.log(formName, key, value, arguments);
    const data = this.data.get();
    if (!data[formName]) {
      data[formName] = {};
    }
    data[formName][key] = value;
    this.data.onlySet(data);
  }

  // open form panel
  onOpenAddForm(id) {
    this.hideFloatLayer();
    document.getElementById(id).style.display = "block";
  }

  hideFloatLayer() {
    const f1 = document.getElementById("form1");
    const f2 = document.getElementById("form2");
    f1.style.display = "none";
    f2.style.display = "none";
  }

  onCancel() {
    this.hideFloatLayer();

    this.data.onlyReset("form1");
    this.data.onlyReset("form2");
    this.viewRender();
  }

  onAddSave(formName) {
    const data = this.data.get();
    const formData = data[formName];
    console.log("formData", formData);

    this.hideFloatLayer();

    if (formName == "form1") {
      this.addTask(formData);
    } else if (formName == "form2") {
      this.addReading(formData);
    }

    this.data.onlyReset("form1");
    this.data.onlyReset("form2");
    this.viewRender();
  }

  // add task
  addTask(formData) {
    if (!formData) {
      return;
    }

    const data = this.data.get();
    const list = data["taskList"];
    if (!list) {
      list = [];
    }
    list.unshift(formData);

    if (list.length > 4) {
      list.pop();
    }
    data["taskList"] = list;

    this.data.onlySet(data);
    kvdb.set("taskList", list);
  }

  // add reading
  addReading(formData) {
    if (!formData) {
      return;
    }

    const data = this.data.get();
    const list = data["readList"];
    if (!list) {
      list = [];
    }
    list.unshift(formData);

    if (list.length > 4) {
      list.pop();
    }
    data["readList"] = list;

    this.data.onlySet(data);
    kvdb.set("readList", list);
  }
}

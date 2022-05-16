import { BindObject, observeInsert, observeRender } from "../js/bind";
import juicer from "juicer";

import "./app.scss";
import { Footer } from "./views/footer/footer";
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
    console.log(formName, key, value, data);
    this.data.onlySet(data);
  }

  // open form panel
  onOpenAddForm(id) {
    this.data.onlyReset(id);
    this.hideFloatLayer();
    document.getElementById(id).style.display = "block";
  }

  hideFloatLayer() {
    const f1 = document.getElementById("form1");
    const f2 = document.getElementById("form2");
    f1.style.display = "none";
    f2.style.display = "none";
  }

  onAddSave(formName) {
    const data = this.data.get();
    console.log(data[formName]);

    this.hideFloatLayer();
  }
}

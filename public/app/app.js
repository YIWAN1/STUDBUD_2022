import { BindObject, observeInsert, observeRender } from "../js/bind";
import juicer from "juicer";

import "./app.scss";
import { Footer } from "./views/footer/footer";
import { kvdb } from "../js/kvdb";
import { formatTime, randId } from "../js/utils";
import { is } from "express/lib/request";
const compiledTpl = juicer(require("./app.shtml"));

export class App {
  //
  components = [];
  componentFooter;

  data = {};
  containerId = "";

  timeCount = 0;

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
        id: "",
        name: "",
        dueDate: "",
        taskPriority: "",
        estimateTime: "",
      },
      form2: {
        id: "",
        name: "",
        readLink: "",
        projectName: "",
      },
    });
    console.log("111");

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
    var isAdd = false;
    if (!formData.id) {
      isAdd = true;
      formData.id = randId(); // set data id
    }

    console.log("formData", formData);
    this.hideFloatLayer();

    if (formName == "form1") {
      this.editTask(formData, isAdd);
    } else if (formName == "form2") {
      this.editReading(formData, isAdd);
    }

    this.data.onlyReset("form1");
    this.data.onlyReset("form2");
    this.viewRender();
  }

  // add task
  editTask(formData, isAdd) {
    if (!formData) {
      return;
    }

    const data = this.data.get();
    const list = data["taskList"];
    if (!list) {
      list = [];
    }

    if (isAdd) {
      list.unshift(formData);

      if (list.length > 4) {
        list.pop();
      }
    } else {
      for (var k in list) {
        if (list[k].id == formData.id) {
          list[k] = formData;
        }
      }
    }

    data["taskList"] = list;

    this.data.onlySet(data);
    kvdb.set("taskList", list);
  }

  // add reading
  editReading(formData, isAdd) {
    if (!formData) {
      return;
    }

    const data = this.data.get();
    const list = data["readList"];
    if (!list) {
      list = [];
    }

    if (isAdd) {
      list.unshift(formData);
      if (list.length > 4) {
        list.pop();
      }
    } else {
      for (var k in list) {
        if (list[k].id == formData.id) {
          list[k] = formData;
        }
      }
    }
    data["readList"] = list;

    this.data.onlySet(data);
    kvdb.set("readList", list);
  }

  startTimer() {
    this.timeCount = 0;
    document.getElementById("right__header__title").innerHTML =
      "What are you working on?";
    document.getElementById("footer__console__b__stop").style.display =
      "inline-block";
    document.getElementById("footer__console__b__open").style.display = "none";
    this.timeCountRun();
  }

  timeCountRun() {
    if (this.timeCountId) {
      clearTimeout(this.timeCountId);
      this.timeCountId = 0;
    }

    document.getElementById("footer__console__time").innerHTML = formatTime(
      this.timeCount
    );
    this.timeCount++;

    this.timeCountId = setTimeout(() => {
      this.timeCountRun();
    }, 1000);
  }

  timeCountPause() {
    if (this.timeCountId) {
      clearTimeout(this.timeCountId);
      this.timeCountId = 0;
    }
  }

  stopTimer(istit) {
    if (this.timeCountId) {
      clearTimeout(this.timeCountId);
      this.timeCountId = 0;
    }
    this.timeCount = 0;
    document.getElementById("footer__console__time").innerHTML = formatTime(
      this.timeCount
    );
    document.getElementById("footer__console__b__stop").style.display = "none";
    document.getElementById("footer__console__b__open").style.display =
      "inline-block";
    if (istit) {
      document.getElementById("right__header__title").innerHTML =
        "Write down what are you going there.";
    }
  }

  // 音频播放。。。
  play() {
    var myaudio = document.getElementById("myaudio");
    console.log(myaudio);
    myaudio.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";
  }
  closePlay() {
    var myaudio = document.getElementById("myaudio");
    console.log(myaudio);
    myaudio.pause();
    document.getElementById("stop").style.display = "none";
    document.getElementById("play").style.display = "inline-block";
  }
  menus(id, type) {
    var acac = this;
    event.preventDefault();
    var oM = document.getElementById("menus");
    var oEvt = event;
    oM.style.display = "block";
    oM.style.left = oEvt.clientX + "px";
    oM.style.top = oEvt.clientY + "px";
    document.getElementById("sc").onclick = function () {
      oM.style.display = "none";
      acac.cancel(id, type);
    };
  }
  cancel(id, type) {
    var data = this.data.get();
    var list = data[type];
    list.forEach((v, i) => {
      if (v.id === id) {
        list.splice(i, 1);
      }
    });
    data[type] = list;
    this.data.set(data);
    kvdb.set(type, list);
  }
  acac() {
    document.getElementById("menus").style.display = "none";
  }

  change(type, listName, id) {
    var data = this.data.get(),
      list = data[listName],
      items;
    list.forEach((v, i) => {
      if (v.id === id) {
        items = v;
      }
    });
    data[type] = items;
    this.data.onlySet(data);
    this.viewRender();

    console.log(type, items)
    console.log(this.data.get())
    this.onOpenAddForm(type)
  }
}

import { BindObject, observeInsert, observeRender } from "../js/bind";
import juicer from "juicer";

import "./app.scss";
import { Footer } from "./views/footer/footer";
import { kvdb } from "../js/kvdb";
import { formatTime, getUnixSeconds, randId } from "../js/utils";
import { FlowTimeTracker, FlowTimeTrackerItem } from "../js/define";
const compiledTpl = juicer(require("./app.shtml"));

export class App {
  //
  components = [];
  componentFooter;

  data = {};
  trackerItem = null;
  containerId = "";

  timeCount = 0;
  trackerTimer = 0;

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
      progressList: [],
      doneList: [],
      taskList: [],
      editTimeTracker: false,
      selectTrackerItem: null,
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
    const progressList = await kvdb.get("progressList", []);
    const doneList = await kvdb.get("doneList", []);
    const selectTrackerItem = await kvdb.get("selectTrackerItem", null);

    const data = this.data.get();
    data["taskList"] = taskList ? taskList : [];
    data["readList"] = readList ? readList : [];
    data["progressList"] = progressList ? progressList : [];
    data["doneList"] = doneList ? doneList : [];
    data["selectTrackerItem"] = selectTrackerItem ? selectTrackerItem : null;

    this.data.set(data);
    this.updateSelectTrackerStatus();
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
      this.editListItem("taskList", formData, isAdd);
    } else if (formName == "form2") {
      this.editListItem("", formData, isAdd);
    }

    this.data.onlyReset("form1");
    this.data.onlyReset("form2");
    this.viewRender();
  }

  // save item data to list
  editListItem(listName, formData, isAdd) {
    if (!formData) {
      return;
    }

    const data = this.data.get();
    const list = data[listName];
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

    data[listName] = list;

    this.data.onlySet(data);
    kvdb.set(listName, list);
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
    const data = this.data.get();
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
    const data = this.data.get();
    var list = data[listName];
    var items = null;
    list.forEach((v, i) => {
      if (v.id === id) {
        items = v;
      }
    });
    if (!items) {
      return;
    }

    data[type] = items;
    this.data.onlySet(data);
    this.viewRender();

    console.log(type, items);
    console.log(this.data.get());
    this.onOpenAddForm(type);
  }

  addFlowTimeTracker() {
    this.data.onlySet({
      editTimeTracker: true,
    });
    this.cancelSelectTracker();
  }

  addFlowTImeTracker() {
    var name = document.getElementById("timeTrackerName").value;
    if (!name || name.length <= 2) {
      alert("Please input valid name (length > 2)");
      return;
    }

    var data = new FlowTimeTracker();
    data.id = randId();
    data.name = name;
    data.start = getUnixSeconds();

    var item = new FlowTimeTrackerItem();
    item.start = data.start;
    data.trackers.push(item);

    console.log(data);
    this.editListItem("progressList", data, true);
    this.viewRender();
  }

  findOneTrackerItem(id) {
    if (!id) {
      return null;
    }
    const data = this.data.get();
    for (var i = 0; i < data.progressList.length; i++) {
      var item = data.progressList[i];
      if (item.id == id) {
        return item;
      }
    }
    for (var i = 0; i < data.doneList.length; i++) {
      var item = data.progressList[i];
      if (item.id == id) {
        return item;
      }
    }
    return null;
  }

  editTrackerItem(id) {
    var selectItem = this.findOneTrackerItem(id);
    if (!selectItem) {
      return;
    }

    kvdb.set("selectTrackerItem", selectItem);
    this.data.set({
      selectTrackerItem: selectItem,
    });
    this.updateSelectTrackerStatus();
  }

  updateSelectTrackerStatus() {
    const tracker = this.data.get("selectTrackerItem", null);
    if (!tracker || !tracker.trackers || tracker.trackers.length < 1) {
      if (this.trackerTimer) {
        clearTimeout(this.trackerTimer);
      }
      return;
    }
    var lastItem = tracker.trackers[tracker.trackers.length - 1];
    var reset = typeof lastItem.reset != "undefined" ? lastItem.reset : 0;
    if (reset > 0) {
      this.updateTrackerIme(reset, lastItem.end);
    } else {
      this.updateTrackerIme(lastItem.start, reset);
    }
  }

  updateTrackerIme(start, end) {
    var over = end;
    if (end < 1) {
      over = getUnixSeconds();
    }
    var s = over - start;
    document.getElementById("trackerTimer").innerHTML = formatTime(s);
    if (this.trackerTimer) {
      clearTimeout(this.trackerTimer);
    }
    this.trackerTimer = setTimeout(() => {
      this.updateTrackerIme(start, end);
    }, 300);
  }

  cancelSelectTracker() {
    this.data.set({
      selectTrackerItem: null,
    });
    kvdb.del("selectTrackerItem");
    this.updateSelectTrackerStatus();
  }
}

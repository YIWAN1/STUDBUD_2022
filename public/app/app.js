import { BindObject, observeInsert, observeRender } from "../js/bind";
import juicer from "juicer";

import "./app.scss";
import { Footer } from "./views/footer/footer";
import { kvdb } from "../js/kvdb";
import {
  formatTime,
  formatTime2,
  getUnixSeconds,
  randId,
  stopEvent,
} from "../js/utils";
import { FlowTimeTracker, FlowTimeTrackerItem } from "../js/define";
const compiledTpl = juicer(require("./app.shtml"));

var _isBindEvent = false;
var _dragMaster = null;

// global
function sysDragMove(e) {
  if (_dragMaster) {
    _dragMaster.dragMove(e);
  }
}

function sysDragUp(e) {
  if (_dragMaster) {
    _dragMaster.dragUp(e);
  }
}

export class App {
  playUrl = [];
  //
  components = [];
  componentFooter;
  prev = 0;
  data = {};
  trackerItem = null;
  containerId = "";
  dEle = null;

  timeCount = 0;
  trackerTimer = 0;
  playIndex = 0;
  constructor(id) {
    this.data = new BindObject(this);
    this.containerId = id;
    observeInsert(this);

    const footer = new Footer("footer");
    this.componentFooter = footer;

    this.components = [footer];
  }
// Page initialisation
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
      playUrl: [
        {
          url: "../assets/mp3/Joji-BENEE-Afterthought(1).mp3",
          name: "Afterthought",
          imgUrl: "../assets/mp3/Cover.png",
          singer: "Joji",
        },
        {
          url: "../assets/mp3/Harry Styles - As It Was.mp3",
          name: "As It Was",
          imgUrl: "../assets/mp3/Cover1.JPG",
          singer: "Harry Styles",
        },
        {
          url: "../assets/mp3/ØZI、9M88 - B.O..mp3",
          name: "B.O.",
          imgUrl: "../assets/mp3/Cover2.JPG",
          singer: "ØZI、9M88",
        },
      ],
    });

    this.getData();
  }

  // Get the basic data after initialisation
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
// Redraw the page
  viewRender() {
    if (!this.containerId) {
      return;
    }
    observeRender(this, this.containerId, compiledTpl, this.data.get());
  }
// Show Navigation secondary menu
  showMenu(id) {
    this.hideMenu();
    document.getElementById(id).style.display = "block";
  }
// Hide Navigation secondary menu

  hideMenu() {
    const els = document.querySelectorAll(".menu-box");
    for (const item of els) {
      item.style.display = "none";
    }
  }
// Fill Add Task data
  setFormValue(formName, key, value) {
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
  // Cancel form panel

  onCancel() {
    this.hideFloatLayer();

    this.data.onlyReset("form1");
    this.data.onlyReset("form2");
    this.viewRender();
  }
// Add reading , task data
  onAddSave(formName) {
    const data = this.data.get();
    const formData = data[formName];
    if (formName == "form1" && formData.name == "") {
      alert("please input Task name");
      return;
    }
    var isAdd = false;
    if (!formData.id) {
      isAdd = true;
      formData.id = randId(); // set data id
      formData.trackers = []; // set data id
    }

    this.hideFloatLayer();

    if (formName == "form1") {
      if (!formData.form) {
        formData.form = "taskList";
      }
      this.editListItem(formData.form, formData, isAdd);
    } else if (formName == "form2") {
      this.editListItem("readList", formData, isAdd);
    }

    this.data.onlyReset("form1");
    this.data.onlyReset("form2");
    this.viewRender();
  }

  // save item data to list
  editListItem(listName, formData, isAdd, isDel) {
    if (!formData) {
      return;
    }

    if (isDel) {
      isAdd = false;
    }

    if (formData.id) {
      isAdd = false;
    }

    const data = this.data.get();
    var list = data[listName];
    if (!list) {
      list = [];
    }

    if (isAdd) {
      list.unshift(formData);

      if (list.length > 4) {
        list.pop();
      }
    } else {
      if (isDel) {
        const arr = [];
        for (const k in list) {
          if (list[k].id && list[k].id != formData.id) {
            arr.push(list[k]);
          }
        }
        list = arr;
      } else {
        var hv = false;
        for (const k in list) {
          if (list[k].id == formData.id) {
            list[k] = formData;
            hv = true;
          }
        }
        if (!hv) {
          list.unshift(formData);
        }
      }
    }

    data[listName] = list;

    this.data.onlySet(data);
    kvdb.set(listName, list);
  }
// Start Timer
  startTimer() {
    this.timeCount = 0;
    document.getElementById("right__header__title").innerHTML =
      "What are you working on?";
    document.getElementById("footer__console__b__stop").style.display =
      "inline-block";
    document.getElementById("footer__console__b__open").style.display = "none";
    document.getElementById("footer__console__b__open").style.display = "none";

    this.timeCountRun();
  }
  // Zero timing
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
  //
  timeCountPause() {
    if (this.timeCountId) {
      clearTimeout(this.timeCountId);
      this.timeCountId = 0;
    }
  }
// Reset timer data
  resetTimer() {
    console.log("resetTimer");
    this.timeCount = 0;
  }
// Stop the timer
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

  // play music
  play() {
    const myaudio = document.getElementById("myaudio");
    const playUrl = this.data.get()["playUrl"];
    let musicName = document.getElementById("musicName");
    let musicImg = document.getElementById("musicImg");
    let singer = document.getElementById("singer");
    musicName.innerHTML = playUrl[this.playIndex].name;
    singer.innerHTML = playUrl[this.playIndex].singer;
    myaudio.setAttribute("src", playUrl[this.playIndex].url);
    musicImg.setAttribute("src", playUrl[this.playIndex].imgUrl);
    myaudio.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";
  }
  // stop music
  closePlay() {
    const myaudio = document.getElementById("myaudio");
    myaudio.pause();
    document.getElementById("stop").style.display = "none";
    document.getElementById("play").style.display = "inline-block";
  }
  // Previous song  Next song
  playNext(type) {
    const playUrl = this.data.get()["playUrl"];
    if (type == "+") {
      if (this.playIndex < playUrl.length - 1) {
        this.playIndex++;
      } else {
        this.playIndex = 0;
      }
    } else {
      if (this.playIndex > 0) {
        this.playIndex--;
      } else {
        this.playIndex = playUrl.length - 1;
      }
    }

    this.play();
  }
  // Show delete when right-click button
  onRightMenus(id, type) {
    const acac = this;
    event.preventDefault();
    const oM = document.getElementById("menus");
    const oEvt = event;
    oM.style.display = "block";
    oM.style.left = oEvt.clientX + "px";
    oM.style.top = oEvt.clientY + "px";

    const m = document.getElementById("menusDelete");
    m.setAttribute("data-id", id);
    m.setAttribute("data-type", type);
  }
  // Show delete when right-click
  onMenusDelete(e) {
    // console.log(type, id);
    e = e || window.event;

    const id = e.target.getAttribute("data-id");
    const type = e.target.getAttribute("data-type");

    const oM = document.getElementById("menus");
    oM.style.display = "none";

    this.editListItem(
      type,
      {
        id: id,
      },
      false,
      true
    );
    if (type == "progressList" || type == "doneList") {
      const selectTrackerItem = this.data.get("selectTrackerItem", null);
      if (selectTrackerItem && selectTrackerItem.id == id) {
        this.cancelSelectTracker(window.event);
      }
    }

    this.viewRender();
  }
// Hide delete button
  hideRightMenuLayer() {
    document.getElementById("menus").style.display = "none";
  }
  // show Edite When double-clicking on a page card
  dblclick(type, listName, e, el, id, domId) {
    var now = new Date().getTime();
    stopEvent(e);

    if (!e.target) {
      return;
    }
    if (e.target.classList.contains("out-pointer")) {
      return;
    }

    var x = now - this.prev;
    var tmr;
    this.prev = now;
    if (x < 500) {
      tmr = setTimeout(() => {
        this.change(type, listName, id);
      }, 1);
    } else {
      clearTimeout(tmr);
      this.dragDown(e, el, id, domId);
    }
  }
// Edit data
  change(type, listName, id) {
    const data = this.data.get();
    const list = data[listName];
    let items = null;
    list.forEach((v, i) => {
      if (v.id === id) {
        items = v;
      }
    });

    items.form = listName;
    console.log(items);
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
// Page header input
  addFlowTimeTracker() {
    console.log(123);
    this.data.onlySet({
      editTimeTracker: true,
    });
    this.cancelSelectTracker(window.event);
  }
// Used in tandem with the previous method
  saveAddFlowTimeTracker() {
    const el = document.getElementById("timeTrackerName");
    const name = el ? el.value : "";
    if (!name || name.length <= 2) {
      alert("Please input valid name (length > 2)");
      return;
    }

    const data = new FlowTimeTracker();
    data.id = randId();
    data.name = name;
    data.start = getUnixSeconds();

    this.editListItem("progressList", data, true);
    this.viewRender();
  }

// Used in tandem with the previous method
  findOneTrackerItem(id) {
    if (!id) {
      return null;
    }
    var data = this.data.get();
    for (var i = 0; i < data.progressList.length; i++) {
      var item = data.progressList[i];
      if (item.id == id) {
        return item;
      }
    }
    for (var i = 0; i < data.doneList.length; i++) {
      var item = data.doneList[i];
      if (item.id == id) {
        return item;
      }
    }
    for (var i = 0; i < data.taskList.length; i++) {
      var item = data.taskList[i];
      if (item.id == id) {
        return item;
      }
    }
    return null;
  }
// Stop Card Timer
  startTrackerItem(e, id) {
    stopEvent(e);

    const selectItem = this.findOneTrackerItem(id);

    if (!selectItem) {
      return;
    }
    kvdb.set("selectTrackerItem", selectItem);
    this.data.onlySet({
      selectTrackerItem: selectItem,
    });

    this.editFlowTimeTracker("new");

    this.viewRender();
    this.updateSelectTrackerStatus();
  }

// with the next 3 methods forming the drag and drop
  getSelectTrackerLast() {
    const tracker = this.data.get("selectTrackerItem", null);
    if (!tracker || !tracker.trackers || tracker.trackers.length < 1) {
      if (this.trackerTimer) {
        clearTimeout(this.trackerTimer);
      }
      return null;
    }
    return tracker.trackers[tracker.trackers.length - 1];
  }

  updateSelectTrackerStatus() {
    const lastItem = this.getSelectTrackerLast();
    if (!lastItem) {
      return;
    }
    const rest = typeof lastItem.rest != "undefined" ? lastItem.rest : 0;
    const end = typeof lastItem.end != "undefined" ? lastItem.end : 0;
    if (end > 0) {
      if (this.trackerTimer) {
        clearTimeout(this.trackerTimer);
      }
      const el = document.getElementById("trackerTimer");
      if (el) {
        el.innerHTML = formatTime(0);
      }
      return;
    }

    if (rest > 0) {
      this.doUpdateTrackerIme(rest, lastItem.end);
    } else {
      this.doUpdateTrackerIme(lastItem.start, rest);
    }
  }

  doUpdateTrackerIme(start, end) {
    var over = end;
    if (end < 1) {
      over = getUnixSeconds();
    }
    const s = over - start;
    document.getElementById("trackerTimer").innerHTML = formatTime(s);
    if (this.trackerTimer) {
      clearTimeout(this.trackerTimer);
    }
    this.trackerTimer = setTimeout(() => {
      this.doUpdateTrackerIme(start, end);
    }, 300);
  }

  cancelSelectTracker(e) {
    stopEvent(e);

    this.data.onlySet({
      selectTrackerItem: null,
    });
    kvdb.del("selectTrackerItem");
    this.viewRender();

    this.editFlowTimeTracker("stop");

    this.updateSelectTrackerStatus();
  }
// Events for the three buttons in the header
  editFlowTimeTracker(type) {
    const tracker = this.data.get("selectTrackerItem", null);
    if (!tracker) {
      if (this.trackerTimer) {
        clearTimeout(this.trackerTimer);
      }
      return null;
    }

    let lastItem;
    if (!tracker.trackers || tracker.trackers.length < 1) {
      tracker.trackers = [];
      lastItem = new FlowTimeTrackerItem();
      lastItem.start = 1;
      lastItem.rest = lastItem.start;
      lastItem.end = lastItem.rest;
    } else {
      lastItem = tracker.trackers[tracker.trackers.length - 1];
    }
    const rest = lastItem.rest ? lastItem.rest : 0;

    if (rest > 0) {
      if (type == "rest") {
        return;
      } else if (type == "new") {
        if (lastItem.end < 1) {
          lastItem.end = getUnixSeconds();
        }

        const item = new FlowTimeTrackerItem();
        item.start = getUnixSeconds();
        tracker.trackers.push(item);
      } else if (type == "break" || type == "stop") {
        if (lastItem.end < 1) {
          lastItem.end = getUnixSeconds();
          lastItem.break = type == "break" ? true : false;
        }
      }
    } else {
      if (type == "rest") {
        lastItem.rest = getUnixSeconds();
      } else if (type == "break" || type == "new") {
        if (lastItem.end < 1) {
          lastItem.rest = getUnixSeconds();
          lastItem.end = lastItem.rest;
          lastItem.break = type == "break" ? true : false;
        }

        if (type == "new") {
          const item = new FlowTimeTrackerItem();
          item.start = getUnixSeconds();
          tracker.trackers.push(item);
        }
      } else if (type == "stop") {
        if (lastItem.end < 1) {
          lastItem.rest = getUnixSeconds();
          lastItem.end = lastItem.rest;
        }
      }
    }

    kvdb.set("selectTrackerItem", tracker);
    this.data.onlySet({
      selectTrackerItem: tracker,
    });
    this.editListItem("progressList", tracker, false);
    if (type == "break") {
      this.cancelSelectTracker(window.event);
      return;
    }

    this.viewRender();
    this.updateSelectTrackerStatus();
  }

  setFlowTrackerDone(id, domId) {
    const tracker = this.findOneTrackerItem(id);
    if (!tracker) {
      return;
    }

    if (domId == "doneListArae") {
      tracker.end = getUnixSeconds();
      for (var i = 0; i < tracker.trackers.length; i++) {
        const item = tracker.trackers[i];
        if (item.end > 0) {
          if (item.rest < 1) {
            item.rest = item.end;
          }
        } else {
          item.end = tracker.end;
          if (item.rest < 1) {
            item.rest = item.end;
          }
        }
      }

      this.editListItem("progressList", tracker, false, true);
      this.editListItem("doneList", tracker, true);

      const selectTrackerItem = this.data.get("selectTrackerItem", null);
      if (selectTrackerItem && selectTrackerItem.id == tracker.id) {
        this.cancelSelectTracker(window.event);
      } else {
        this.viewRender();
      }
    } else {
      this.editListItem("taskList", tracker, false, true);
      this.editListItem("progressList", tracker, true);
      this.viewRender();
    }
  }

  /***************************************************** */
  /******************* Drage layer ********************* */
  /***************************************************** */

  dragDown(e, el, id, domId) {
    e = e || window.event;

    _dragMaster = this;
    if (!_isBindEvent) {
      document.body.addEventListener("mousemove", sysDragMove);
      document.body.addEventListener("mouseup", sysDragUp);
      _isBindEvent = true;
    }

    // this.dEle = el;
    const w = el.width;
    const h = el.height;

    //const mm = new HTMLAnchorElement();
    //mm.classList.add(draging)

    const cel = el.cloneNode(true);
    cel.classList.add("draging");
    cel.style.opacity = "0.6";
    cel.style.position = "fixed";
    cel.style.left = e.clientX - e.layerX + "px";
    cel.style.top = e.clientY - e.layerY + "px";
    cel.style.width = el.width + "px";
    cel.style.height = el.height + "px";
    cel.style.zIndex = "100";
    cel.setAttribute("data-layer-x", e.layerX);
    cel.setAttribute("data-layer-y", e.layerY);
    cel.setAttribute("data-id", id);
    cel.setAttribute("dom-id", domId);
    this.dEle = cel;

    document.body.appendChild(this.dEle);
  }
  dragMove(e) {
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();

    e = e || window.event;

    const aimBox = document.getElementById(this.dEle.getAttribute("dom-id"));
    const inArea = this.dragInArea(e, aimBox);
    if (inArea) {
      aimBox.classList.add("drag-status-in");
    }

    if (this.dEle) {
      const lx = this.dEle.getAttribute("data-layer-x");
      const ly = this.dEle.getAttribute("data-layer-y");
      this.dEle.style.left = e.clientX - lx + "px";
      this.dEle.style.top = e.clientY - ly + "px";
    }
  }

  dragUp(e) {
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();

    const aimBox = document.getElementById(this.dEle.getAttribute("dom-id"));
    const inArea = this.dragInArea(e, aimBox);
    aimBox.classList.remove("drag-status-in");
    console.log("dragUp", inArea);

    document.body.removeEventListener("mousemove", sysDragMove);
    document.body.removeEventListener("mouseup", sysDragUp);
    _isBindEvent = false;
    _dragMaster = null;

    if (this.dEle) {
      const id = this.dEle.getAttribute("data-id");
      document.body.removeChild(this.dEle);
      let domId = this.dEle.getAttribute("dom-id");
      this.dEle = null;

      if (inArea) {
        this.setFlowTrackerDone(id, domId);
      }
    }
  }

  dragInArea(e, aimBox) {
    if (!e || !aimBox) {
      return;
    }
    dEle;
    const ex = e.clientX;
    const ey = e.clientY;
    if (
      ex >= aimBox.offsetLeft &&
      ex <= aimBox.offsetLeft + aimBox.offsetWidth &&
      ey >= aimBox.offsetTop &&
      ey <= aimBox.offsetTop + aimBox.offsetHeight
    ) {
      return true;
    }

    return false;
  }

  // Music player progress
  updateProgress(ap) {
    const el = document.getElementById("audioCur");
    const tmel1 = document.getElementById("audioCurTime");
    const tmel2 = document.getElementById("audioTotalTime");

    const pos = ap.currentTime / ap.duration;
    const p = parseInt(Math.round(pos * 1000.0) / 10.0) % 100;
    el.style.display = "inline-block";
    el.style.width = p + "%";

    tmel1.innerHTML = formatTime2(ap.currentTime);
    tmel2.innerHTML = formatTime2(ap.duration);
  }
  //  Open all reading links
  openlink() {
    var els = document.querySelectorAll("#readList a");
    console.log(els);
    for (let i = 0; i < els.length; i++) {
      // v.onclick()
      let url = els[i].href;
      setTimeout(() => {
        window.open(url, "_blank");
      }, 500);
    }
  }
}

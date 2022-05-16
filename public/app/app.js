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
      form1: {},
      form2: {
        input1: "",
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
    console.log(arguments);
  }

  setFormValue(formName) {
    console.log(arguments);
  }
}

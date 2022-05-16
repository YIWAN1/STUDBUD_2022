import { BindObject, observeInsert, observeRender } from "../../../js/bind";
import juicer from "juicer";

import "./footer.scss";
const compiledTpl = juicer(require("./footer.shtml"));

export class Footer {
  // 
  components = [];

  data = {};
  containerId = "";

  constructor(id) {
    this.data = new BindObject(this);
    this.containerId = id;

    // 全局对象
    observeInsert(this);
  }

  init() {
    this.data.init({ msg: "--", id: "856" });
    console.log("footer init");
  }

  viewRender() {
    if (!this.containerId) {
      return;
    }
    observeRender(this, this.containerId, compiledTpl, this.data.get());
  }

  printInfo(v) {
    console.log("v", v);
  }
}

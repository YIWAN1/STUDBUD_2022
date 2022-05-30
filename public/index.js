import { App } from "./app/app.js";
import { observeInit } from "./js/bind.js";
import { kvdb } from "./js/kvdb.js";
import juicer from "juicer";

import "./main.scss";
import {
  flowDucation,
  flowDueDate,
  flowEstTime,
  flowItemRestTime,
  flowItemWorkTime,
} from "./js/flowTime.js";

(function () {
  juicer.set({
    "tag::operationOpen": "{@", // each/for/if
    "tag::operationClose": "}",
    "tag::interpolateOpen": "${", // Variable value
    "tag::interpolateClose": "}",
    "tag::noneencodeOpen": "$${",
    "tag::noneencodeClose": "}",
    "tag::commentOpen": "{#", //
    "tag::commentClose": "}",
  });
  juicer.register("json", (v) => JSON.stringify(v, null, " "));
  juicer.register("flowDueDate", flowDueDate);
  juicer.register("flowEstTime", flowEstTime);
  juicer.register("flowDucation", flowDucation);
  juicer.register("flowItemRestTime", flowItemRestTime);
  juicer.register("flowItemWorkTime", flowItemWorkTime);

  kvdb.init();

  observeInit();

  const app = new App("app");
  app.init();
  app.viewRender();
})();

import { App } from "./app/app.js";
import { observeInit } from "./js/bind.js";
import { kvdb } from "./js/kvdb.js";
import juicer from "juicer";

import "./main.scss";
import { flowDucation, flowDueDate, flowEstTime, flowItemResetTime, flowItemWorkTime } from "./js/flowTime.js";

(function () {
  juicer.set({
    "tag::operationOpen": "{@", // each/for/if
    "tag::operationClose": "}",
    "tag::interpolateOpen": "${", // 变量值
    "tag::interpolateClose": "}",
    "tag::noneencodeOpen": "$${",
    "tag::noneencodeClose": "}",
    "tag::commentOpen": "{#", //
    "tag::commentClose": "}",
  });
  juicer.register("flowDueDate", flowDueDate);
  juicer.register("flowEstTime", flowEstTime);
  juicer.register("flowDucation", flowDucation);
  juicer.register("flowItemResetTime", flowItemResetTime);
  juicer.register("flowItemWorkTime", flowItemWorkTime);

  kvdb.init();

  observeInit();

  const app = new App("app");
  app.init();
  app.viewRender();
})();

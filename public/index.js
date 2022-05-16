import { App } from "./app/app.js";
import { observeInit } from "./js/bind.js";
import { kvdb } from "./js/kvdb.js";
import juicer from "juicer";

import "./main.scss";

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

  kvdb.init();

  observeInit();

  const app = new App("app");
  app.init();
  app.viewRender();
})();

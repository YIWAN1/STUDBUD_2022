#!/usr/bin/env node

(() => {
  const fs = require("fs");
  const process = require("process");
  const utils = require("./utils.js");

  const c = fs.readFileSync("./package.json", { encoding: "utf-8" });
  const pkg = JSON.parse(c.toString());

  if (!pkg || !pkg["syncStaticDir"]) {
    return;
  }

  const src = pkg["syncStaticDir"]["src"];
  const dest = pkg["syncStaticDir"]["dest"];

  if (!src || !dest) {
    return;
  }

  if (!fs.existsSync(src)) {
    return;
  }

  utils.mkdirsSync(dest);
  utils.copyDir(src, dest);

  console.log('copy files to', dest);
})();

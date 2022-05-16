#!/usr/bin/env node

const utils = require("./utils.js");

(() => {
  const fs = require("fs");
  const process = require("process");

  // clean
  const cacheDir1 = "./.cache";
  const cacheDir2 = "./.parcel-cache";

  utils.removeDir(cacheDir1);
  utils.removeDir(cacheDir2);
})();

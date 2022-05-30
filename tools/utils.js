#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function mkdirsSync(dir) {
  if (fs.existsSync(dir)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dir))) {
      fs.mkdirSync(dir);
      return true;
    }
  }
}

function copyDir(src, dst) {
  let paths = fs.readdirSync(src); //Synchronous reading of the current directory
  paths.forEach(function (path) {
    var _src = src + "/" + path;
    var _dst = dst + "/" + path;
    fs.stat(_src, function (err, stats) {
      if (err) throw err;
      if (stats.isFile()) {
        let readable = fs.createReadStream(_src);
        let writable = fs.createWriteStream(_dst);
        readable.pipe(writable);
      } else if (stats.isDirectory()) {
        checkDirectory(_src, _dst, copyDir);
      }
    });
  });
}
function checkDirectory(src, dst, callback) {
  fs.access(dst, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdirSync(dst);
      callback(src, dst);
    } else {
      callback(src, dst);
    }
  });
}

function removeDir(p) {
  if (fs.existsSync(p)) {
    fs.readdirSync(p).forEach((file) => {
      var curPath = path.join(p, file);
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        removeDir(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(p);
  }
}

exports.mkdirsSync = mkdirsSync;
exports.copyDir = copyDir;
exports.removeDir = removeDir;

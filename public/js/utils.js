export const formatTime = (c) => {
  const d = c % 86400;
  const h = Math.floor(d / 3600);
  const m = Math.floor((d - h * 3600) / 60);
  const s = d % 60;

  return (
    "" +
    (h > 9 ? h : "0" + h) +
    ":" +
    (m > 9 ? m : "0" + m) +
    ":" +
    (s > 9 ? s : "0" + s)
  );
};

export const randId = () => {
  const c = "ID" + formatDate(new Date, 'yyMMddhhmmss') + Math.random();
  return c.replace(/[^0-1a-zA-Z]+/gi, "");
};

export const getUnixSeconds = () => {
  return Math.round(new Date().getTime() / 1000);
};

export const secondToHMS = (v) => {
  if (!v) {
    return "0s";
  }
  var res = "";
  var h = Math.floor(v / 3600);
  if (h > 0) {
    res += h + "h";
  }

  var m = Math.floor((v % 3600) / 60);
  if (m > 0) {
    res += m + "m";
    return res;
  }

  var s = v % 60;
  if (s > 0) {
    res += s + "s";
  }
  return res;
};

function newDate(v) {
  // return;
  if (v instanceof Date) {
    return v;
  }
  if (!v) {
    return new Date();
  }
  v = "" + v;
  v = v.replace(/\.[0-9]+/g, "");
  v = v.replace(/-/g, "/");
  return new Date(Date.parse(v));
}

// yyyy-MM-dd hh:mm:ss
export const formatDate = (date, fmt) => {
  // author: meizz
  if (!date) {
    return "";
  }
  if (!fmt) {
    return "" + date;
  }
  if (typeof date !== "object") {
    date = newDate(date);
  }
  const o = {
    "M+": date.getMonth() + 1, // month
    "d+": date.getDate(), // day
    "h+": date.getHours(), // hour
    "m+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // season
    S: date.getMilliseconds(), // ms
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k of Object.keys(o)) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

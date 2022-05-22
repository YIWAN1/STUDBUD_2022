import { formatDate, getUnixSeconds, secondToHMS } from "./utils";

export const flowEstTime = (v) => {
  if (!v || !v.start) {
    return "-";
  }
  var end = v.end ? v.end : 0;
  if (end < 1) {
    end = getUnixSeconds();
  }

  var ducation = end - v.start;
  return secondToHMS(ducation);
};

export const flowItemRestTime = (v) => {
  if (!v) {
    return "-";
  }
  var now = getUnixSeconds();
  var rest = v.rest ? v.rest : 0;
  if (rest < 1) {
    rest = now;
  }

  var end = v.end;
  if (end < 1) {
    end = now;
  }

  var ducation = end - v.rest;
  return secondToHMS(ducation);
};

export const flowItemWorkTime = (v) => {
  if (!v || !v.start) {
    return "-";
  }
  var rest = v.rest ? v.rest : 0;
  if (rest < 1) {
    rest = getUnixSeconds();
  }

  var ducation = rest - v.start;
  return secondToHMS(ducation);
};

export const flowDueDate = (v) => {
  if (!v) {
    return "-";
  }
  var start = v.start ? v.start : 0;
  return formatDate(new Date(start * 1000), "MM/dd/yyyy");
};

export const flowDucation = (v) => {
  if (!v || !v.start) {
    return "-";
  }
  var end = v.end ? v.end : 0;
  if (end < 1) {
    end = getUnixSeconds();
  }

  var s = new Date(v.start * 1000);
  var e = new Date(end * 1000);

  return formatDate(s, "hh:mm") + " ~ " + formatDate(s, "hh:mm");
};

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

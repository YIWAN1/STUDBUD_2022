export class BindObject {
  _val = {};
  _me = null;

  constructor(me) {
    this._me = me;
  }

  _set(data) {
    if (!data) {
      return;
    }
    for (var i in data) {
      this._val[i] = data[i];
    }
  }

  init(data) {
    this._set(data);

    // children objects
    if (this._me && this._me.components && this._me.components.length > 0) {
      for (const item of this._me.components) {
        if (item.init) {
          item.init();
        }
      }
    }
  }

  set(data) {
    this._set(data);

    if (this._me && this._me.viewRender) {
      this._me.viewRender();
    }
  }

  get() {
    return this._val;
  }

  clear() {
    this._val = {};
    if (this._me && this._me.viewRender) {
      this._me.viewRender();
    }
  }
}

var observeId = 1;

export const observeInit = () => {
  window.observeObjects = [];
  window.observeRun = observeRun;
};

export const observeRun = (id) => {
  if (window.observeObjects[id]) {
    return window.observeObjects[id];
  }
  return {};
};

export const observeInsert = (me) => {
  if (!me) {
    return;
  }
  me.__objectId = observeId++;
  window.observeObjects[me.__objectId] = me;
};

export const observeRender = (me, containerId, tpl, data) => {
  if (!me || !me.__objectId) {
    return;
  }
  const c = tpl.render(data);
  const cc = c
    .replace("this.value", "__THIS__VALUE")
    .replace(/this\./gi, "window.observeRun(" + me.__objectId + ").")
    .replace("__THIS__VALUE", "this.value");
  const el = document.getElementById(containerId);
  if (el) {
    el.innerHTML = cc;
  }

  // children objects
  if (me.components && me.components.length > 0) {
    for (const item of me.components) {
      if (item.viewRender) {
        item.viewRender();
      }
    }
  }
};

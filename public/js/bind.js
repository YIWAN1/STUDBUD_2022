export class BindObject {
  _val = {};
  _org = {};
  _me = null;
  _tmr = 0;

  constructor(me) {
    this._me = me;
  }

  onlySet(data) {
    if (!data) {
      return;
    }
    for (var i in data) {
      this._val[i] = data[i];
    }
  }

  _render() {
    if (this._me && this._me.viewRender) {
      if (this._tmr) {
        clearTimeout(this._tmr);
      }
      this._tmr = setTimeout(() => {
        this._me.viewRender();
      }, 10);
    }
  }

  _clone(v) {
    return JSON.parse(JSON.stringify(v));
  }

  init(data) {
    this.onlySet(data);
    this._org = this._clone(this._val);

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
    this.onlySet(data);
    this._render();
  }

  get() {
    return this._clone(this._val);
  }

  clear() {
    this._val = this._clone(this._org);
    this._render();
  }

  onlyReset(k) {
    if (!k || typeof this._org[k] == "undefined") {
      return;
    }
    this._val[k] = this._org[k];
  }

  reset(k) {
    tshi.onlyReset(k);
    this._render();
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
  // console.log('c', c, tpl, data);
  if(!c) {
    console.log('template parse error in .shtml file')
    return;
  }

  const cc = c
    .replace(/this\.value/gi, "__THIS__VALUE")
    .replace(/this\./gi, "window.observeRun(" + me.__objectId + ").")
    .replace(/__THIS__VALUE/gi, "this.value");
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

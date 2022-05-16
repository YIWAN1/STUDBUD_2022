import * as localforage from "localforage";

class KVDB {
  name = "com.default.app";
  version = "v0..1.0";

  constructor() {}

  /********** 存储 *********** */
  init(name) {
    if (!name) {
      name = this.name;
    }
    localforage.config({
      name: name,
      storeName: (name + "_" + this.version).replace(/[^a-zA-Z0-9]+/, "_"),
    });
  }

  async remove(key, fn) {
    if (!this.canStorage()) {
      if (fn) {
        fn(false);
      }
      return;
    }
    await localforage.removeItem(key);
    if (fn) {
      fn(true);
    }
  }

  canStorage() {
    return !!localforage;
  }

  async set(key, pval) {
    if (!this.canStorage()) {
      return (
        new Promise((resolve) => {
          resolve(null);
        })
      );
    }
    return (
      new Promise((resolve) => {
        const now = parseInt("" + Math.floor(new Date().getTime() / 1000), 10);
        localforage
          .setItem(key, { __AUTO_TIME_TAG: now, val: pval })
          .then((data) => {
            if (data) {
              resolve(data.val);
            } else {
              resolve(null);
            }
          })
          .catch(() => {
            resolve(null);
          });
      })
    );
  }

  async get(key, def) {
    if (!this.canStorage()) {
      return Promise.resolve(def ? def : null);
    }
    return new Promise((resolve) => {
      localforage
        .getItem(key)
        .then((data) => {
          if (data) {
            resolve(data.val);
          } else {
            resolve(def ? def : null);
          }
        })
        .catch(() => {
          resolve(def ? def : null);
        });
    });
  }

  async del(key) {
    if (!this.canStorage()) {
      return new Promise((resolve) => {
        resolve(null);
      });
    }
    return new Promise((resolve) => {
      localforage
        .removeItem(key)
        .then((data) => {
          resolve(null);
        })
        .catch(() => {
          resolve(null);
        });
    });
  }

  clearAll() {
    if (localforage) {
      localforage.clear();
    }
  }

  async getWithTimeoutStrict(key, timeoutSecond, def) {
    if (!this.canStorage()) {
      return new Promise((resolve) => {
        resolve({
          isTimeout: true,
          data: def ? def : null,
        });
      });
    }
    return new Promise((resolve) => {
      localforage
        .getItem(key)
        .then((data) => {
          const now = parseInt(
            "" + Math.floor(new Date().getTime() / 1000),
            10
          );
          if (
            !data ||
            !data.__AUTO_TIME_TAG ||
            data.__AUTO_TIME_TAG > now ||
            now - data.__AUTO_TIME_TAG > timeoutSecond
          ) {
            resolve({
              isTimeout: true,
              data: def ? def : null,
            });
            return;
          }
          resolve({
            isTimeout: false,
            data: data.val,
          });
        })
        .catch(() => {
          resolve({
            isTimeout: true,
            data: def ? def : null,
          });
        });
    });
  }

  async getWithTimeout(key, timeoutSecond, def) {
    const val = await this.getWithTimeoutStrict(key, timeoutSecond, def);
    return Promise.resolve(val.data);
  }
}

export const kvdb = new KVDB();

export class Qwer {
  #modules = {}
  
  set(name, moduleClass, settings = {}) {
    if (!this.#modules[name]) {
      this.#modules[name] = new moduleClass();
      Object.keys(settings).forEach((param) => {
        this.#modules[name][param] = settings[param];
      })
      if (this.#modules[name] && this.#modules[name].$preInitialize) {
        this.init(name)
      }
    }
  }
  
  get(name) {
    if(this.#modules[name] && this.#modules[name].__$initialized) {
      return this.#modules[name]
    }
    if (this.#modules[name]) {
      this.init(name)
    }
    return this.#modules[name] || null
  }

  getModules() {
    return this.#modules
  }

  qwer(...args) {
    return this.get(...args)
  }

  end() {
    return ;
  }

  init(name) {
    if (this.#modules[name].$init) {
      this.#modules[name].$init()
      this.#modules[name].__$initialized = true
    }
  }
  
  run () {
    return ;
  }
}

export default new Qwer();

export class Action {
  currentModule = null;

  run() {}
}

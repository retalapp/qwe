export class Qwe {
  modules = {}
  
  qwe(name, moduleClass, settings) {

    if(!moduleClass && !settings) {
      return this.modules[name] || null
    }
    if (!this.modules[name]) {
      this.modules[name] = new moduleClass();
      Object.keys(settings).forEach((param) => {
        this.modules[name][param] = settings[param];
      })
    }
    return this.modules[name] || null
  }

  end() {
    return ;
  }

  run(done) {
    console.log('Qwe HELLO')
    done()
  }
  initApps () {}
}

export default new Qwe();

import w from '../src/index.mjs'
import express from 'express'

export default class Router {
  defaultModule = 'admin'
  port = 3030

  run() {
    const app = express()
    console.log('✨✨✨✨💀💀💀💀😘😘😘😘: Router -> run -> w.getModules()', w.getModules())
    w.qwer(this.defaultModule).routes.forEach(route => {
      const actionToRun = new route.action()
      actionToRun.currentModule = this.defaultModule

      app.get(route.url, actionToRun.run)
      app.listen(this.port, () => console.log(`Example app listening at http://localhost:${this.port}`))
    })
  }
}


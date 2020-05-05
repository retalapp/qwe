import w, { Action } from '../../../src/index.mjs'
import ejs from 'ejs'
import fs from 'fs'
import path from 'path'

export default class IndexAction extends Action {

  run(req, res) {
    // const users = w.qwer(this.dataModule).get('users')
    const users = ['Gus', 'Tavo']
    // const render = w.qwer(this.assetsModule).render()
  
    res.send(ejs.renderFile(path.resolve(path.dirname(''),'views', 'index.ejs'), users))
  }
}

import IndexAction from './actions/Index.mjs'

export default class Admin {
  routes = [{
    url: '/',
    action: IndexAction,
  }]
}

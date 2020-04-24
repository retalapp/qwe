export default class Hello {
  language = 'English'
  
  hi(name) {
    return `Hello friend: ${name} -- ${this.language}`;
  }
}

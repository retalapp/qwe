import w, { Qwe } from './src/index.mjs';
import Hello from './modules/Hello.mjs';

w.qwe('hello', Hello, {
  language: 'Spanish'
});

w.qwe('hello2', Hello, {
  language: 'French'
});

const hello = w.qwe('hello');
const hello2 = w.qwe('hello2');

console.warn(hello.hi('Pablo'));
console.warn(hello2.hi('Pablo II'));

w.run(() => {
  console.warn('Running...')
});

// import { deepCopy } from './utils/index';
import { deepCopy } from '@/utils/index';

import './global.scss';

function createElement(type: string, props: { [key: string]: any }) {
  const element = document.createElement(type);

  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const value = props[key];
      element.setAttribute(key, value);
    }
  }

  return element;
}

const element = createElement('div', {
  class: 'app-wrapper',
  style: 'width: 200px; height: 200px; border: 1px solid #000;',
})

document.body.appendChild(element);

console.log('deepCopy({ name: "duanzhaoyang", age: 22 }) :>>', deepCopy({ name: 'duanzhaoyang', age: 22 }));
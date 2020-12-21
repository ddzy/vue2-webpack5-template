import { deepCopy } from '@/utils/index';

import './global.scss';
import * as Bg1Img from '@/assets/images/bg1.png';
import * as Txt1 from '@/assets/files/1.txt';
import * as Excel1 from '@/assets/files/1.xlsx';

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

console.log('Txt1 :>> ', Txt1);
console.log('Excel1 :>> ', Excel1);

const element = createElement('div', {
  class: 'app-wrapper',
  style: `width: 200px; height: 200px; border: 1px solid #000; background-image: url(${Bg1Img})`,
})
const image = createElement('img', {
  class: 'image',
  src: Bg1Img,
  style: 'display: block; width: 200px; height: 200px;',
})

// document.body.appendChild(element);
document.body.appendChild(image);


// console.log('deepCopy({ name: "duanzhaoyang", age: 22 }) :>>', deepCopy({ name: 'duanzhaoyang', age: 22 }));
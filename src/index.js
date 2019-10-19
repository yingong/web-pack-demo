import _ from 'lodash';
import './style.scss';
import printMe from './printNew.js';
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _.join(['hello', 'webpack', 'hazaztzz'], ' ');
  btn.onclick = printMe;
  btn.innerHTML = 'click to print';
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./printNew.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}

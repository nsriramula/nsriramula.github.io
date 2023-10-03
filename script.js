const main = document.getElementById('box');
const original = document.getElementByid('linkedin');
const clone = original.cloneNode(true);
main.replaceWith(clone);
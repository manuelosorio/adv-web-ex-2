(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
const modal = document.querySelector('#modal');
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const Modal = () => {
  openBtn.addEventListener('click', () => {
    modal.showModal();
  });
  closeBtn.addEventListener('click', () => {
    modal.close();
  });
};
exports.Modal = Modal;

},{}],2:[function(require,module,exports){
// import "core-js";
"use strict";

},{}],3:[function(require,module,exports){
"use strict";

var _modal = require("./components/modal");
document.addEventListener('DOMContentLoaded', () => {
  (0, _modal.Modal)();
});

},{"./components/modal":1}]},{},[1,2,3]);

'use strict';

// const { cloneElement } = require('react');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn, i) => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

//selecting elements in js
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
//

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

// creating elements in js

const message = document.createElement('div');

message.classList.add('cookie-message');
// message.textContent = 'we use cookies for improved functionality and analytics';

message.innerHTML = `we use cookies for improved functionality and analytics' <button class ='btn btn--close-cookie'> Got it </button>`;

header.prepend(message);
// header.append(message);
// console.log(message);
// header.append(message.cloneNode(true));
// header.append(message.cloneNode(true));

header.before(message);

// /removing elements

document.querySelector('.btn--close-cookie').addEventListener('click', e => {
  e.preventDefault();

  message.remove();
});

const btnScrlTo = document.querySelector('.btn--scroll-to');
const sectionTo = document.querySelector('#section--1');

btnScrlTo.addEventListener('click', () => {
  sectionTo.scrollIntoView({
    behavior: 'smooth',
  });
});

//insertadjacent html is better

//event delegation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    console.log('link ');

    const id = e.target.getAttribute('href');
    const target = document.querySelector(id);
    console.log(id);

    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstChild);
// console.log(h1.lastChild);

// //GOIN UP

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.backgroundColor = 'yellow';

// // going sideways

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     const target = document.querySelector(id);
//     console.log(id);

//     target.scrollIntoView({ behavior: 'smooth' });
//   });
// });
//styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';
// console.log(getComputedStyle(message));

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'beautiful logo';

// console.log(logo.designer);

// logo.getAttribute('designer');
// logo.setAttribute('company', 'bankist Company');

// const links = document.querySelector('.twitter-link');
// console.log(links.href);

// //data attributs
// console.log(logo.dataset.versionNumber);

// classList

// logo.classList.add('c', 'b');
// logo.classList.remove('c');
// logo.classList.contains('c');
// logo.classList.toggle('c');

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('ad event listener: great you are reading the heading');
//   console.log('goated');
// });

// const h1Alert = function (e) {
//   alert('ad event listener: great you are reading the heading');
//   console.log('goated');
// };

// h1.addEventListener('mouseenter', h1Alert);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', h1Alert);
// }, 3000);

//random colors

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
//   // e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   // e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target, e.currentTarget);
// });

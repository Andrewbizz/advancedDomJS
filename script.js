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

message.innerHTML = `we use cookies for improved functionality and analytics' <button class ='btn btn--close-cookie'> Got it </button>;`;

header.prepend(message);
// header.append(message);
// console.log(message);
// header.append(message.cloneNode(true));
// header.append(message.cloneNode(true));

// header.before(message);

// /removing elements

document.querySelector('.btn--close-cookie').addEventListener('click', e => {
  e.preventDefault();

  message.remove();
});

//insertadjacent html is better

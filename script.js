'use strict';

// const { lazy } = require('react');

// const { cloneElement } = require('react');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');
const message = document.createElement('div');
const nav = document.querySelector('.nav');

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

//

document.getElementById('section--1');

// creating elements in js

message.classList.add('cookie-message');
// message.textContent = 'we use cookies for improved functionality and analytics';

message.innerHTML = `we use cookies for improved functionality and analytics' <button class ='btn btn--close-cookie'> Got it </button>`;

// header.prepend(message);
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

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');

const contentAreas = document.querySelectorAll('.operations__content');

// tabs.forEach(t=> t.addEventListener('click', function(e){

// }))

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  //remove from all the other tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // activate content area

  // console.log(clicked.dataset.tab);

  contentAreas.forEach(e => {
    e.classList.remove('operations__content--active');
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');

    const logo = link.closest('nav').querySelector('img');

    siblings.forEach(e => {
      if (e !== link) e.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

// addding sticky nav
// const initCord = sectionTo.getBoundingClientRect();

// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > initCord.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

const watched = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect();

const obsFn = function (enteries) {
  const entery = enteries[0];

  // console.log(entery);

  if (!entery.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px`,
};

const observer = new IntersectionObserver(obsFn, obsOptions);

observer.observe(watched);

const allSects = document.querySelectorAll('.section');
const showSect = function (enteries, observer) {
  const entery = enteries[0];
  // console.log(entery);
  if (!entery.isIntersecting) return;
  entery.target.classList.remove('section--hidden');
  observer.unobserve(entery.target);
};
const sectObs = new IntersectionObserver(showSect, {
  root: null,
  threshold: 0.15,
});

allSects.forEach(sect => {
  sectObs.observe(sect);
  sect.classList.add('section--hidden');
});
///menu fade animations

//lazy loading images

const loadImg = function (enteries, observer) {
  const entery = enteries[0];
  if (!entery.isIntersecting) return;

  entery.target.src = entery.target.dataset.src;

  // console.log(entery.target);
  entery.target.addEventListener('load', () => {
    entery.target.classList.remove('lazy-img');
  });

  observer.unobserve(entery.target);
};
const imgxs = document.querySelectorAll('img[data-src]');

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgxs.forEach(el => imgObserver.observe(el));
let curSlide = 0;

const slides = document.querySelectorAll('.slide');
const maxSlides = slides.length - 1;
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const NextSlide = function () {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener('click', NextSlide);
btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    NextSlide();
  }
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

// const dotCont = document.querySelector('.dots');
// const createDots = function () {
//   slides.forEach(function (s, i) {
//     dotCont.insertAdjacentElement(
//       'beforeend',
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };

const dotCont = document.querySelector('.dots');
const createDots = function () {
  slides.forEach(function (s, i) {
    dotCont.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

dotCont.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const init = function () {
  createDots();
  activateDot(curSlide);
  goToSlide(0);
};

init();

window.addEventListener('load', function (ef) {
  console.log(ef);
});

// window.addEventListener('beforeunload', function (ef) {
//   ef.preventDefault();
//   console.log(ef);
//   ef.returnValue = 'her';
// });

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

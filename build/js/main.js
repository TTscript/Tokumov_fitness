// //////////////////////////////////////////////////////////////////////V I D E O//////////////////////////////////////////////////////////////////////////////////////////////////
const videoWrapper = document.querySelector('.gym__video-wrapper');
const video = document.querySelector('.gym__video-wrapper video');
const videoBtnWrapper = document.querySelector('.gym__video-button-wrapper');
const videoBtn = document.querySelector('#video-button');
const videoMobile = document.querySelector('[data-name="video-mobile"]');
const mediaQueryMobile = window.matchMedia('(max-width: 767px)');
const gym = document.querySelector('.gym');

let isPlaying;

videoBtn.addEventListener('click', () => {
  if (!isPlaying) {
    videoBtnWrapper.style.display = 'none';
  }

  isPlaying = !isPlaying;
  if (mediaQueryMobile.matches) {
    videoMobile.play();
  } else {
    video.play();
  }
});

videoWrapper.addEventListener('mouseover', () => {
  if (mediaQueryMobile.matches) {
    videoMobile.setAttribute('controls', '');
  } else {
    video.setAttribute('controls', '');
  }
});

gym.addEventListener('mouseover', (e) => {
  if (e.target !== video) {
    video.removeAttribute('controls');
  }
  if (e.target !== videoMobile) {
    videoMobile.removeAttribute('controls');
  }
});

// //////////////////////////////////////////////////////////////////////V I D E O//////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////T A B S//////////////////////////////////////////////////////////////////////////////////////////////////

const tabs = Array.from(document.querySelectorAll('.passes__tabs button'));
const tabOne = document.querySelector('#tab-1');
const trainingQuantity = document.querySelector('.passes__card p');
const coachPrice = document.querySelector('.passes__coach span');
const dayPrice = document.querySelector('.passes__day span');
const fullDayPrice = document.querySelector('.passes__full-day span');
const coachPriceShadow = document.querySelector('.passes__coach p[data-content]');
const dayPriceShadow = document.querySelector('.passes__day p[data-content]');
const fullDayPriceShadow = document.querySelector('.passes__full-day p[data-content]');

tabOne.classList.add('passes__tab-active');

tabs.forEach((item) => {
  item.addEventListener('click', () => {
    tabs.forEach((el) => el.classList.remove('passes__tab-active'));
    item.classList.add('passes__tab-active');

    if (item.id === 'tab-1') {
      activateTab();
    } else if (item.id === 'tab-2') {
      activateTab(72, 10000, 8500, 13500);
    } else if (item.id === 'tab-3') {
      activateTab(144, 50000, 17000, 27000);
    }
  });
});

function activateTab(quantity = 12, coach = 5000, day = 1700, fullDay = 2700) {
  trainingQuantity.textContent = `${quantity} занятий`;
  coachPrice.textContent = coach;
  dayPrice.textContent = day;
  fullDayPrice.textContent = fullDay;

  coachPriceShadow.dataset.content = coach;
  dayPriceShadow.dataset.content = day;
  fullDayPriceShadow.dataset.content = fullDay;
}

// //////////////////////////////////////////////////////////////////////T A B S//////////////////////////////////////////////////////////////////////////////////////////////////

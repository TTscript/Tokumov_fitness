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

// //////////////////////////////////////////////////////////////////////P A S S E S    C A R D S     S I Z E//////////////////////////////////////////////////////////////////////////////////////////////////

const passes = document.querySelector('.passes');
const cardsBlock = document.querySelector('.passes__cards-block');
const mediaPassesDesktop = window.matchMedia('(min-width: 1024px)');
const mediaPassesTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
const mediaPassesMobile = window.matchMedia('(min-width: 481px) and (max-width: 767px)');
const mediaPassesLowMobile = window.matchMedia('(max-width: 480px)');

let width;

window.addEventListener('resize',  changePassesBlock);

function changePassesBlock() {
  width = passes.offsetWidth;

  if (mediaPassesDesktop.matches) {
    cardsBlock.style.width = `${width / 1.1}px`;
    cardsBlock.style.height = 'auto';
  } else if (mediaPassesTablet.matches) {
    cardsBlock.style.width = '442px';
    cardsBlock.style.height = 'auto';
  } else if (mediaPassesMobile.matches) {
    cardsBlock.style.width = '442px';
    cardsBlock.style.height = 'auto';
  } else if (mediaPassesLowMobile.matches) {
    cardsBlock.style.width = '100%';
    cardsBlock.style.height = 'auto';
  }
}

changePassesBlock();

// //////////////////////////////////////////////////////////////////////P A S S E S    C A R D S     S I Z E//////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////C O A C H E S     S L I D E R//////////////////////////////////////////////////////////////////////////////////////////////////
const coaches = document.querySelector('.coaches');
const coachesSlider = document.querySelector('.coaches__slider');
const coachesLine = document.querySelector('.coaches__line');
const coachesImages = document.querySelectorAll('.coaches__person-card img');
const coachesLeftArrow = document.querySelector('#coaches-left-arrow');
const coachesRightArrow = document.querySelector('#coaches-right-arrow');
const coachesContainer = document.querySelector('.coaches__container');

let leftArrow = 0;
let rightArrow = 0;
let sliderWidth;
let leftArrowClick = false;
let rightArrowClick = false;

window.addEventListener('resize', setCoachesSlider);

function setCoachesSlider() {
  setTimeout(() => {
    coachesLine.style.transform = 'translate(0)';
  }, 500);
}

coachesLeftArrow.addEventListener('click', () => {
  leftArrowClick = true;
  setTimeout(() => {
    rightArrowClick = false;
  }, 50);
  leftArrow = leftArrow - 1200;

  function getTranslateX() {
    const style = window.getComputedStyle(coachesLine);
    const matrix = new DOMMatrixReadOnly(style.transform).m41;
    return matrix;
  }

  if (getTranslateX() >= 0) {
    leftArrow = 2400;
  } else if (rightArrowClick === true) {
    leftArrow = 0;
  }

  coachesLine.style.transform = `translateX(${-(leftArrow)}px)`;
});

coachesRightArrow.addEventListener('click', () => {
  rightArrowClick = true;

  setTimeout(() => {
    leftArrowClick = false;
  }, 50);

  rightArrow = rightArrow - 1200;

  function getTranslateX() {
    const style = window.getComputedStyle(coachesLine);
    const matrix = new DOMMatrixReadOnly(style.transform).m41;
    return matrix;
  }

  if (getTranslateX() <= -2400) {
    rightArrow = 0;
  } else if (leftArrowClick === true) {
    rightArrow = 0;
  }

  coachesLine.style.transform = `translateX(${(rightArrow)}px)`;
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1301px)').matches) {
    coachesSlider.style.width = '1162px';
    coachesImages.forEach((item) => {
      item.style.width = '260px';
      item.style.height = '294px';
    });
  } else if (window.matchMedia('(min-width: 1024px) and (max-width: 1300px)').matches) {
    sliderWidth = coaches.offsetWidth;
    coachesContainer.style.maxWidth = `${width / 222}`;
    coachesSlider.style.maxWidth = '1162px';
    coachesSlider.style.width = `${width / 1.1}px`;
    coachesImages.forEach((item) => {
      item.style.width = `${width / 5}px`;
      item.style.height = 'auto';
    });
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
    coachesSlider.style.maxWidth = `${width / 1.7}px`;
    coachesImages.forEach((item) => {
      item.style.width = `${width / 3.56}px`;
      item.style.height = 'auto';
    });
  }
});

const advantagesLeftBlock = document.querySelector('.advantages__left-block');
const advantagesRightBlock = document.querySelector('.advantages__right-block');
const advantageArea = document.querySelector('.advantages__area');
const advantageComfort = document.querySelector('.advantages__comfort');
const advantageParking = document.querySelector('.advantages__parking');
// const advantageExperience = document.querySelector('.advantages__experience');


function replaceAdvantageBlocks() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    advantagesLeftBlock.appendChild(advantageComfort);
    advantagesRightBlock.prepend(advantageParking);
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    advantagesLeftBlock.appendChild(advantageParking);
    advantagesRightBlock.prepend(advantageComfort);
  }
}

replaceAdvantageBlocks();

window.addEventListener('resize', () => {
  replaceAdvantageBlocks();
});

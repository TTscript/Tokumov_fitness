import Swiper from './vendor.js';

const sliderMediaDesktop = window.matchMedia('(min-width: 1024px)');
const sliderMediaTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
const sliderMediaMobile = window.matchMedia('(min-width: 320px) and (max-width: 600px)');

const coachesSwiper = new Swiper('.coaches__slider', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    }
  },
  autoHeight: true,
  onlyInViewport: true,
});

coachesSwiper.slideTo(1);

new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  onlyInViewport: true,
  autoHeight: true,
  preloadImages: true,
});

window.addEventListener('resize', () => {
  slideImages();
});

function slideImages() {
  if (sliderMediaDesktop.matches) {
    coachesSwiper.slideTo(1);
  } else if (sliderMediaTablet.matches) {
    coachesSwiper.slideTo(1);
  } else if (sliderMediaMobile.matches) {
    coachesSwiper.slideTo(3);
  }
}

slideImages();

// //////////////////////////////////////////////////////////////////////V I D E O//////////////////////////////////////////////////////////////////////////////////////////////////
const videoWrapper = document.querySelector('.gym__video-wrapper');
const video = document.querySelector('.gym__video-wrapper video');
const videoBtnWrapper = document.querySelector('.gym__video-button-wrapper');
const videoBtn = document.querySelector('#video-button');
const videoMobile = document.querySelector('[data-name="video-mobile"]');
const mediaQueryGymMobile = window.matchMedia('(max-width: 767px)');
const gym = document.querySelector('.gym');


const isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;


videoBtn.addEventListener('click', () => {
  if (!isPlaying && mediaQueryGymMobile.matches) {
    videoMobile.play();
    videoBtnWrapper.style.display = 'none';
    videoWrapper.classList.add('gym__video-wrapper--active');
  } else {
    video.play();
    videoBtnWrapper.style.display = 'none';
    videoWrapper.classList.add('gym__video-wrapper--active');
  }
});

videoWrapper.addEventListener('mouseover', () => {
  if (mediaQueryGymMobile.matches) {
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

// ///////////////////////////////////////////////////////////V I D E O//////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////T A B S//////////////////////////////////////////////////////////////////////////////////////////////////

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

// //////////////////////////// ///////////////////////////////T A B S//////////////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////P A S S E S    C A R D S     S I Z E//////////////////////////////////////////////////////////////////////////////////////////////////

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

// /////////////////////////////////P A S S E S    C A R D S     S I Z E//////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////C O A C H E S   S L I D E R/////////////////////////////////////////////////////////////

const coachesSlider = document.querySelector('.coaches__slider');
// const coachesLine = document.querySelector('.coaches__line');
const coachesCard = document.querySelectorAll('.coaches__person-card');
const coachesImages = document.querySelectorAll('.coaches__person-card img');
const coachesLeftArrow = document.querySelector('#coaches-left-arrow');
const coachesRightArrow = document.querySelector('#coaches-right-arrow');
const coachesSwiperPrev = document.querySelector('.coaches__slider .swiper-button-prev');
const coachesSwiperNext = document.querySelector('.coaches__slider .swiper-button-next');

coachesCard.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('coaches__person-card--active');
  });
});

coachesLeftArrow.addEventListener('click', () => {
  coachesSwiperPrev.click();
});

coachesRightArrow.addEventListener('click', () => {
  coachesSwiperNext.click();
});

window.addEventListener('resize', () => {
  changePicturesSizes();
});

function changePicturesSizes() {
  if (window.matchMedia('(min-width: 1301px)').matches) {
    coachesSlider.style.width = '1162px';
    coachesImages.forEach((item) => {
      item.style.width = '260px';
      item.style.height = '294px';
    });
  } else if (window.matchMedia('(min-width: 1024px) and (max-width: 1300px)').matches) {
    coachesSlider.style.maxWidth = '1162px';
    coachesSlider.style.width = `${width / 1.1}px`;
    coachesImages.forEach((item) => {
      item.style.width = `${width / 5}px !important`;
      item.style.height = 'auto';
    });
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
    coachesSlider.style.maxWidth = `${width / 1.36}px`;
    coachesImages.forEach((item) => {
      item.style.width = `${width / 2.9}px`;
      item.style.height = 'auto';
    });
  // } else if (window.matchMedia('(min-width: 600px) and (max-width: 767px)').matches) {
  //   coachesSlider.style.maxWidth = `${width / 1.5}px`;
  //   coachesImages.forEach((item) => {
  //     item.style.width = `${width / 3.1}px`;
  //     item.style.height = 'auto';
  //   });
  } else if (window.matchMedia('(min-width: 350px) and (max-width: 599px)').matches) {
    coachesSlider.style.maxWidth = `${width / 1.7}px`;
    coachesImages.forEach((item) => {
      item.style.width = `${width / 1.7}px`;
      item.style.height = 'auto';
    });
  } else if (window.matchMedia('(max-width: 349px)').matches) {
    coachesSlider.style.maxWidth = `${width / 1.37}px`;
    coachesImages.forEach((item) => {
      item.style.width = `${width / 1.4}px`;
      item.style.height = '274px';
    });
  }
}

changePicturesSizes();

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    location.reload();
  }, 500);
});

////////////////////////////////////////C O A C H E S   S L I D E R/////////////////////////////////////////////////////////////

const advantagesLeftBlock = document.querySelector('.advantages__left-block');
const advantagesRightBlock = document.querySelector('.advantages__right-block');
const advantageComfort = document.querySelector('.advantages__comfort');
const advantageParking = document.querySelector('.advantages__parking');

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

const reviewsSection = document.querySelector('.reviews');
const review = document.querySelector('.reviews__review');
const reviews = Array.from(document.querySelectorAll('.reviews__review'));
const reviewsLine = document.querySelector('.reviews__line');
const reviewsLeftButton = document.querySelector('#reviews-left-arrow');
const reviewsRightButton = document.querySelector('#reviews-right-arrow');
const reviewsSlider = document.querySelector('.reviews__slider');
const reviewHeading = review.querySelector('span');
const reviewParagraph = review.querySelector('p');

reviewHeading.addEventListener('DOMCharacterDataModified', () => {
  reviewsSlider.style.height = `${review.offsetHeight}px`;
});

reviewParagraph.addEventListener('DOMCharacterDataModified', () => {
  reviewsSlider.style.height = `${review.offsetHeight}px`;
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    reviewsLine.style.transform = 'translateX(0)';
  }, 500);

  changeReviewSize();
});


function changeReviewSize() {
  if (window.matchMedia('(min-width: 651px)').matches) {
    reviewsSlider.style.maxWidth = '560px';
    reviews.forEach((item) => {
      item.style.width = '560px';
      item.style.height = '242px';
    });
  } else if (window.matchMedia('(min-width: 320px) and (max-width: 650px)').matches) {

    if (review.offsetWidth <= 226 && reviewsSection.offsetWidth <= 440) {
      return true;
    } else {
      reviewsSlider.style.maxWidth = `${width / 2}px`;

      reviews.forEach((item) => {
        item.style.width = `${width / 2}px`;
        item.style.height = 'auto';
      });
    }
  }
}

reviews.forEach((item) => {
  reviewsSlider.style.maxWidth = '226px';
  item.style.width = '226px';
});

changeReviewSize();

const footerInner = document.querySelector('.page-footer__inner');
const footerLogo = document.querySelector('#footer-logo');
const footerList = document.querySelector('.page-footer ul');

window.addEventListener('resize', () => {
  addLogoToList();
});

function addLogoToList() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    footerInner.prepend(footerLogo);
  } else if (window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches) {
    footerList.prepend(footerLogo);
  }
}

addLogoToList();

// window.addEventListener('resize', setCoachesSlider);

///////////////////////////////////////////////////////////////R E V I E W S     S L I D E R//////////////////////////////////////////////////////////////////////
const reviewsSwiperPrev = document.querySelector('.reviews__slider .swiper-button-prev');
const reviewsSwiperNext = document.querySelector('.reviews__slider .swiper-button-next');

reviewsLeftButton.addEventListener('click', () => {
  reviewsSwiperPrev.click();
});

reviewsRightButton.addEventListener('click', () => {
  reviewsSwiperNext.click();
});

///////////////////////////////////////////////////////////////R E V I E W S     S L I D E R//////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////V A L I D A T I O N//////////////////////////////////////////////////////////////////////

const shape = document.querySelector('#shape');
const nameWrapper = document.querySelector('.shape__input-name-wrapper');
const shapeName = document.querySelector('#input-name');
const phoneWrapper = document.querySelector('.shape__input-phone-wrapper');
const shapePhone = document.querySelector('#input-phone');

function validateName(name) {
  const re = /^[a-z\d. !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~А-яЁё]{3,}$/i;
  return re.test(String(name));
}

function validatePhone(phone) {
  const re = /^[a-z\d. !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~А-яЁё]{3,}$/i;
  return re.test(String(phone));
}

shape.onsubmit = function() {
  const nameVal = shapeName.value,
    telVal = shapePhone.value;

  if (nameVal === '') {
    nameWrapper.classList.add('shape__error');
    return false;
  } else {
    nameWrapper.classList.remove('shape__error');
  }

  if (!validateName(nameVal)) {
    nameWrapper.classList.add('shape__error');
    return false;
  } else {
    nameWrapper.classList.remove('shape__error');
  }

  if (!validatePhone(telVal)) {
    phoneWrapper.classList.add('shape__error');
    return false;
  } else {
    phoneWrapper.classList.remove('shape__error');
  }

  if (telVal === '' || telVal.length < 11) {
    phoneWrapper.classList.add('shape__error');
    return false;
  } else {
    phoneWrapper.classList.remove('shape__error');
  }
};

///////////////////////////////////////////////////////////////V A L I D A T I O N//////////////////////////////////////////////////////////////////////


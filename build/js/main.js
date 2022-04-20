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


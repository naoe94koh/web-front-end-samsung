import {
  isDarkMode,
  addDarkMode,
  removeDarkMode,
  setButtonLabel,
} from '../utils/index.js';

const darkModeButton = document.querySelector('[data-dark-mode]');

darkModeButton?.addEventListener('click', ({ target: buttonElement }) => {
  // if, else, else if
  if (isDarkMode()) {
    removeDarkMode();
    setButtonLabel(buttonElement, '다크 모드 전환');
  } else {
    addDarkMode();
    setButtonLabel(buttonElement, '라이트 모드 전환');
  }
});

// switch, case, default, break

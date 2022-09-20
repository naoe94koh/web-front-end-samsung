import {
  isDarkMode,
  addDarkMode,
  removeDarkMode,
  saveDarkMode,
  loadDarkMode,
  setButtonLabel,
  typeOf,
  getNode as $,
  getNodeList as $$,
  css,
} from '../utils/index.js';

(function init() {
  const darkModeButton = $('[data-dark-mode]');

  if (loadDarkMode() === 'on') {
    addDarkMode();
    setButtonLabel(darkModeButton, '라이트 모드 전환');
  }

  darkModeButton?.addEventListener('click', ({ target: buttonElement }) => {
    if (isDarkMode()) {
      removeDarkMode();
      saveDarkMode('off');
      setButtonLabel(buttonElement, '다크 모드 전환');
    } else {
      addDarkMode();
      saveDarkMode('on');
      setButtonLabel(buttonElement, '라이트 모드 전환');
    }
  });

  // switch, case, default, break
})();

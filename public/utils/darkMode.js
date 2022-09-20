import storage from './storage.js';
import { addClass, removeClass, hasClass } from './dom.js';

const rootElement = document.documentElement;

export const isDarkMode = () => hasClass(rootElement, 'dark');
export const addDarkMode = () => addClass(rootElement, 'dark');
export const removeDarkMode = () => removeClass(rootElement, 'dark');

const DARK_MODE_KEY = 'darkMode';

export const saveDarkMode = (modeValue) =>
  storage.save(DARK_MODE_KEY, modeValue);

export const loadDarkMode = () => storage.load(DARK_MODE_KEY);

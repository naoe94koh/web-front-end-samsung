import { addClass, removeClass, hasClass } from './dom.js';

const rootElement = document.documentElement;

export const isDarkMode = () => hasClass(rootElement, 'dark');
export const addDarkMode = () => addClass(rootElement, 'dark');
export const removeDarkMode = () => removeClass(rootElement, 'dark');

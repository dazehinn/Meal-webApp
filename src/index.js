import './style.css';

import loadAPIMeals from './modules/meals/loadAPIMeals.js';
import createPopup from './modules/comments/createPopup.js';
import getLogo from './modules/logo/getLogo.js';

window.onload = () => {
  getLogo();
  loadAPIMeals();
  createPopup();
};

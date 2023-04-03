import './style.css';

import loadAPIMeals from './modules/meals/loadAPIMeals.js';
import createPopup from './modules/comments/createPopup.js';

window.onload = () => {
  loadAPIMeals();
  createPopup();
};

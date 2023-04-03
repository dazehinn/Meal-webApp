import displayComments from './displayComments.js';
import fetchAPIComments from './fetchAPIComments.js';

const loadAPIComments = async (idMeal) => {
  const comments = await fetchAPIComments(idMeal);
  const category = document.querySelector('.category');
  category.setAttribute('id', idMeal);
  const area = document.querySelector('.area');
  const instructions = document.querySelector('.instructions');
  const mealName = document.querySelector('.mealName');
  const mealImage = document.querySelector('.thumb');
  const commentArray = comments.meals[0];
  category.innerHTML = `Category: ${commentArray.strCategory}`;
  area.innerHTML = `Area: ${commentArray.strArea}`;
  instructions.innerHTML = `<b>Instructions: </b>${commentArray.strInstructions}`;
  mealName.innerHTML = commentArray.strMeal;
  mealImage.src = commentArray.strMealThumb;
  displayComments();
};

export default loadAPIComments;

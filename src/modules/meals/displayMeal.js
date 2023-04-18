import displayAPIComments from '../comments/displayAPIComments.js';
import loadAPIComments from '../comments/loadAPIComments.js';
import updateLikes from '../likes/updateLikes.js';

const displayMeal = (mealCard, meal) => {
  const mealsList = document.getElementById('meals_list');
  mealsList.appendChild(mealCard);

  const commentsBtn = document.getElementById(`comments_${meal.idMeal}`);
  commentsBtn.addEventListener('click', () => {
    loadAPIComments(meal.idMeal);
    displayAPIComments(meal.idMeal);
  });
  const likeBtn = document.querySelector(`#like_${meal.idMeal}`);
  likeBtn.addEventListener('click', async () => {
    await updateLikes(meal.idMeal);
  });
};

export default displayMeal;
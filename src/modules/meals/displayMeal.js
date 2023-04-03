import loadAPIComments from '../comments/loadAPIComments.js';

const displayMeal = (mealCard, meal) => {
  const mealsList = document.getElementById('meals_list');
  mealsList.appendChild(mealCard);

  const commentsBtn = document.getElementById(`comments_${meal.idMeal}`);
  commentsBtn.addEventListener('click', () => {
    loadAPIComments(meal.idMeal);
  });
};

export default displayMeal;
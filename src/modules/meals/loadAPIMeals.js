import displayMeal from './displayMeal.js';
import mealCard from './mealCard.js';
import fetchAPIMeals from './fetchAPIMeals.js';
import { fetchMealLikes } from '../likes/fetchAPILikes.js';

const totalMeals = document.querySelector('.total-meals');
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const loadAPIMeals = async () => {
  const meals = await fetchAPIMeals();
  meals.forEach(async (meal) => {
    const like = await fetchMealLikes(meal.idMeal);
    const containerElement = mealCard(meal, like);
    displayMeal(containerElement, meal);
  });
  totalMeals.innerHTML = `(${meals.length}) meals`;
};

export default loadAPIMeals;
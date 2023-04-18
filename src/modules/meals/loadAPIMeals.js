import displayMeal from './displayMeal.js';
import mealCard from './mealCard.js';
import fetchAPIMeals from './fetchAPIMeals.js';
import { fetchMealLikes } from '../likes/fetchAPILikes.js';
import countMeals from './countMeals.js';

const loadAPIMeals = async () => {
  const meals = await fetchAPIMeals();
  meals.forEach(async (meal) => {
    const like = await fetchMealLikes(meal.idMeal);
    const containerElement = mealCard(meal, like);
    displayMeal(containerElement, meal);
    countMeals();
  });
};

export default loadAPIMeals;
import displayMeal from './displayMeal.js';
import mealCard from './mealCard.js';
import fetchAPIMeals from './fetchAPIMeals.js';

const loadAPIMeals = async () => {
  const meals = await fetchAPIMeals();
  meals.forEach((meal) => {
    const containerElement = mealCard(meal);
    displayMeal(containerElement);
  });
};

export default loadAPIMeals;
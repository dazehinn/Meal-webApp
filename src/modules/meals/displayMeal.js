const displayMeal = (mealCard) => {
    const mealsList = document.getElementById('meals_list');
    mealsList.appendChild(mealCard);
  };
  
  export default displayMeal;
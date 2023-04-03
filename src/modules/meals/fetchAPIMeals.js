const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchAPIMeals = async () => {
  const request = await fetch(apiUrl);
  const { meals } = await request.json();
  return meals;
};

export default fetchAPIMeals;
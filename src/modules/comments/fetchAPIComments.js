const fetchAPIComments = async (idMeal) => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const response = await fetch(apiUrl + idMeal);
  const comments = await response.json();
  return comments;
};

export default fetchAPIComments;
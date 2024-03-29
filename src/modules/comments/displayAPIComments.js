import fetchAPIComments from './fetchAPIComments.js';

const displayAPIComments = async (idMeals) => {
  const comments = await fetchAPIComments(idMeals);
  const commentCntr = document.getElementById('comments_list');
  const container = document.getElementById('error_message');
  container.textContent = '';
  let prevComments = '';
  if (comments) {
    comments.forEach((e) => {
      prevComments += `
        <li class='comment_container'>
          <h5><b>@${e.username}</b></h5>
          <h5>${e.comment}</h5>
          <h6 class="dateOf_text text-end">${e.creation_date}</h6>
        </li>
      `;
    });
    commentCntr.innerHTML = prevComments;
  } else {
    container.textContent = 'There are no comments yet for this meal.';
  }
};

export default displayAPIComments;
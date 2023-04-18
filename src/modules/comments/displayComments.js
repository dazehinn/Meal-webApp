const displayComments = () => {
  const commentsSection = document.getElementById('popup_section');
  const body = document.querySelector('body');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');

  body.classList.add('block_scroll');
  footer.classList.add('display_none');
  nav.classList.add('display_none');
  commentsSection.classList.remove('display_none');
  commentsSection.classList.add('display_block');
};

export default displayComments;
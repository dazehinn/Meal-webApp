const closePopup = () => {
  const popupSection = document.getElementById('popup_section');
  const body = document.querySelector('body');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  popupSection.classList.add('display_none');
  popupSection.classList.remove('display_block');
  body.classList.remove('block_scroll');
  nav.classList.remove('display_none');
  footer.classList.remove('display_none');
};

export default closePopup;
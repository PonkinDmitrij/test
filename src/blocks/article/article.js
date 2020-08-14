const ARTICLES = 'articles';
const COLLAPSE_BTN = 'article__collapse';
const COLLAPSE_BTN_OPEN = `${COLLAPSE_BTN}--open`;
const articles = document.querySelector(`.${ARTICLES}`);

const handleCollapseArticle = (evt) => {
  if (evt.target.classList.contains(COLLAPSE_BTN)) {
    const contentElement = evt.target.parentElement.nextElementSibling;
    evt.target.classList.toggle(COLLAPSE_BTN_OPEN);

    if (evt.target.classList.contains(COLLAPSE_BTN_OPEN)) {
      contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
    } else {
      contentElement.style.maxHeight = '';
    }
  }
};

articles.addEventListener('click', handleCollapseArticle);

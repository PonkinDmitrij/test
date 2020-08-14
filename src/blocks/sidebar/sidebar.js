const SIDEBAR = 'sidebar';
const SIDEBAR_TOGGLE_BTN = `${SIDEBAR}__toggle`;
const CONTENT = 'content';
const SIDEBAR_ACTIVE = `${SIDEBAR}--active`;
const CONTENT_ACTIVE = `${CONTENT}--active`;
const OVERLAY = 'overlay';
const OVERLAY_SHOW = `${OVERLAY}--show`;

const sidebar = document.querySelector(`.${SIDEBAR}`);
const sidebarToggleBtn = sidebar.querySelector(`.${SIDEBAR_TOGGLE_BTN}`);
const content = document.querySelector(`.${CONTENT}`);
const overlay = document.querySelector(`.${OVERLAY}`);

const handleSidebarToggle = () => {
  sidebar.classList.toggle(SIDEBAR_ACTIVE);
  content.classList.toggle(CONTENT_ACTIVE);
  overlay.classList.toggle(OVERLAY_SHOW);
};

sidebarToggleBtn.addEventListener('click', handleSidebarToggle);
overlay.addEventListener('click', () => {
  if (sidebar.classList.contains(SIDEBAR_ACTIVE)) {
    handleSidebarToggle();
  }
});

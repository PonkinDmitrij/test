function Message(containerId, status) {
  const TRANSITION_TIME = 500;
  const MESSAGE_SHOW_TIME = 3000;
  const ITEM = 'messages__item';
  const ITEM_HIDE = `${ITEM}--hide`;
  const ITEM_CONTENT = `${ITEM}-content`;
  const ITEM_CLOSE = `${ITEM}-close`;

  const statusModifiers = {
    success: `${ITEM}--success`,
    danger: `${ITEM}--danger`,
    warning: `${ITEM}--warning`,
  };

  this.show = function show(msg) {
    const messageArea = document.querySelector(`#${containerId}`);
    const message = document.createElement('DIV');
    const messageContent = document.createElement('DIV');
    const messageClose = document.createElement('BUTTON');
    const messageClasses = [ITEM];

    if (status) {
      messageClasses.push(statusModifiers[status]);
    }

    messageContent.classList.add(ITEM_CONTENT);
    messageContent.innerText = msg;
    messageClose.classList.add(ITEM_CLOSE);
    messageClose.setAttribute('type', 'button');
    message.classList.add(...messageClasses);
    message.appendChild(messageContent);
    message.appendChild(messageClose);
    messageArea.appendChild(message);

    messageClose.addEventListener('click', () => {
      this.hide(message);
    });

    setTimeout(() => {
      this.hide(message);
    }, MESSAGE_SHOW_TIME);
  };

  this.hide = function hide(message) {
    if (message.parentNode) {
      message.classList.add(ITEM_HIDE);
      setTimeout(() => {
        message.parentNode.removeChild(message);
      }, TRANSITION_TIME);
    }
  };
}

export { Message };

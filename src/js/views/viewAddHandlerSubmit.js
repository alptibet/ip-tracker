export const addHandlerSubmit = function (handler) {
  const parentElement = document.querySelector('.header__items');
  const searchField = document.querySelector('.header__items-form-input');

  parentElement.addEventListener('click', function (event) {
    event.preventDefault();
    const searchTerm = searchField.value;
    const { target } = event;
    if (target.className !== 'header__items-btn') return;
    handler(searchTerm);
    clear();
  });

  function clear() {
    searchField.value = '';
  }
};
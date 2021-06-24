export const addHandlerSubmit = function (handler) {
  const searchField = document.querySelector('.header__items-form-input');
  const searchTerm = searchField.value;
  const button = document.querySelector('.header__items');

  button.addEventListener('click', function (e) {
    const { target } = e;
    if (target.className !== 'header__items-btn') return;
    console.log(target);
    handler(searchTerm);
    clear();
  });

  function clear() {
    searchField.value = '';
  }
};

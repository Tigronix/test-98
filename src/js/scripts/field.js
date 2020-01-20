const field = () => {
  const fields = document.querySelectorAll('.js-field');

  fields.forEach((field) => {
    const input = field.querySelector('.js-field-input');
    const isValue = input.value.length != 0;

    const filled = () => {
      field.classList.add('filled');
    };

    const empty = () => {
      field.classList.remove('filled');
    };

    if(isValue){
      filled();
    }

    input.addEventListener('keyup', () => {
      const isValue = input.value.length != 0;

      if(isValue){
        filled();
      }else{
        empty();
      }
    });
  });
};

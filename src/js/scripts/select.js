const select = () => {
  const selects = document.querySelectorAll('.js-select');

  selects.forEach((select) => {
    const btn = select.querySelector('.js-select-btn');
    const text = select.querySelector('.js-select-text');
    const options = select.querySelectorAll('.js-select-option');

    const close = () => {
      select.classList.remove('active');
    };

    const open = () => {
      select.classList.add('active');
    };

    btn.addEventListener('click', () => {
      const isActive = select.classList.contains('active');

      if(isActive){
        close();
      }else {
        open();
      }
    });

    options.forEach((option) => {
      option.addEventListener('click', () => {
        const value = option.innerText;
        text.innerText = value;

        close();
      });
    });

  	$(document).mouseup(function (e){
  		var div = $(select);
  		if (!div.is(e.target)
  		    && div.has(e.target).length === 0) {
  			div.removeClass('active');
  		}
  	});
  });
};

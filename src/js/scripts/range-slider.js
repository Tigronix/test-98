const rangeSlider = () => {
  $('.js-range-slider').ionRangeSlider({
    min: 0,
    max: 3,
    from: 3,
    grid: true,
    values: [
       'Не владею', 'Использую готовые <br> решения', 'Использую готовые решения <br> и умею и переделывать', 'Пишу сложный js с нуля'
     ],
  });
};

'use strict';

$(document).ready(function () {
  var select = function select() {
    var selects = document.querySelectorAll('.js-select');

    selects.forEach(function (select) {
      var btn = select.querySelector('.js-select-btn');
      var text = select.querySelector('.js-select-text');
      var options = select.querySelectorAll('.js-select-option');

      var close = function close() {
        select.classList.remove('active');
      };

      var open = function open() {
        select.classList.add('active');
      };

      btn.addEventListener('click', function () {
        var isActive = select.classList.contains('active');

        if (isActive) {
          close();
        } else {
          open();
        }
      });

      options.forEach(function (option) {
        option.addEventListener('click', function () {
          var value = option.innerText;
          text.innerText = value;

          close();
        });
      });

      $(document).mouseup(function (e) {
        var div = $(select);
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          div.removeClass('active');
        }
      });
    });
  };

  var rangeSlider = function rangeSlider() {
    $('.js-range-slider').ionRangeSlider({
      min: 0,
      max: 3,
      from: 3,
      grid: true,
      values: ['Не владею', 'Использую готовые <br> решения', 'Использую готовые решения <br> и умею и переделывать', 'Пишу сложный js с нуля']
    });
  };

  var field = function field() {
    var fields = document.querySelectorAll('.js-field');

    fields.forEach(function (field) {
      var input = field.querySelector('.js-field-input');
      var isValue = input.value.length != 0;

      var filled = function filled() {
        field.classList.add('filled');
      };

      var empty = function empty() {
        field.classList.remove('filled');
      };

      if (isValue) {
        filled();
      }

      input.addEventListener('keyup', function () {
        var isValue = input.value.length != 0;

        if (isValue) {
          filled();
        } else {
          empty();
        }
      });
    });
  };

  var headerMenu = function headerMenu() {
    var headers = document.querySelectorAll('.js-page-header');

    headers.forEach(function (header) {
      var toggleBtn = header.querySelector('.js-header-btn');
      var menu = header.querySelector('.js-header-menu');

      var open = function open() {
        header.classList.add('active');
        TEST_OBJ.body.classList.add('overflow');
      };

      var close = function close() {
        header.classList.remove('active');
        TEST_OBJ.body.classList.remove('overflow');
      };

      toggleBtn.addEventListener('click', function () {
        var isActive = header.classList.contains('active');
        console.log(isActive);

        if (isActive) {
          close();
        } else {
          open();
        }
      });
    });
  };

  var TEST_OBJ = {};
  TEST_OBJ.body = document.querySelector('body');
  TEST_OBJ.ESC_CODE = 27;

  $(function () {
    select();
    rangeSlider();
    field();
    headerMenu();
  });
});
//# sourceMappingURL=main.js.map

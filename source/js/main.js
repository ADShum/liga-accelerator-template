import {iosVhFix} from './utils/ios-vh-fix';
import {smoothScroll} from './utils/scrol';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/accordion/init-accordion';

const moreButton = document.querySelector('.about-us__btn');
const moreText = document.querySelector('.about-us__spoiler');

if (moreText) {
  const openSpoiler = () => {
    if (!moreText.classList.contains('about-us__spoiler--show')) {
      moreButton.textContent = 'Свернуть';
      moreText.classList.add('about-us__spoiler--show');
    } else {
      moreButton.textContent = 'Подробнее';
      moreText.classList.remove('about-us__spoiler--show');
    }
  };

  moreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openSpoiler();
  });
}


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  smoothScroll();

  // Modules
  // ---------------------------------
  initAccordions();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

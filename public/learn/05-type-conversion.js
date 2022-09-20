/* -------------------------------------------------------------------------- */
/* DOM 접근/조작                                                                  */
/* -------------------------------------------------------------------------- */

const buttonGroup = document.querySelector('.ButtonGroup');
const target = document.querySelector('[data-target]');

const STEP = 1;

let initialTargetFontSize =
  getComputedStyle(target).getPropertyValue('font-size');
let currentTargetFontSize = parseFloat(initialTargetFontSize, 10);

buttonGroup?.addEventListener('click', function (e) {
  const buttonElement = e.target;
  let buttonLabel = buttonElement.getAttribute('aria-label');
  switch (buttonLabel) {
    case '글자 크기 증가':
      currentTargetFontSize += STEP;
      break;
    case '글자 크기 감소':
      currentTargetFontSize -= STEP;
      break;
  }

  target.style.fontSize = currentTargetFontSize + 'px';
});

/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

/* 데이터 → 숫자 ----------------------------------------------------------- */

/* 데이터 → 불리언 ---------------------------------------------------------- */

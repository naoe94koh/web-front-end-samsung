/* -------------------------------------------------------------------------- */
/* DOM 접근/조작                                                                  */
/* -------------------------------------------------------------------------- */

// 문서에서 .ButtonGroup 요소를 찾아 변수에 참조
const buttonGroup = document.querySelector('.ButtonGroup');
const target = document.querySelector('[data-target]');

const STEP = 1;

let initialTargetFontSize =
  getComputedStyle(target).getPropertyValue('font-size');
let currentTargetFontSize = parseFloat(initialTargetFontSize, 10);

// 찾은 요소 노드의 하위에 요소 노드에 이벤트 전파(propagation) ← 이벤트 위임
// 옵셔널 체이닝 (optional chaining)
buttonGroup?.addEventListener('click', function (event) {
  const buttonElement = event.target;
  let buttonLabel = buttonElement.getAttribute('aria-label');
  switch (buttonLabel) {
    case '글자 크기 증가':
      console.log('increment');
      currentTargetFontSize += STEP;
      break;
    case '글자 크기 감소':
      console.log('decrement');
      currentTargetFontSize -= STEP;
      break;
  }

  console.log(currentTargetFontSize);
  target.style.fontSize = currentTargetFontSize + 'px';
});

/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

// undefined, null

// boolean

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed

// null

// boolean

// string

// numeric string

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

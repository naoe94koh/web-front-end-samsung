/* 변수 선언 -------------------------------------------------------------------- */

// - 구매 제품 가격의 총 합

// 초기화
let total_price; // undefined
// console.log('변수 선언 값:', total_price);

// - 선언된 변수에 값을 할당
total_price = 19_800; // number type
// console.log('변수에 값이 할당 됨:', total_price);

/* 상수 선언 -------------------------------------------------------------------- */

// - 1년 기준 일자 수

// 초기화
// 선언, 할당 = 값
const DAYS_OF_YEAR = 365;
// console.log(DAYS_OF_YEAR);

/* -------------------------------------------------------------------------- */
/* Global Object                                                              */
/* -------------------------------------------------------------------------- */

var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
// console.log(globalThis.objectVariable);
// console.log(globalThis.declarativeVariable);

// console.log(globalThis);
// console.log(window);
// console.log(this);
// console.log(self);

/* -------------------------------------------------------------------------- */
/* Variables                                                                  */
/* -------------------------------------------------------------------------- */

/* 변수 선언 ------------------------------------------------------------------ */

// - 구매 제품 가격의 총 합

// 초기화
let total_price; // undefined
// console.log('변수 선언 값:', total_price);

// - 선언된 변수에 값을 할당
total_price = 19_800; // number type
// console.log('변수에 값이 할당 됨:', total_price);

/* 상수 선언 ------------------------------------------------------------------ */

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

/* -------------------------------------------------------------------------- */
/* null vs. undefined                                                         */
/* -------------------------------------------------------------------------- */

// DOM API + Modern ES(JavaScript) = Programming
// jQuery Library: DOM 접근 / 조작, 확장 (플러그인)

// React Framework (Node.js + React + ES.Next)

/* -------------------------------------------------------------------------- */
/* DOM Contents Loaded                                                        */
/* -------------------------------------------------------------------------- */

// DOM API
// 문서 대상(요소) 노드 찾기
// let targetElements = document.getElementsByTagName('div'); // HTMLCollection

// 문서객체모델(DOM) 콘텐츠가 준비되면 코드를 실행하는 이벤트
document.addEventListener('DOMContentLoaded', function () {
  // ...
});

// jQuery 라이브러리 .ready()
// jQuery( document ).ready( function() {
//   // 문서 노드 접근 보장
// } );

/* -------------------------------------------------------------------------- */
/* defer vs. async attribute                                                  */
/* -------------------------------------------------------------------------- */

// HTML 문서에서 요소 노드를 찾고자 하였으나, 찾지 못했을 때 null
let targetElement = null;

// DOM Events API
// 실제 코드가 언제 실행되어 대상을 기억하는가?
let bodyElement = document.querySelector('body');
// console.log(bodyElement); // null

targetElement = document.getElementById('target');
// console.log(targetElement);

/* -------------------------------------------------------------------------- */
/* typeof의 문제를 해결하기 위한 유틸리티 함수 typeOf()                                       */
/* -------------------------------------------------------------------------- */

let nullType = null;
let arrayType = [];
let objectType = {};
let functionType = function () {};

// typeof 연산자의 문제점

// console.log(typeof nullType);
// console.log(typeof arrayType);
// console.log(typeof objectType);
// console.log(typeof functionType);

// console.log('--------------------------');

// typeOF 유틸리티 함수 (문제 보완)

// console.log(typeOf(nullType) === 'null');
// console.log(typeOf(arrayType) === 'array');
// console.log(typeOf(objectType) === 'object');
// console.log(typeOf(functionType) === 'function');

let data = Math;

// console.assert(typeOf(data) === 'math', 'data는 Math 타입이 아닙니다.');

/* -------------------------------------------------------------------------- */
/* Form Input Control                                                         */
/* -------------------------------------------------------------------------- */

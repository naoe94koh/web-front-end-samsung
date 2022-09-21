/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 나머지 매개변수 (집합) -------------------------------------------------------- */

var multiplyCount = function () {
  var first = arguments[0]; // 첫번째 매개변수
  var rest = Array.prototype.slice.call(arguments, 1); // 나머지 매개변수

  // for문 → Array.prototype.reduce 메서드 구문으로 변경해보세요.
  for (var i = 0, l = rest.length; i < l; ++i) {
    if (i === 0) first += rest[i];
    else first *= rest[i];
  }

  return first;
};

const multipleNumbers = (first, ...rest) =>
  rest.reduce(
    (acc, cur, index) => (index === 0 ? acc + cur : acc * cur),
    first
  );

console.log(multipleNumbers(20, 3020, 10203, 200, 123));

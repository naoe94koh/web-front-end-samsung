/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 일반 함수 식 참조
const show = function () {
  return `${this.name} 보다.`;
};

const look = function () {
  return `${this.name} 지켜보다.`;
};

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
const watch = () => {
  return `${this.name} 관찰하다.`;
};

/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------ */

var euid = {
  name: '이듬',
  get nickname() {
    return '닉네임: ' + this.name;
  },
  set nickname(newName) {
    this.name = newName;
  },
  show: function () {
    return `${this.name} 보다.`;
  },
  look() {
    return `${this.name} 지켜보다.`;
  },
  watch: watch,
};

// console.log(euid.show());
// console.log(euid.look());
// console.log(euid.watch());

console.log(euid.nickname);

euid.nickname = '하월';

console.log(euid.nickname);

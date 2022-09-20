/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let dontHas = null;
console.log(typeof dontHas); // null ? → object

// console.log(isNotDefined);
// console.log(unknown);
// console.log(dontHas);

// 2. 값이 할당되지 않은 상태
let isNotDefined = undefined;
let unknown; // undefined
console.log(typeof unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message = 'Hello ECMAScript';
let greeting = "안녕! 자바스크립트";
let sendMessage = `편지를 보냅니다.`;

// 4. 정수, 부동 소수점 숫자(길이 제약)
let price = 10000;
console.log(price, typeof price);

price = '10,000원';
console.log(price, typeof price);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigintType = 20n;
console.log(bigintType, typeof bigintType);

// 6. 참(true, yes) 또는 거짓(false, no)
let hasChildren = false;
console.log(hasChildren, typeof hasChildren);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const elementList = [ document.documentElement, document.head, document.body ];
console.log(elementList, typeof elementList);

const cssMap = {
  color: '#f5b14a',
  backgroundColor: '#312810',
  margin: {
    left: 'auto',
    right: 'auto'
  }
};

console.log(cssMap, typeof cssMap);

function showMe() {}

console.log(showMe, typeof showMe);

// 8. 고유한 식별자(unique identifier)

let uniqueKey1 = Symbol('yamoo9');
let uniqueKey2 = Symbol('yamoo9');

console.log(uniqueKey1, typeof uniqueKey1);
console.log(uniqueKey2, typeof uniqueKey2);
console.log(uniqueKey1 === uniqueKey2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

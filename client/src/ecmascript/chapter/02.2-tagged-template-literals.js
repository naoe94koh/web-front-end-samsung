/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 가상 노드 (Element Node 추상화)
const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

// rest parameters
const styled = (styles, node) => {
  // 코드를 작성합니다.

  let styleCode = styles.reduce((acc, cur) => acc + cur, '');
  // console.log(typeof styleCode);

  node.style.cssText = styleCode.replace(/\s+/g, '');
  return node;

  // args Array
  // console.log(JSON.stringify(args, null, 2));
  // console.log('called styled function');

  // console.log(arguments);

  // return undefined
};

// tagged template literal
let result = styled`
  ${virtualNode}
  color: #706efd;
  background: #efefef;
  margin: 12px;
`;

// console.log(result.style);

// const $styled = function (node) {
//   return function (styleRules) {
//     let styleCode = styleRules.reduce((acc, cur) => acc + cur, '');
//     styleCode = styleCode.replace(/\s+/g, '');
//     node.style.cssText = styleCode;
//     // console.log(JSON.stringify(node, null, 2));
//     return node;
//   };
// };

const $styled = (node) => (styleRules) => {
  let styleCode = styleRules.reduce((acc, cur) => acc + cur, '');
  styleCode = styleCode.replace(/\s+/g, '');
  node.style.cssText = styleCode;
  return node;
};

$styled(virtualNode)`
color: #706efd;
background: #efefef;
margin: 12px;
`;

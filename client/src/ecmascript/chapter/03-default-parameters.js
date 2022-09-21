/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// const defaultArg = (value, initialValue) => {
//   if (value === null || value === undefined) {
//     value = initialValue;
//   }
//   return value;
// };

const truncateText = (text, limit = 100) => {
  // limit = defaultArg(limit, 100);
  // limit = limit || 100;
  return `${text.slice(0, limit).trim()}...`;
};

console.log(
  truncateText(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat eius aperiam soluta quas eligendi atque sunt quaerat eum! Culpa iste sunt dolor corporis ut! Atque sed harum exercitationem magnam.',
    10
  )
);

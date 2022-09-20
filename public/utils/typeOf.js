function typeOf(data) {
  // Prototype : OOJS
  // 메서드 빌려쓰기 패턴
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

// null
function isNull(data) {
  return typeOf(data) === 'null';
}

// undefined
function isUndefined(data) {
  return typeOf(data) === 'undefined';
}

// string
function isString(data) {
  return typeOf(data) === 'string';
}

// number
function isNumber(data) {
  return typeOf(data) === 'number';
}

// bigint
function isBigInt(data) {
  return typeOf(data) === 'bigint';
}
// boolean
function isBoolean(data) {
  return typeOf(data) === 'boolean';
}
// function
function isNull(data) {
  return typeOf(data) === 'null';
}
// array
function isArray(data) {
  return typeOf(data) === 'array';
}
// object
function isObject(data) {
  return typeOf(data) === 'object';
}
// symbol
function isSymbol(data) {
  return typeOf(data) === 'symbol';
}
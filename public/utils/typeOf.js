export function typeOf(data) {
  // Prototype : OOJS
  // 메서드 빌려쓰기 패턴
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

// null
export function isNull(data) {
  return typeOf(data) === 'null';
}

// undefined
export function isUndefined(data) {
  return typeOf(data) === 'undefined';
}

// string
export function isString(data) {
  return typeOf(data) === 'string';
}

// number
export function isNumber(data) {
  return typeOf(data) === 'number';
}

// bigint
export function isBigInt(data) {
  return typeOf(data) === 'bigint';
}
// boolean
export function isBoolean(data) {
  return typeOf(data) === 'boolean';
}
// export function
export function isFunction(data) {
  return typeOf(data) === 'function';
}
// array
export function isArray(data) {
  return typeOf(data) === 'array';
}
// object
export function isObject(data) {
  return typeOf(data) === 'object';
}
// symbol
export function isSymbol(data) {
  return typeOf(data) === 'symbol';
}

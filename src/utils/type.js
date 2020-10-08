export function isPlainObject(v) {
  return v?.constructor === Object;
}

/**
 * 함수 타입 여부를 반환한다.
 */
export function isFunction(v) {
  return typeof v === 'function';
}

/**
 * null 타입 여부를 반환한다.
 */
export function isNull(v) {
  return v === null;
}

/**
 * 배열 타입 여부를 반환한다.
 */
export function isArray(v) {
  return Array.isArray(v);
}

/**
 * 문자열 타입 여부를 반환한다.
 */
export function isString(v) {
  return typeof v === 'string';
}
/**
 * 빈값 여부를 반환한다.
 */
export function isEmpty(v) {
  if (typeof v === 'number' || typeof v === 'boolean') return false;

  for (const k in v) {
    if (Object.prototype.hasOwnProperty.call(v, k)) return false;
  }
  return true;
}
/**
 * 엘리먼트 노드 여부를 반환한다.
 */
export function isElement(v) {
  return v instanceof HTMLElement;
}

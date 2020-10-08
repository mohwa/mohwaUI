import { isPlainObject, isArray, isFunction } from './type';

export function map(v, f) {
  if (isPlainObject(v)) {
    return Object.keys(v).map(k => f(v[k], k));
  } else if (isArray(v)) {
    return v.map((...args) => f(...args));
  }
}

export function reduce(v, f, initValue) {
  if (isPlainObject(v)) {
    return Object.keys(v).reduce((acc, k, i, array) => f(acc, v[k], k, i, array), initValue || {});
  } else if (isArray(v)) {
    return v.reduce((...args) => f(...args), initValue || []);
  }
}

export function clone(v) {
  if (isPlainObject(v)) {
    return Object.assign({}, v);
  } else if (isArray(v)) {
    return reduce(v, (acc, vv) => {
      acc.push(vv);
      return acc;
    });
  }
}
/**
 * 전달받은 Object/Array 객체를 깊은 복사한다
 */
export function cloneDeep(v) {
  switch (true) {
    case isPlainObject(v): {
      return reduce(v, (acc, vv, k) => {
        switch (true) {
          case isPlainObject(vv) || isArray(vv): {
            acc[k] = cloneDeep(vv);
            break;
          }
          case isFunction(vv): {
            acc[k] = vv.bind(acc);
            break;
          }
          default: {
            acc[k] = vv;
            break;
          }
        }
        return acc;
      });
    }
    case isArray(v): {
      return reduce(v, (acc, vv) => {
        switch (true) {
          case isPlainObject(vv) || isArray(vv): {
            acc.push(cloneDeep(vv));
            break;
          }
          case isFunction(vv): {
            acc.push(vv.bind(null));
            break;
          }
          default: {
            acc.push(vv);
            break;
          }
        }
        return acc;
      });
    }
    default:
      break;
  }
}

/**
 * 전달받은 Array 객체를 무작위로 다시 섞는다.
 */
export function shuffle(v) {
  const length = v.length;

  for (let i = length; --i; ) {
    const r = Math.floor(Math.random() * i);
    const ii = i - 1;

    const tmp = v[ii];
    v[ii] = v[r];
    v[r] = tmp;
  }

  return v;
}

// export function shuffle(v) {
//   let r, tmp;
//   let i = v.length;
//
//   return reduce(v, acc => {
//     --i;
//
//     r = Math.floor(Math.random() * i);
//
//     tmp = v[i - 1];
//
//     v[i - 1] = v[r];
//     acc[r] = tmp;
//
//     return acc;
//   });
// }

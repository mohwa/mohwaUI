/**
 * Created by mohwa on 2018. 4. 21..
 */

/**
*
*/
const Type = {
    /**
     * 순수 오브젝트 타입 여부를 반환한다.
     */
    isPlainObject(v = null){
        return v && v.constructor === Object;
    },
    isFunction(v = null){
        return typeof v === 'function';
    },
    /**
     *
     */
    isNull(v){
        return v === null;
    },
    /**
     * 배열 타입 여부를 반환한다.
     */
    isArray(v = null){
        return Array.isArray(v);
    },
    /**
     * 문자열 타입 여부를 반환한다.
     */
    isString(v = null){
        return typeof v === 'string';
    },
    /**
     * 빈값 여부를 반환한다.
     */
    isEmpty(v = null){
        return v === undefined ||
        v === null ||
        v === false ||
        v === 0 ||
        v === '';
    },
    /**
     *
     */
    isElement(v = null){
        return v && v.nodeType === Node.ELEMENT_NODE;
    }
};

module.exports = Type;
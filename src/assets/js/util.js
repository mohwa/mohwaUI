const Type = require('./type');

// 엘리먼트 타입
const ELEMENT_NODE = Node.ELEMENT_NODE;
/**
*
*/
const Util = {

    /**
     * querySelector 래퍼 함수.
     */
    sel(v = '', el = document){
        return el.querySelector(v);
    },
    /**
     * querySelectorAll 래퍼 함수
     */
    sels(v = '', el = document){
        return el.querySelectorAll(v);
    },
    /**
     * 엘리먼트를 생성한다.
     */
    el(name = '', prop = {}){

        const el = document.createElement(name);

        this.prop(el, prop);

        return el;
    },
    /**
     * 엘리먼트 어트리뷰트를 할당한다.
     */
    attr(target = null, attr = null, val = null){

        let ret = null;

        if (Type.isPlainObject(attr)){

            this.map(attr, (v, k) => { _attr(target, k, v); });

            ret = target;
        }
        else if (Type.isString(attr) && !Type.isEmpty(val)){
            ret = _attr(target, attr, val);
        }
        else if (Type.isString(attr)){

            if (_isStyleMarked(attr)) ret = target.style[attr.substr(1)];
            else ret = target.getAttribute(attr);
        }

        return ret;

        /**
         *
         * 어튜리브트값을 설정한다.
         *
         * @param target
         * @param k
         * @param v
         * @private
         */
        function _attr(target, k, v){

            if (_isStyleMarked(k)) target.style[k.substr(1)] = v;
            else target.setAttribute(k, v);

            return target;
        }
    },
    /**
     * 엘리먼트 프로퍼티를 할당한다.
     */
    prop(target = null, prop = null, val = null){

        let ret = null;

        if (Type.isPlainObject(prop)){

            this.map(prop, (v, k) => { _prop(target, k, v); });

            ret = target;
        }
        else if (Type.isString(prop) && Type.isEmpty(val)){

            if (_isStyleMarked(prop)) ret = target.style[prop.substr(1)];
            else ret = target[prop];
        }
        else if (Type.isString(prop) && !Type.isEmpty(val)){
            ret = _prop(target, prop, val);
        }


        return ret;

        /**
         *
         * 프로퍼티값을 설정한다.
         *
         * @param target
         * @param k
         * @param v
         * @private
         */
        function _prop(target, k, v){

            if (_isStyleMarked(k)){
                target.style[k.substr(1)] = v;
            }
            else{

                // 엘리먼트 속성이 함수인 경우, 네이티브 속성을 원형 그대로 사용한다.(꼭 이벤트만이 아니다)
                if (typeof target[k] === 'function') target[k](...(Type.isArray(v) ? v : [v]));
                else target[k] = v;
            }

            return target;
        }
    },
    /**
     * 부모 엘리먼트의 마지막 자식으로 새로운 엘리먼트를 추가한다.
     */
    append(target = null, el = []){

        el = Type.isArray(el) ? el : [el];

        el.forEach(v => { target.appendChild(v); });

        return target;
    },
    /**
     * 부모 엘리먼트의 첫번째 자식으로 새로운 엘리먼트를 추가한다.
     */
    prepend(target = null, el = []){

        el = Type.isArray(el) ? el : [el];

        // 전달받은 배열을 리버스시킨후 다시 할당한다(전달받은 순서로 할당시키기위함)
        el.reverse().forEach(v => {target.insertBefore(v, parent.firstChild); });

        return target;
    },
    /**
     * target 엘리먼트의 다음 형제로 새로운 엘리먼트를 추가한다.
     */
    after(target = null, el = []){

        el = Type.isArray(el) ? el : [el];

        // 전달받은 target 엘리먼트의, 다음 형제 엘리먼트를 반환한다.
        const next = this.next(target);

        // 반환된 형제 엘리먼트가 있을 경우
        el = next ? el.reverse() : el;

        el.forEach(v => {

            // 다음 형제 엘리먼트가 있을 경우, 해당 형제 엘리먼트 이전 위치(target 엘리먼트 다음 위치)에 새로운 엘리먼트를 할당한다.
            if (next) target.parentNode.insertBefore(v, next);
            else target.parentNode.appendChild(v);
        });

        return target;
    },
    /**
     *
     */
    offset(target = null){

        let top = 0;
        let left = 0;

        const els = this.parents(target);4

        els.forEach(v => {
            top += v.offsetTop;
            left += v.offsetLeft;
        });

        return {
            top,
            left
        };
    },
    position(target = null){
    },
    /**
     * target 엘리먼트의 이전 형제로 새로운 엘리먼트를 추가한다.
     */
    before(target = null, el = []){

        el = Type.isArray(el) ? el : [el];

        el.reverse().forEach(v => { target.parentNode.insertBefore(v, target); });

        return target;
    },
    /**
     * target 엘리먼트의 다음 형제 엘리먼트를 반환한다.
     * https://developer.mozilla.org/ko/docs/Web/API/Node/nodeType
     */
    next(target = null){

        let next = (target && target.nextSibling) ? target.nextSibling : null;

        // <p>, <div> 와 같은 엘리먼트가 탐색될 경우, 해당 엘리먼트를 반환한다.
        while (next && next.nodeType !== ELEMENT_NODE){
            next = next.nextSibling;
        }

        return next;
    },
    /**
     * target 엘리먼트의 이전 형제 엘리먼트를 반환한다.
     */
    prev(target = null){

        let prev = (target && target.previousSibling) ? target.previousSibling : null;

        // <p>, <div> 와 같은 엘리먼트가 탐색될 경우, 해당 엘리먼트를 반환한다.
        while (prev && prev.nodeType !== ELEMENT_NODE){
            prev = prev.previousSibling;
        }

        return prev;
    },
    /**
     * 모든 부모 엘리먼트를 가져온다.
     */
    parents(target = null, selector = ''){

        const ret = [];
        let parent = target;

        // selector 값이 일을 경우, 필터할 엘리먼트 목록을 가져온다.
        const all = selector ? this.nodeListToArray(this.sels(selector)) : [];

        while (parent){

            parent = parent.parentNode;

            // <p>, <div> 와 같은 엘리먼트가 탐색될 경우, 해당 엘리먼트를 반환한다.
            if (parent && parent.nodeType === ELEMENT_NODE){

                if (selector) all.indexOf(parent) > -1 && ret.push(parent);
                else ret.push(parent);
            }
        }

        return ret;
    },
    /**
     * 자식 엘리먼트를 반환한다.
     */
    children(target = null, selector = ''){

        const ret = [];

        let child = null;
        const children = target && target.childNodes ? this.nodeListToArray(target.childNodes) : [];

        const all = selector ? this.nodeListToArray(this.sels(selector)) : [];

        // 자식 엘리먼트가 있을때까지
        while (child = children.shift()){

            // <p>, <div> 와 같은 엘리먼트가 탐색될 경우, 해당 엘리먼트를 반환한다.
            if (child.nodeType === ELEMENT_NODE){

                if (selector) all.indexOf(child) > -1 && ret.push(child);
                else ret.push(child);
            }
        }

        return ret;
    },
    /**
     * map 유틸함수.
     */
    map(v = null, callback = function(){}){

        if (v.constructor === Object){
            Object.keys(v).map(k => {
                return callback(v[k], k);
            });
        }
        else if (Type.isArray(v)){

            v.map((v, index, array) => {
                return callback(v, index, array);
            });
        }
    },
    /**
     * nodeList 객체를 배열로 변환한다.
     */
    nodeListToArray(target = null){

        const ret = [];

        target.forEach(v => { ret.push(v); });

        return ret;
    },
    objectToArray(v = {}){

        const ret = [];

        Object.keys(v).map((k) => { ret.push(v[k]); });

        return ret;
    },
    /**
     *
     */
    equal(val = null, val2 = null){
        return val === val2;
    }
};

/**
 * 전달받은 키스타일 속성인지 여부를 반환한다.
 *
 * @param k
 * @returns {string|boolean}
 * @private
 */
function _isStyleMarked(k = ''){
    // k 문자열의 0번째 문자가 `@`인 경우(style 속성)
    return k && k[0] === '@';
}

module.exports = Util;
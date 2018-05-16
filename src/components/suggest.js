/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE = require('../base');
const Util = require('../assets/js/util');
const Type = require('../assets/js/type');

// 문자 조합/분리 모듈
const Ganada = require('ganada');

// ajax 라이브러리
const axios = require('axios');

const Mousetrap = require('mousetrap');

const COMPONENT_CLASS_NAME = BASE.componentClassName('suggest');

// 전역 클래스 객체
const CLASS_NAME = {
    searchList: 'search-list',
    searchText: 'search-text',
    highlightWord: 'highlight-word'
};


/**
 * Suggest Class
 */
class Suggest{

    constructor({
        elem = null,
        data = [],
        onEnter = null,
        onSelected = function(){}
    } = {}){

        this.opts = {
            elem,
            data,
            onEnter,
            onSelected
        };

        // 데이터를 바인딩한다.
        this.data = _getSearchData.call(this).then(res => {

            this.data = res.data;
            this.init();

        }).catch(err => {
            console.error(err);
        });

        // 컴포넌트 엘리먼트
        this.component = null;

        // 임시 검색된 문자열
        this.searchedText = '';

        // 활성화된 아이템
        this.activedItem = null;
    }
    init(){

        const root = this.opts.elem;
        const component = this.component = _createElement();

        _setSearchListPosition.call(this);

        Util.after(root, component);

        _addEventListener.call(this);
    }
}

/**
 * 컴포넌트 엘리먼트 객체를 반환한다.
 *
 * @returns {*}
 * @private
 */
function _createElement(){

    let html = [];

    html.push(`<div class="${COMPONENT_CLASS_NAME}">`);
    html.push(`<div class="${CLASS_NAME.searchList}">`);
    html.push('<ul>');
    html.push('</ul>');
    html.push('</div>');
    html.push('</div>');

    return Util.el('div', {'innerHTML': html.join('')}).firstChild;
}

/**
 *
 * 필요 이벤트들을 바인딩한다.
 *
 * @private
 */
function _addEventListener(){

    const root = this.opts.elem;
    const component = this.component;
    const onEnter = this.opts.onEnter;

    const ul = Util.sel('ul', component);

    Util.prop(root, 'addEventListener', ['keyup', e => {

        const elem = e.target;

        const val = elem.value;

        // 정의된 키코드들을 막는다.
        if (_isPreventKeyCode.call(this, e)) return;

        // 공백 처리
        if (Type.isEmpty(val)){
            _hide.call(this);
            return;
        }

        this.searchedText = val;

        _clearSearchedList(ul);
        
        // 검색 리스트를 반환한다.
        const list = _createSearchList(val, this.data);

        if (list.length){

            Util.prop(ul, 'innerHTML', list.join(''));

            _show.call(this);
        }
    }]);


    Util.prop(ul, 'addEventListener', ['click', e => {

        const elem = e.target;
        const nodeName = elem.nodeName.toLowerCase();
        const activeItem = this.activedItem;

        // ui 엘리먼트 내부에서 `enter` 키가 눌렸을 경우
        if (this.isEnterKeyDown){
            this.isEnterKeyDown = false;
            return;
        }

        const li = (nodeName === 'a' || nodeName === 'b') ? Util.parents(elem, 'li')[0] : elem;

        const text = _getElemText(li);

        this.opts.onSelected.call(this, text);

        if (activeItem) _addBlurClassName(activeItem);

        _addFocusClassName(li);

        Util.sel('a', li).focus();

        Util.prop(root, 'value', text);

        this.activedItem = li;
    }]);

    // 문서 엘리먼트를 클릭한 경우.
    Util.prop(document, 'addEventListener', ['click', e => {

        const elem = e.target;

        if (_isClose(elem)) _hide.call(this);

    }]);

    Mousetrap(root).bind('up', e => { _up.call(this, e); });
    Mousetrap(root).bind('down', e => { _down.call(this, e); });

    Mousetrap(ul).bind('up', e => { _up.call(this, e); });
    Mousetrap(ul).bind('down', e => { _down.call(this, e); });

    Mousetrap(root).bind('tab', e => { _hide.call(this); });
    Mousetrap(ul).bind('tab', e => { _hide.call(this); });

    Mousetrap(root).bind('enter', e => { enterKeyDown.call(this);});
    Mousetrap(ul).bind('enter', e => {
        this.isEnterKeyDown = true;
        enterKeyDown.call(this);
    });


    function enterKeyDown(){
        onEnter.call(this, root.value);
        _hide.call(this);
    }
}

/**
 *
 * 검색 리스트의 사이즈/위치를 설정한다.
 *
 * @private
 */
function _setSearchListPosition(){

    const root = this.opts.elem;
    const component = this.component;

    // root 엘리먼트의 절대 수치를 반환한다.
    const offset = Util.offset(root);

    const width = Util.outerWidth(root);
    const height = Util.outerHeight(root);

    const top = offset.top + height;

    Util.prop(component, {
        '@width': `${width}px`,
        '@top': `${top}px`,
        '@left': `${offset.left}px`
    });
}

/**
 *
 * component 엘리먼트를 show 시킨다.
 *
 * @private
 */
function _show(){
    Util.prop(this.component, '@display', 'block');
}

/**
 *
 * component 엘리먼트를 hide 시킨다.
 *
 * @private
 */
function _hide(){
    Util.prop(this.component, '@display', 'none');
}

/**
 *
 * 정의된 키코드를 막는다.
 *
 * @param e
 * @returns {boolean}
 * @private
 */
function _isPreventKeyCode(e = {}){

    let keyCode = e.keyCode;

    return keyCode === 13 ||
    keyCode === 37 ||
    keyCode === 38 ||
    keyCode === 39 ||
    keyCode === 40;
}


/**
 *
 * input cursor 를 이동시킨다.
 *
 * @private
 */
function _moveInputCursor(){

    const root = this.opts.elem;

    window.setTimeout(() => {

        // 커서의 위치를 이동시키기위해, start, end 위치를 동일하게 전달한다.
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
        root.setSelectionRange(root.value.length, root.value.length);
    });
}

/**
 *
 * 리스트 엘리먼트를 위로 이동시킨다.
 *
 * @private
 */
function _up(e = {}){

    const root = this.opts.elem;

    if (Type.isEmpty(root.value)) return;

    _show.call(this);

    const searchedText = this.searchedText;

    const lastElem = _getLastListElement.call(this, 0);
    const activedItem = this.activedItem;

    const prevElem = Type.isNull(activedItem) ? lastElem : Util.prev(activedItem);

    if (!Type.isNull(activedItem)){
        _addBlurClassName(activedItem);
    }

    if (prevElem){

        const text = _getElemText(prevElem);

        _addFocusClassName(prevElem);
        Util.prop(root, 'value', text);

        //Util.sel('a', prevElem).focus();

        this.activedItem = prevElem;
    }
    else{

        Util.prop(root, 'value', searchedText);
        this.activedItem = null;
    }

    _moveInputCursor.call(this);
}

/**
 *
 * 리스트 엘리먼트를 아래로 이동시킨다.
 *
 * @private
 */
function _down(e = {}){

    const root = this.opts.elem;

    if (Type.isEmpty(root.value)) return;

    _show.call(this);

    const firstElem = _getFirstListElement.call(this);
    const activedItem = this.activedItem;

    const nextElem = Type.isNull(activedItem) ? firstElem : Util.next(activedItem);

    const searchedText = this.searchedText;

    if (!Type.isNull(activedItem)){
        _addBlurClassName(activedItem);
    }

    if (nextElem){

        const text = _getElemText(nextElem);

        _addFocusClassName(nextElem);
        Util.prop(root, 'value', text);

        //Util.sel('a', nextElem).focus();

        this.activedItem = nextElem;
    }
    else{

        Util.prop(root, 'value', searchedText);
        this.activedItem = null;
    }

    _moveInputCursor.call(this);
}

/**
 *
 * 시작 리스트 엘리먼트를 반환한다.
 *
 * @returns {*}
 * @private
 */
function _getFirstListElement(){

    return Util.sels('li', this.component)[0];
}

/**
 *
 * 마지막 리스트 엘리먼트를 반환한다.
 *
 * @returns {*}
 * @private
 */
function _getLastListElement(){

    const elems = Util.sels('li', this.component);

    return elems[elems.length - 1];
}
/**
 *
 * 검색된 리스트를 삭제한다.
 *
 * @param ul
 */
function _clearSearchedList(ul = null){
    Util.prop(ul, 'innerHTML', '');
}


/**
 *
 * 바인딩할 데이터를 반환한다.
 *
 * @returns {Promise}
 */
function _getSearchData(){

    const data = this.opts.data;

    return new Promise((resolve, reject) => {

        if (Type.isPlainObject(data)){

            const url = data.url;
            const method = data.method || 'get';

            axios({
                url: url,
                method: method,
                data: data
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        }
        else{
            resolve({data: data});
        }
    });
}

/**
 *
 * 리스트 엘리먼트 집합을 반환한다.
 *
 * @param val
 * @param data
 * @returns {Array}
 * @private
 */
function _createSearchList(val = '', data = []){

    let ret = [];

    data.forEach(v => {

        let searchText = Ganada.search(v, val);

        if (searchText){

            const ptn = new RegExp(searchText);

            v = v.replace(ptn, match => {

                return `<b>${match}</b>`;
            });

            ret.push(`<li><a href="#" tabindex="0" onclick="return false">${v}</a></li>`);
        }
    });

    return ret;
}

/**
 *
 * 전달받은 엘리먼트에 blur 클래스를 할당한다.
 *
 * @param elem
 * @private
 */
function _addBlurClassName(elem = null){
    Util.prop(elem, 'className', 'blur');
}

/**
 *
  * 전달받은 엘리먼트에 focus 클래스를 할당한다.
 *
 * @param elem
 * @private
 */
function _addFocusClassName(elem = null){
    Util.prop(elem, 'className', 'focus');
}

/**
 *
 * 검색 리스트 닫기 유/무를 반환한다.
 *
 * @param elem
 * @returns {boolean}
 * @private
 */
function _isClose(elem = null){

    const className = `.${COMPONENT_CLASS_NAME}`;

    // 전달받은 엘리먼트가 input 엘리먼트가 아니거나, searchList 엘리먼트가 아닌 경우 true 를 반환한다.
    return Util.next(elem) !== Util.sel(className) && !Util.parents(elem, className).length;
}

/**
 *
 * 전달받은 엘리먼트의 innerText 를 반환한다.
 *
 * @param elem
 * @returns {*}
 * @private
 */
function _getElemText(elem = null){
    return Util.prop(elem, 'innerText');
}


module.exports = Suggest;

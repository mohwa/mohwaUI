/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE = require('../base');
const Util = require('../assets/js/util');
const Type = require('../assets/js/type');

// 문자 조합/분리 모듈
const Ganada = require('ganada');

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
        el = null,
        data = [],
        onEnter = function(){},
        onSelected = function(){}
    } = {}){

        this.opts = {
            el,
            data,
            onEnter,
            onSelected
        };

        this.data = _getSearchData.call(this).then(res => {

            this.data = res.data;
            this.init();

        }).catch(err => {
            console.error(err);
        });

        this.component = null;

        this.tmpSearchText = '';

        this.activeItem = null;
        this.activeState = 'BOF';
    }
    init(){

        const root = this.opts.el;
        const component = this.component = _createElement();

        _setSearchListPosition.call(this);

        Util.after(root, component);

        _addEventListener.call(this);
    }
}

/**
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
 * @private
 */
function _addEventListener(){

    const root = this.opts.el;
    const component = this.component;

    const searchList = Util.sel('.search-list', component);
    const ul = Util.sel('ul', searchList);

    let tmpValue = '';

    Util.prop(root, 'addEventListener', ['keyup', e => {

        const el = e.target;
        const val = el.value;

        if (_isPreventKeyCode.call(this, e)) return false;

        this.tmpSearchText = val;

        if (Type.isEmpty(val)){
            _hide.call(this);
            return;
        }

        tmpValue = val;

        _clearSearchList(ul);
        _clearActiveData.call(this);

        const searchList = _getSearchList(val, this.data);

        if (searchList.length){

            Util.prop(ul, 'innerHTML', searchList.join(''));
            _show.call(this);
        }
    }]);

    Util.prop(ul, 'addEventListener', ['click', e => {

        const el = e.target;
        const nodeName = el.nodeName.toLowerCase();

        if (nodeName === 'li'){

            const selectedText = Util.prop(el, 'innerText');

            this.opts.onSelected.call(this, el);

            Util.prop(root, 'value', selectedText);
        }
    }]);

    // 문서 엘리먼트를 클릭한 경우.
    Util.prop(document, 'addEventListener', ['click', e => {

        const el = e.target;

        if (!Util.parents(el, `.${COMPONENT_CLASS_NAME}`).length){
            _hide.call(this);
        }
    }]);

    Mousetrap(root).bind('up', (e) => { _up.call(this, e); });
    Mousetrap(root).bind('down', (e) => { _down.call(this, e); });
    Mousetrap(root).bind('tab', (e) => { _hide.call(this); });

    Mousetrap(searchList).bind('up', (e) => { _up.call(this, e); });
    Mousetrap(searchList).bind('down', (e) => { _down.call(this, e); });

}

/**
 *
 * 검색 리스트의 사이즈/위치를 설정한다.
 *
 * @private
 */
function _setSearchListPosition(){

    const root = this.opts.el;
    const component = this.component;

    // root 엘리먼트의 절대 수치
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
 * @private
 */
function _show(){
    Util.prop(this.component, '@display', 'block');
}

/**
 *
 * @private
 */
function _hide(){
    Util.prop(this.component, '@display', 'none');
}

/**
 *
 * @param e
 * @returns {boolean}
 * @private
 */
function _isPreventKeyCode(e = {}){

    let keyCode = e.keyCode;

    return keyCode === 37 ||
    keyCode === 38 ||
    keyCode === 39 ||
    keyCode === 40;
}


/**
 *
 * @private
 */
function _moveInputCursor(){

    const root = this.opts.el;

    window.setTimeout(() => {

        // 커서의 위치를 이동시키기위해, start, end 위치를 동일하게 전달한다.
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
        root.setSelectionRange(root.value.length, root.value.length);
    });
}

/**
 *
 * @private
 */
function _up(e = {}){

    const root = this.opts.el;

    if (Type.isEmpty(root.value)) return;

    _show.call(this);

    const activeState = this.activeState;
    const tmpSearchText = this.tmpSearchText;

    let el = this.activeItem || e.target;
    let li = null;

    if (activeState === 'EOF'){
        li = el;
        this.activeState = 'BODY';
    }
    else{
        li = Util.prev(el);
    }

    if (activeState !== 'BOF'){
        Util.prop(el, 'className', 'blur');
    }

    if (li){

        const text = Util.prop(li, 'innerText');

        Util.prop(li, 'className', 'focus');
        Util.prop(root, 'value', text);

        this.activeItem = li;
    }
    else{
        Util.prop(root, 'value', tmpSearchText);
        this.activeState = 'BOF';
    }

    _moveInputCursor.call(this);
}

/**
 *
 * @private
 */
function _down(e = {}){

    const root = this.opts.el;

    if (Type.isEmpty(root.value)) return;

    _show.call(this);

    const el = this.activeItem || e.target;
    const tmpSearchText = this.tmpSearchText;
    const activeState = this.activeState;

    if (activeState === 'BOF'){

        const children = this.activeItem || Util.children(Util.next(el), 'li');

        let li = this.activeItem = Type.isArray(children) ? children[0] : children;

        if (li){

            const text = Util.prop(li, 'innerText');

            Util.prop(li, 'className', 'focus');
            Util.prop(root, 'value', text);

            this.activeState = 'BODY';
        }
    }
    else{

        const li = Util.next(el);

        Util.prop(el, 'className', 'blur');

        if (li){

            const text = Util.prop(li, 'innerText');

            Util.prop(li, 'className', 'focus');
            Util.prop(root, 'value', text);

            this.activeItem = li;
        }
        else{

            Util.prop(root, 'value', tmpSearchText);
            this.activeState = 'EOF';
        }
    }

    _moveInputCursor.call(this);
}
/**
 *
 * @param ul
 */
function _clearSearchList(ul = null){
    Util.prop(ul, 'innerHTML', '');
}

/**
 *
 * @private
 */
function _clearActiveData(){

    this.activeItem = null;
    this.activeState = 'BOF';
}

/**
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
 * @param val
 * @param data
 * @returns {Array}
 * @private
 */
function _getSearchList(val = '', data = []){

    let ret = [];

    data.forEach(v => {

        let searchText = Ganada.search(v, val);

        if (searchText){

            const ptn = new RegExp(searchText);

            v = v.replace(ptn, match => {

                return `<span class="${CLASS_NAME.highlightWord}">${match}</span>`;
            });

            ret.push(`<li>${v}</li>`);
        }
    });

    return ret;
}


module.exports = Suggest;

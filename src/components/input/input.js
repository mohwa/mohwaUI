/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE_CLASS = require('./_base');

const BASE = require('../../base');
const Util = require('../../assets/js/util');
const Type = require('../../assets/js/type');

// 문자 조합/분리 모듈
const Ganada = require('ganada');

const Mousetrap = require('mousetrap');

const COMPONENT_CLASS_NAME = BASE.componentClassName('auto-suggest');

// 전역 클래스 객체
const CLASS_NAME = {
    searchList: 'search-list',
    searchText: 'search-text',
    highlightWord: 'highlight-word'
};

/**
 *
 */
class Input extends BASE_CLASS {

    constructor({
        el = null,
        data = [],
        onSelected = function(){}
    } = {}){

        super();

        this.opts = {
            el,
            data,
            onSelected
        };

        this.data = _getData.call(this).then(res => {

            this.data = res.data;
            this.init();

        }).catch(err => {
            console.error(err);
        });

        this.component = null;
        this.searchText = '';
    }
    init(){

        const root = this.opts.el;
        const component = this.component = _createElement();

        // root 엘리먼트의 절대 수치
        const offset = Util.offset(root);

        const width = Util.prop(root, '@width');

        Util.prop(component, {
            '@width': width,
            '@left': `${offset.left}px`
        });

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

        this.searchText = val;

        if (!Util.equal(tmpValue, val)){

            if (Type.isEmpty(val)){
                _hide.call(this);
                return;
            }

            tmpValue = val;

            _clearSearchList(ul);

            Util.prop(ul, 'innerHTML', _getSearchData(val, this.data).join(''));

            _show.call(this);
        }
    }]);

    Util.prop(ul, 'addEventListener', ['click', e => {

        const el = e.target;
        const nodeName = el.nodeName.toLowerCase();

        if (nodeName === 'a' || nodeName === 'span'){

            const li = Util.parents(el, 'li')[0];

            const selectedText = Util.prop(li, 'innerText');

            this.opts.onSelected.call(this, li);

            Util.prop(root, 'value', selectedText);

            _clearSearchList(ul);

            _hide.call(this);

            root.focus();
        }
    }]);

    // 문서 엘리먼트를 클릭한 경우.
    Util.prop(document, 'addEventListener', ['click', e => {

        const el = e.target;

        if (!Util.parents(el, `.${COMPONENT_CLASS_NAME}`).length){
            _hide.call(this);
        }
    }]);

    Mousetrap(root).bind('up', (e) => {_up.call(this, e); });
    Mousetrap(root).bind('down', (e) => {_down.call(this, e); });

    Mousetrap(searchList).bind('up', (e) => {_up.call(this, e); });
    Mousetrap(searchList).bind('down', (e) => {_down.call(this, e); });
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
 * @private
 */
function _up(e = {}){

    const root = this.opts.el;
    const el = e.target;
    const nodeName = el.nodeName.toLowerCase();

    if (nodeName === 'a'){

        const li = Util.prev(Util.parent(el)[0]);

        if (li){

            const a = Util.sel('a', li);
            const text = Util.prop(a, 'innerText');

            a.focus();

            Util.prop(root, 'value', text);
        }
        else{

            Util.prop(root, 'value', this.searchText);
            root.focus();

            window.setTimeout(() => {
                // 커서의 위치를 이동시키기위해, start, end 위치를 동일하게 전달한다.
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
                root.setSelectionRange(this.searchText.length, this.searchText.length);
            }, 1);
        }
    }
}

/**
 *
 * @param e
 * @private
 */
function _down(e = {}){

    const el = e.target;
    const nodeName = el.nodeName.toLowerCase();

    if (nodeName === 'input'){

        const children = Util.children(Util.next(el), 'li');

        if (children.length){
            Util.sel('a', children[0]).focus();
        }
    }
    else if (nodeName === 'a'){

        const li = Util.next(Util.parent(el)[0]);

        if (li){
            const a = Util.sel('a', li);
            const text = Util.prop(a, 'innerText');

            a.focus();

            Util.prop(this.opts.el, 'value', text);
        }
        else{

            Util.prop(this.opts.el, 'value', this.searchText);
            this.opts.el.focus();
        }
    }
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
 * @returns {Promise}
 */
function _getData(){

    const data = this.opts.data;

    return new Promise((resolve, reject) => {

        if (Type.isPlainObject(data)){

            const url = data.url;
            const type = data.type;

            axios.get(url).then(res => {
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
function _getSearchData(val = '', data = []){

    let ret = [];

    data.forEach(v => {

        let searchText = Ganada.search(v, val);

        if (searchText){

            const ptn = new RegExp(searchText);

            v = v.replace(ptn, match => {

                return `<span class="${CLASS_NAME.highlightWord}">${match}</span>`;
            });

            ret.push(`<li><a href="#" onclick="return false" tabindex="0">${v}</a></li>`);
        }
    });

    return ret;
}


module.exports = Input;

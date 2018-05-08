/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE_CLASS = require('./_base');

const BASE = require('../../base');
const Util = require('../../assets/js/util');
const Type = require('../../assets/js/type');

// 문자 조합/분리 모듈
const Ganada = require('ganada');
const COMPONENT_CLASS_NAME = BASE.componentClassName('auto-suggest');

const DATAS = [
    '가생이닷컴이지롱',
    '가생이닷컴',
    '전성균가생이병신가생이등신',
    '전성균가 이 등신',
    '강형욱',
    'a가새가 기울었어',
    '나진수',
    '강수량',
    '전성균',
    '가상화폐',
    '갓오브워',
    '전모질이',
    '전모질현',
    '문기현',
    '사기꾼',
    'abcsd',
    'abcd1111',
    '2223abcd'
];

// 전역 클래스 객체
const CLASS_NAME = {
    "searchList": 'search-list',
    "searchText": 'search-text'
};

/**
 *
 */
class Input extends BASE_CLASS {

    constructor({
        el = null,
        onSelected = function(){}
    } = {}){

        super();

        this.opts = {
            el,
            onSelected
        };

        this.component = null;

        this.init();

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

        if (!Util.equal(tmpValue, val)){

            if (Type.isEmpty(val)){
                _hide.call(this);
                return;
            }

            tmpValue = val;

            _addSearchList(val, ul);

            _show.call(this);
        }
    }]);

    Util.prop(ul, 'addEventListener', ['click', e => {

        const el = e.target;
        const nodeName = el.nodeName.toLowerCase();

        if (nodeName === 'a' || nodeName === 'span'){

            const li = Util.parents(el, 'li')[0];
            const selectedText = Util.prop(parent, 'innerText');

            this.opts.onSelected.call(this, li);

            Util.prop(root, 'value', selectedText);

            _clearSearchList(ul);

            _hide.call(this);
        }
    }]);

    // 문서 엘리먼트를 클릭한 경우.
    Util.prop(document, 'addEventListener', ['click', e => {

        const el = e.target;

        if (!Util.parents(el, `.${COMPONENT_CLASS_NAME}`).length){
            _hide.call(this);
        }
    }]);
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
 * @param ul
 */
function _clearSearchList(ul = null){
    Util.prop(ul, 'innerHTML', '');
}

/**
 *
 * @param val
 * @param ul
 * @private
 */
function _addSearchList(val = '', ul = null){

    let html = [];

    _clearSearchList(ul);

    DATAS.forEach(v => {

        let searchText = Ganada.search(v, val);

        if (searchText){

            const ptn = new RegExp(searchText);

            v = v.replace(ptn, match => {

                return `<span style="color:red;font-weight: bold">${match}</span>`;
            });

            html.push(`<li><a href="#" onclick="return false">${v}</a></li>`);
        }
    });

    Util.prop(ul, 'innerHTML', html.join(''));
}


module.exports = Input;

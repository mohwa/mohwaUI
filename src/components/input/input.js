/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE_CLASS = require('./_base');

const BASE = require('../../base');
const Util = require('../../assets/js/util');
const Type = require('../../assets/js/type');

const Ganada = require('ganada');

const COMPONENT_CLASS_NAME = BASE.componentClassName('input-search');

const DATAS = [
    '가생이닷컴이지롱',
    '가생이닷컴',
    '전성균가생이병신가생이 등신',
    '강형욱',
    '가새가 기울었어',
    '나진수',
    '강수량',
    '전성균',
    '가상화폐',
    '갓오브워',
    '전모질이',
    '전모질현',
    '문기현',
    '사기꾼'
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

    constructor(elem = null){

        super();

        this.elem = elem;

        this.init();

        console.log(Ganada.assemble('ㄱㅏㅅㅐㅇ'));

    }
    init(){

        const elem = this.elem;

        Util.append(elem, _createElement());

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
    html.push(`<div class="${CLASS_NAME.searchText}">`);
    html.push('<label>검색창</label><input type="text" />');
    html.push('</div>');
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

    const elem = this.elem;

    const input = Util.sel('input', elem);
    const searchList = Util.sel('.search-list', elem);
    const ul = Util.sel('ul', searchList);

    let tmpValue = '';

    Util.prop(input, 'addEventListener', ['keyup', e => {

        const el = e.target;
        const val = el.value;


        //console.log(Ganada.disassemble(val));


        if (!Util.equal(tmpValue, val)){

            tmpValue = val;

            if (!val){
                Util.prop(searchList, '@display', 'none');
                return;
            }

            Util.prop(searchList, '@display', 'block');

            _clearSearchList(ul);

            _getSearchData(val, ul);


            //_addSearchList(ul, list);
        }
    }]);

    Util.prop(ul, 'addEventListener', ['click', e => {

        const el = e.target;
        const nodeName = el.nodeName.toLowerCase();

        if (nodeName === 'a' || nodeName === 'span'){

            const selectedText = Util.prop(Util.parents(el, 'li')[0], 'innerText');

            Util.prop(input, 'value', selectedText);

            _clearSearchList(ul);

            Util.prop(searchList, '@display', 'none');
        }
    }]);

    // 문서 엘리먼트를 클릭한 경우.
    Util.prop(document, 'addEventListener', ['click', e => {

        const el = e.target;

        if (!Util.parents(el, `.${COMPONENT_CLASS_NAME}`).length){
            Util.prop(searchList, '@display', 'none');
        }
    }]);
}

/**
 *
 * @private
 */
//function _addSearchList(ul = null, list = []){
//
//    let html = [];
//
//    list.forEach(v => {
//
//        let text = v.text;
//        const matches = v.matches.join('');
//        const ptn = new RegExp(`[${matches}]`, 'g');
//
//        text = text.replace(ptn, match => {
//            return `<span style="color:red;font-weight: bold">${match}</span>`;
//        });
//
//        html.push(`<li><a href="#" onclick="return false">${text}</a></li>`);
//    });
//
//}

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
 * @private
 */
function _getSearchData(val = '', ul = null){

    let html = [];

    DATAS.forEach(v => {

        let searchText = Ganada.search(v, val);

        if (searchText){

            if (Ganada.isComplete(val)){

                const ptn = new RegExp(searchText, 'g');

                v = v.replace(ptn, match => {

                    return `<span style="color:red;font-weight: bold">${match}</span>`;
                });
            }

            html.push(`<li><a href="#" onclick="return false">${v}</a></li>`);
        }
    });

    Util.prop(ul, 'innerHTML', html.join(''));
}


module.exports = Input;

/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE_CLASS = require('./_base');

const BASE = require('../../base');
const Util = require('../../assets/js/util');
const Type = require('../../assets/js/type');

const COMPONENT_CLASS_NAME = BASE.componentClassName('input-search');

const DATAS = [
    '가생이닷컴이지롱',
    '가생이닷컴',
    '강형욱',
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

        if (!Util.equal(tmpValue, val)){

            tmpValue = val;

            if (!val){
                Util.prop(searchList, '@display', 'none');
                return;
            }

            const list = Util.objectToArray(_getSearchData(val));

            if (list.length){

                Util.prop(searchList, '@display', 'block');

                _clearSearchList(ul);

                _addSearchList(ul, list);
            }
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
function _addSearchList(ul = null, list = []){

    let html = [];

    list.forEach(v => {

        let text = v.text;
        const matches = v.matches.join('');
        const ptn = new RegExp(`[${matches}]`, 'g');

        text = text.replace(ptn, match => {
            return `<span style="color:red;font-weight: bold">${match}</span>`;
        });

        html.push(`<li><a href="#" onclick="return false">${text}</a></li>`);
    });

    Util.prop(ul, 'innerHTML', html.join(''));
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
 * @private
 */
function _getSearchData(val = ''){

    const ret = {};

    val.split('').forEach((v, k) => {

        const inputJaso = _jasoSeparator(v);

        let inputCho = inputJaso.cho;
        let inputJung = inputJaso.jung;
        let inputJong = inputJaso.jong;

        if (inputCho){

            DATAS.forEach((item) => {

                item.split('').forEach(char => {

                    const jaso = _jasoSeparator(char);

                    const cho = jaso.cho;
                    const jung = jaso.jung;
                    const jong = jaso.jong;

                    if (inputCho === cho && inputJung === jung && inputJong === jong){

                        const t = ret[item] = ret[item] || {text: item, matches: []};

                        if (t.matches.length){
                            t.matches.push(char);
                        }
                        else{
                            t.matches = [char];
                        }
                    }
                });
            });
        }
    });

    return ret;
}

/**
 *
 * @param v
 * @returns {{cho: string, jung: string, jong: string}}
 * @private
 */
function _jasoSeparator(v = ''){

    //const chos = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    //const jungs = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    //const jongs = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    v = v.charCodeAt(0) - parseInt('0xAC00', 16);

    // 초성
    const choNum = ((v / 28)) / 21;

    // 중성
    const jungNum = ((v / 28)) % 21;

     // 종성
    const jongNum = v % 28;


    const cho = String.fromCharCode(choNum + parseInt('0x1100', 16));
    const jung = String.fromCharCode(jungNum + parseInt('0x1161', 16));
    const jong = String.fromCharCode(jongNum + parseInt('0x11A8', 16) - 1);

    return {
        cho: cho || '',
        jung: jung || '',
        jong: jong || ''
    };
}

module.exports = Input;

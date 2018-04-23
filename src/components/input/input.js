/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE_CLASS = require('./_base');

const BASE = require('../../base');
const Util = require('../../assets/js/util');
const Type = require('../../assets/js/type');

const COMPONENT_CLASS_NAME = BASE.componentClassName('input-search');

const DATA = [
    '가생이닷컴',
    '강형욱',
    '나진수',
    '강수량',
    '전성균',
    '가상화폐',
    '갓오브워',
    '문기현'
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

    Util.prop(input, 'addEventListener', ['keyup', (e) => {

        const el = e.target;
        const val = el.value;

        if (!Util.equal(tmpValue, val)){

            tmpValue = val;
            Util.prop(searchList, '@display', 'block');

            const list = _getSearchData(val);

            _addSearchList.call(this, ul, list);
        }
    }]);

    // 문서 엘리먼트를 클릭한 경우.
    Util.prop(document, 'addEventListener', ['click', function(e){

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
        html.push(`<li><a href="#">${v}</a></li>`);
    });


    Util.prop(ul, 'innerHTML', html.join(''));
}

/**
 *
 * @param val
 * @private
 */
function _getSearchData(val = ''){

    let ret = [];

    val.split('').forEach((v, k) => {

        const jaso = _jasoSeparator(v);

        const isFixedChar = jaso.cho ? true : false;

        let cho = jaso.cho;
        let jung = jaso.jung;
        let jong = jaso.jong;

        ret = [];

        DATA.forEach((vv, kk) => {

            const _jaso = _jasoSeparator(vv[k]);

            const _cho = _jaso.cho;
            const _jung = _jaso.jung;
            const _jong = _jaso.jong;

            if (!isFixedChar){

                if (_cho === v){
                    ret.push(vv);
                }
            }
            else{

                console.log('============================');
                console.log('cho', cho, _cho);
                console.log('jung', jung, _jung);
                console.log('jong', jong, _jong);

                if (cho === _cho && jung === _jung && jong === _jong){
                    ret.push(vv);
                }
            }
        });
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

    const chos = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    const jungs = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
    const jongs = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

    const nTmp = v.charCodeAt(0) - 0xAC00;

     // 종성
    const jongIndex = nTmp % 28;
     // 중성
    const jungIndex = ((nTmp - jongIndex) / 28) % 21;
     // 초성
    const choIndex = (((nTmp - jongIndex) / 28) - jungIndex) / 21;

    const cho = chos[choIndex];
    const jung = jungs[jungIndex];
    const jong = jongs[jongIndex];

    return {
        cho: cho || '',
        jung: jung || '',
        jong: jong || ''
    };
}

module.exports = Input;

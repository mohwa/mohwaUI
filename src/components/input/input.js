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
    '전모질이',
    '전모질현',
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

            //console.log(Util.objectToArray(list));

            _clearSearchList(ul);

            _addSearchList(ul, Util.objectToArray(list));
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
 * @param ul
 */
function _clearSearchList(ul = null){

    Util.prop(ul, 'innerHTML', '');

    //console.log(ul);
}

/**
 *
 * @param val
 * @private
 */
function _getSearchData(val = ''){

    let ret = {};

    val.split('').forEach((v, k) => {

        const targetJaso = _jasoSeparator(v);

        let targetCho = targetJaso.cho;
        let targetJung = targetJaso.jung;
        let targetJong = targetJaso.jong;

        DATA.forEach((vv, kk) => {

            vv.split('').forEach(vvv => {

                const jaso = _jasoSeparator(vvv);

                const cho = jaso.cho;
                const jung = jaso.jung;
                const jong = jaso.jong;

                //console.log('cho', targetCho, cho);
                //console.log('jung', targetJung, jung);
                //console.log('jong', targetJong, jong);

                if (targetCho === cho && targetJung === jung && targetJong === jong){
                    ret[vv] = vv;
                }
            });
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

    const chos = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const jungs = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const jongs = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

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

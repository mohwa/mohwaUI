/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE_CLASS = require('./_base');

const BASE = require('../../base');
const Util = require('../../assets/js/util');
const Type = require('../../assets/js/type');

const Hangul = require('hangul-js');

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

const CHOS = ['ㄱ', ['ㄱ', 'ㄱ'], 'ㄴ', 'ㄷ', ['ㄷ', 'ㄷ'], 'ㄹ', 'ㅁ', 'ㅂ', ['ㅂ', 'ㅂ'], 'ㅅ', ['ㅅ', 'ㅅ'], 'ㅇ', 'ㅈ', ['ㅈ', 'ㅈ'], 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const JUNGS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', ['ㅗ', 'ㅏ'], ['ㅗ', 'ㅐ'], ['ㅗ', 'ㅣ'], 'ㅛ', 'ㅜ', ['ㅜ', 'ㅓ'], ['ㅜ', 'ㅔ'], ['ㅜ', 'ㅣ'], 'ㅠ', 'ㅡ', ['ㅡ', 'ㅣ'], 'ㅣ'];
const JONGS = ['', 'ㄱ', ['ㄱ', 'ㄱ'], ['ㄱ', 'ㅅ'], 'ㄴ', ['ㄴ', 'ㅈ'], ['ㄴ', 'ㅎ'], 'ㄷ', 'ㄹ', ['ㄹ', 'ㄱ'], ['ㄹ', 'ㅁ'], ['ㄹ', 'ㅂ'], ['ㄹ', 'ㅅ'], ['ㄹ', 'ㅌ'], ['ㄹ', 'ㅍ'], ['ㄹ', 'ㅎ'], 'ㅁ', 'ㅂ', ['ㅂ', 'ㅅ'], 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const ORIGIN_CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const ORIGIN_JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const ORIGIN_JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const CONSONANTS = [
    'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ',
    'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ',
    'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ',
    'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

// 초성으로만 쓰일 수 있는 된소리
const COMPLEX_CHO_CONSONANTS = [
    ['ㄷ','ㄷ','ㄸ'],
    ['ㅂ','ㅂ','ㅃ'],
    ['ㅈ','ㅈ','ㅉ'],
    ['ㄱ','ㄱ','ㄲ'],
    ['ㅅ','ㅅ','ㅆ']
];

const COMPLEX_CONSONANTS = [
    ['ㄱ','ㅅ','ㄳ'],
    ['ㄴ','ㅈ','ㄵ'],
    ['ㄴ','ㅎ','ㄶ'],
    ['ㄹ','ㄱ','ㄺ'],
    ['ㄹ','ㅁ','ㄻ'],
    ['ㄹ','ㅂ','ㄼ'],
    ['ㄹ','ㅅ','ㄽ'],
    ['ㄹ','ㅌ','ㄾ'],
    ['ㄹ','ㅍ','ㄿ'],
    ['ㄹ','ㅎ','ㅀ'],
    ['ㅂ','ㅅ','ㅄ']
];

const COMPLEX_VOWELS = [
    ['ㅗ','ㅏ','ㅘ'],
    ['ㅗ','ㅐ','ㅙ'],
    ['ㅗ','ㅣ','ㅚ'],
    ['ㅜ','ㅓ','ㅝ'],
    ['ㅜ','ㅔ','ㅞ'],
    ['ㅜ','ㅣ','ㅟ'],
    ['ㅡ','ㅣ','ㅢ']
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

        // console.log(_isComplete('ㄱ'));
        //console.log(_isCho('ㄱ'));
        //console.log(_isJung('ㄱ'));
        //console.log(_isJong('ㅎ'));

        //console.log(_endsWithConsonant('각'));
        //console.log(_endsWithConsonant('랂'));

        //console.log(_disassemble('ㄲ'));
        //console.log(_disassemble('ㅘ'));
        //console.log(_disassemble('ㄼ'));
        //console.log(_disassemble('가'));
        //console.log(_disassemble('낙'));
        //console.log(_disassemble('갂'));
        console.log(_assemble(['ㄱ', 'ㅅ', 'ㄱ', 'ㅗ', 'ㅏ', 'ㅂ', 'ㅅ', 'ㄴ', 'ㅓ', 'ㄱ', 'ㅅ', 'ㄷ', 'ㅏ']));
        console.log(_assemble(['ㅎ', 'ㅏ', 'ㄹ', 'ㅁ', 'ㅓ', 'ㅁ', 'ㄴ', 'ㅣ', 'ㄹ', 'ㅂ', 'ㄷ', 'ㄷ', 'ㅣ', 'ㅎ']));

        //console.log(Hangul.disassemble('가나다각갃'));
        //
        //// 초성/중성
        //// 초성/중성/종성
        console.log(Hangul.assemble(['ㄱ', 'ㅅ', 'ㅏ', 'ㄱ', 'ㅗ', 'ㅏ', 'ㅂ', 'ㅅ', 'ㄴ', 'ㅓ', 'ㄱ', 'ㅅ', 'ㄷ', 'ㅏ']));
        console.log(Hangul.assemble(['ㅎ', 'ㅏ', 'ㄹ', 'ㅁ', 'ㅓ', 'ㅁ', 'ㄴ', 'ㅣ', 'ㄹ', 'ㅂ', 'ㄷ', 'ㄷ', 'ㅣ', 'ㅎ']));

        console.log(Hangul.assemble(['ㄱ', 'ㄱ', 'ㄱ', 'ㄱ', 'ㅗ', 'ㅏ', 'ㅏ', 'ㅁ', 'ㄴ', 'ㅓ', 'ㄱ', 'ㅅ', 'ㄷ', 'ㅏ']));

        //console.log(Hangul.assemble('ㄷㄷㅏ'));

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

        const inputJAMO = JAMOParser(v);

        let inputCho = inputJAMO.cho;
        let inputJung = inputJAMO.jung;
        let inputJong = inputJAMO.jong;

        if (inputCho){

            DATAS.forEach((item) => {

                item.split('').forEach(char => {

                    const itemJAMO = JAMOParser(char);

                    const itemCho = itemJAMO.cho;
                    const itemJung = itemJAMO.jung;
                    const itemJong = itemJAMO.jong;

                    if (inputCho === itemCho && inputJung === itemJung && inputJong === itemJong){

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
 * @param char
 * @returns {boolean}
 * @private
 */
function _isComplete(char = ''){

    if (typeof char !== 'string') return false;

    const charCode = char.charCodeAt(0);

    const startCharCode = parseInt('0xAC00', 16);
    const endCharCode = parseInt('0xD7A3', 16);

    return charCode >= startCharCode && charCode <= endCharCode;
}


/**
 *
 * @param char
 * @private
 */
function _isCho(char = ''){

    // 0x1100 ~ 0x1112
    // 0x1161 ~ 0x1175
    // 0x11A7 ~ 0x314e

    if (typeof char !== 'string') return false;

    return ORIGIN_CHO.indexOf(char) > -1 ? true : false;
}

/**
 *
 * @param char
 * @private
 */
function _isJung(char = ''){

    if (typeof char !== 'string') return false;

    return ORIGIN_JUNG.indexOf(char) > -1 ? true : false;
}

/**
 *
 * @param char
 * @private
 */
function _isJong(char = ''){

    if (typeof char !== 'string') return false;

    //const charCode = char.charCodeAt(0);
    //
    //const startCharCode = parseInt('0x11A7', 16);
    //const endCharCode = parseInt('0x314e', 16);

    return ORIGIN_JONG.indexOf(char) > -1 ? true : false;
}

/**
 *
 * @param v
 * @private
 */
function _disassemble(v = ''){

    let ret;

    if (!_isComplete(v)){

        if (_isCho(v)){

            ret = CHOS[ORIGIN_CHO.indexOf(v)];
        }
        else if (_isJung(v)){
            ret = JUNGS[ORIGIN_JUNG.indexOf(v)];
        }
        else if (_isJong(v)){
            ret = JONGS[ORIGIN_JONG.indexOf(v)];
        }
    }
    else{

        const jamo = JAMOParser(v);

        const choIndex = jamo.choIndex;
        const jungIndex = jamo.jungIndex;
        const jongIndex = jamo.jongIndex;

        //ret = [];

        const cho = CHOS[choIndex];
        const jung = JUNGS[jungIndex];
        const jong = JONGS[jongIndex];

        ret = [cho, jung, jong];
    }

    return ret;
}

/**
 *
 * 분리된 한글(ㄱ, ㄷ, ㅏ ..)을 2단어 또는 3단어로 조합해가면서, 완성형 한글을 만들어낸다.
 * 2단어로 만들 수 있으면서 3단어가 안되면 2단어에서 짜르고, 3단어가 가능하면 3단어로 짜른다.
 * 이런식으로하면, 모든 홀/쌍 문자를 만들어 낼 수 있을듯하다.
 * 기존처럼 배열을 삭제하는것이 아니라, 합성된 문자 만큼, 배열 인덱스를 증가시켜주는 로직을 사용하면 될듯하다.
 *
 *
 * @param v
 * @param ret
 * @private
 */
function _assemble(v = null, ret = null, l = null, step = null){

    // ['ㄱ', 'ㄱ', 'ㄱ', 'ㄱ', 'ㅗ', 'ㅏ', 'ㅏ', 'ㅁ', 'ㄴ', 'ㅓ', 'ㄱ', 'ㅅ', 'ㄷ', 'ㅏ']

    // console.log(_assemble(['ㄱ', 'ㅅ', 'ㅏ', 'ㅗ', 'ㅏ', 'ㅂ', 'ㅅ', 'ㄴ', 'ㅓ', 'ㄱ', 'ㅅ', 'ㄷ', 'ㅏ']));

    v = v || [];
    ret = ret || [];


    const length = v.length ? v.length : 0;

    l = typeof l === 'number' ? l : 0;

    step = typeof step === 'number' ? step : 1;

    for (let i = 0; i < v.length; i++){

        console.log(i);

        let v1 = v[i];
        let v2 = v[i + 1];
        let v3 = v[i + 2];
        let v4 = v[i + 3];
        let v5 = v[i + 4];
        let v6 = v[i + 5];

        //console.log(i, '', v1, v2, v3, v4, v5, v6);

        let complexChoConsonant = '';
        let complexVowel = '';
        let complexConsonant = '';


        let cho = '';
        let jung = '';
        let jong = '';

        if (_isCho(v1)){

            complexChoConsonant = _getComplexChoConsonant(v1, v2);

            if (complexChoConsonant){
                cho = complexChoConsonant;
                //++i;
            }
            else{
                cho = v1;
            }
        }

        if (complexChoConsonant){

            if (_isJung(v3)){

                complexVowel = _getComplexVowel(v3, v4);

                if (complexVowel){
                    jung = complexVowel;
                    //++i;
                }
                else{
                    jung = v3;
                }
            }
        }
        else{

            if (_isJung(v2)){

                complexVowel = _getComplexVowel(v2, v3);

                if (complexVowel){
                    jung = complexVowel;
                    //++i;
                }
                else{
                    jung = v2;
                }
            }
        }

        if (complexChoConsonant){

            if (complexVowel){

                if (_isJong(v5)){

                    complexConsonant = _getComplexConsonant(v5, v6);

                    if (complexConsonant){
                        jong = complexConsonant;
                        //++i;
                    }
                    else{
                        jong = v5;
                    }
                }
            }
            else{

                if (_isJong(v4)){

                    complexConsonant = _getComplexConsonant(v4, v5);

                    if (complexConsonant){
                        jong = complexConsonant;
                        //++i;
                    }
                    else{
                        jong = v4;
                    }
                }
            }
        }
        else{

            if (complexVowel){

                if (_isJong(v4)){

                    complexConsonant = _getComplexConsonant(v4, v5);

                    if (complexConsonant){
                        jong = complexConsonant;
                        //++i;
                    }
                    else{
                        jong = v4;
                    }
                }
            }
            else{

                if (_isJong(v3)){

                    complexConsonant = _getComplexConsonant(v3, v4);

                    if (complexConsonant){
                        jong = complexConsonant;
                        //++i;
                    }
                    else{
                        jong = v3;
                    }
                }
            }
        }

        console.log(jong);

        if (_isComplete(JAMOMerge(cho, jung, jong))){
            i += 3;
            ret.push(JAMOMerge(cho, jung, jong))
        }
        else if (_isComplete(JAMOMerge(cho, jung, ''))){
            i += 2;
            ret.push(JAMOMerge(cho, jung, ''))
        }
        else{
            ret.push(v1);
        }

        //console.log(cho, jung, JAMOMerge(cho, jung, jong));
        //console.log('cho', cho, 'jung', jung, 'jong', jong, JAMOMerge(cho, jung, jong));

        //console.log(cho, jung);
        //console.log(cho, jung, jong);

        //ret.push(cho);
        //ret.push(jung);
        //ret.push(jong);
        //ret.push(',');
    }


        //if (step === 1){
        //
        //    //const complexChoConsonant = _getComplexChoConsonant(vv, v[l + 1]);
        //
        //    let tmpText = '';
        //
        //    l = 0;
        //
        //    step = 2;
        //
        //    let tmpVV = v.shift();
        //
        //    ret.push(vv);
        //
        //    if (_isCho(v[0]) && !_getComplexConsonant(v[0], v[1])){
        //
        //        tmpText = ',';
        //        step = 1;
        //    }
        //
        //    if (_isJung(v[0]) || _getComplexVowel(v[0], v[1])){
        //        step = 2;
        //    }
        //
        //    if (_getComplexConsonant(v[0], v[1])){
        //
        //        tmpText = ',';
        //        step = 3;
        //    }
        //
        //    tmpText && ret.push(tmpText);
        //
        //    ret = _assemble(v, ret, l, step);
        //}
        //else if (step === 2){
        //
        //    const complexVowel = _getComplexVowel(vv, v[l + 1]);
        //    let tmpVV = complexVowel;
        //
        //    let tmpText = '';
        //
        //    l = 0;
        //
        //    step = 3;
        //
        //    if (complexVowel){
        //
        //        v.shift();
        //        v.shift();
        //
        //        ret.push(complexVowel);
        //    }
        //    else{
        //        tmpVV = v.shift();
        //        ret.push(vv);
        //    }
        //
        //    if (_isCho(v[0]) && !_getComplexConsonant(v[0], v[1])){
        //
        //        //if (_isJung(tmpVV)){
        //        //    tmpText = ',';
        //        //}
        //
        //        step = 1;
        //    }
        //
        //    if (_isJung(v[0]) || _getComplexVowel(v[0], v[1])){
        //
        //        tmpText = ',';
        //        step = 2;
        //    }
        //
        //    if (_getComplexConsonant(v[0], v[1])){
        //        step = 3;
        //    }
        //
        //    tmpText && ret.push(tmpText);
        //
        //    ret = _assemble(v, ret, l, step);
        //}
        //else if (step === 3){
        //
        //    l = 0;
        //
        //    step = 1;
        //
        //    const complexConsonant = _getComplexConsonant(vv, v[l + 1]);
        //
        //    console.log(complexConsonant);
        //
        //    if (complexConsonant){
        //
        //        v.shift();
        //        v.shift();
        //
        //        ret.push(complexConsonant);
        //    }
        //    else{
        //
        //        v.shift();
        //        ret.push(vv);
        //    }
        //
        //    let tmpText = ',';
        //
        //    if (_isCho(v[0]) && !_getComplexConsonant(v[0], v[1])){
        //        step = 1;
        //    }
        //
        //    if (_isJung(v[0]) || _getComplexVowel(v[0], v[1])){
        //        step = 2;
        //    }
        //
        //    if (_getComplexConsonant(v[0], v[1])){
        //        step = 3;
        //    }
        //
        //    tmpText && ret.push(tmpText);
        //
        //    ret = _assemble(v, ret, l, step);
        //}
    //}

    return ret;

    function _getComplexChoConsonant(v1 = '', v2 = ''){

        let ret;

        COMPLEX_CHO_CONSONANTS.forEach(v => {
            if (v[0] === v1 && v[1] === v2){
                ret = v[2];
                return;
            }
        });

        return ret;
    }

    function _getComplexConsonant(v1 = '', v2 = ''){

        let ret;

        COMPLEX_CONSONANTS.forEach(v => {
            if (v[0] === v1 && v[1] === v2){
                ret = v[2];
                return;
            }
        });

        return ret;
    }

    function _getComplexVowel(v1 = '', v2 = ''){

        let ret;

        COMPLEX_VOWELS.forEach(v => {
            if (v[0] === v1 && v[1] === v2){
                ret = v[2];
                return;
            }
        });

        return ret;
    }
}

function JAMOMerge(cho = null, jung = null, jong = null){

    let ret = '';

    const choIndex  = ORIGIN_CHO.indexOf(cho);
    const jungIndex = ORIGIN_JUNG.indexOf(jung);
    const jongIndex = ORIGIN_JONG.indexOf(jong);

    let charCode;

    if (choIndex > -1 && jungIndex > -1 && jongIndex > -1){
        // 앞서 만들어 낸 계산식
        charCode = 0xAC00 + (choIndex * 21 + jungIndex) * 28 + jongIndex;
    }

    if (charCode){
        // 코드값을 문자로 변환
        ret = String.fromCharCode(charCode);
    }

    return ret;
}

/**
 *
 * @param v
 * @returns {{cho: string, jung: string, jong: string}}
 * @private
 */
function JAMOParser(v = ''){

    /**
        초성 중성 종성 분리 하기

        유니코드 한글은 0xAC00 으로부터
        초성 19개, 중성 21개, 종성 28개로 이루어지고, 이들을 조합한 11,172개의 문자를 갖는다.

        한글코드의 값(가) = ((초성(0) * 21) + 중성(0)) * 28 + 종성(0) + 0xAC00(0xAC00은 'ㄱ'의 코드값)

        따라서 다음과 같은 계산 식이 구해진다. 유니코드 한글 문자 코드 값이 X일 때,

        초성 = ((X - 0xAC00) / 28) / 21
        중성 = ((X - 0xAC00) / 28) % 21
        종성 = (X - 0xAC00) % 28

        이 때 초성, 중성, 종성의 값은 각 소리 글자의 코드값이 아니라
        이들이 각각 몇 번째 문자인가를 나타내기 때문에 다음과 같이 다시 처리한다.

        초성문자코드 = 초성 + 0x1100 //('ㄱ') => 시작 메모리 주소값이, 위에서 구한 자리값을 더하면, 구하고자하는 메모리 주소값이 된다.
        중성문자코드 = 중성 + 0x1161 // ('ㅏ')
        종성문자코드 = 종성 + 0x11A8 - 1 // (종성이 없는 경우가 있으므로 1을 뺌)
    **/

    // `0xAC00` 16진수값은 유니코드 `가` 값이 가지는, 메모리 주소이다.(`0xAC01(각)`, `0xAC01(갂)`...)
    v = v.charCodeAt(0) - parseInt('0xAC00', 16);

    // 초성 자리 수
    const choIndex = parseInt((v / (21 * 28)), 10);

    // 중성 자리 수
    const jungIndex = parseInt(((v / 28) % 21), 10);

    // 종성 자리 수
    const jongIndex = parseInt(v % 28, 10);


    // `0x1100` 16진수값은 초성 `ㄱ` 이 가지는, 메모리 주소이다.(0x1100(ㄱ), 0x1101(ㄲ), 0x1102(ㄴ)...)
    const cho = String.fromCharCode(choIndex + parseInt('0x1100', 16));
    // `0x1161` 16진수값은 중성 `ㅏ` 가지는, 메모리 주소이다.(0x1161(ㅏ), 0x1162(ㅐ), 0x1162(ㅑ)...)
    const jung = String.fromCharCode(jungIndex + parseInt('0x1161', 16));
    // `0x11A8` 16진수값은 종성 `ㄱ` 이 가지는, 메모리 주소이다.(0x11A8(ㄱ), 0x11A9(ㄲ), 0x11AA(ㄳ)...)
    const jong = String.fromCharCode(jongIndex + parseInt('0x11A8', 16) - 1);

    return {
        cho: cho || '',
        jung: jung || '',
        jong: jong || '',
        choIndex,
        jungIndex,
        jongIndex
    };
}

module.exports = Input;

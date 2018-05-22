/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE = require('../base');
const Util = require('../assets/js/util');
const Type = require('../assets/js/type');

// ajax 라이브러리
const axios = require('axios');

const COMPONENT_CLASS_NAME = BASE.componentClassName('infinity');

// 전역 클래스 객체
const CLASS_NAME = {
    scrollSpace: 'scroll-space'
};


/**
 * Infinity Class
 */
class Infinity{

    constructor({
        data = [],
        height = 30,
        pageSize = 5
    } = {}){

        this.opts = {
            data,
            height,
            pageSize
        };
        //
        //// 데이터를 바인딩한다.
        //this.data = _getSearchData.call(this).then(res => {
        //
        //    this.data = res.data;
        //    this.init();
        //
        //}).catch(err => {
        //    console.error(err);
        //});
        //
        // 컴포넌트 엘리먼트
        this.root = Util.sel('tbody.-mohwa-ui-infinity');
        this.data = this.opts.data;

        this.activedPageNum = 0;
        this.tmpPageNum = 0;

        this.init();
    }
    init(){

        const root = this.root;
        const height = this.opts.height;
        const pageSize = this.opts.pageSize;

        Util.prop(root, '@height', `${height * pageSize}px`);

        _createScrollSpace.call(this);

        _addRows.call(this, 0, (pageSize * 2));

        _addEventListener.call(this);
    }
}

/**
 *
 * @private
 */
function _createScrollSpace(){

    const html = `<tr class="${CLASS_NAME.scrollSpace}" style="height:0px"></tr>`;

    Util.prepend(this.root, Util.el('tbody', {'innerHTML': html}).firstChild);
}

/**
 *
 * @private
 */
function _addEventListener(){

    const root = this.root;
    const height = this.opts.height;
    const pageSize = this.opts.pageSize;

    Util.prop(root, 'addEventListener', ['scroll', e => {

		const elem = e.target;
		const activedPageNum = this.activedPageNum = parseInt(elem.scrollTop / (height * pageSize));

		let startIndex = activedPageNum * pageSize;
		let endIndex = startIndex + (pageSize * 2);
		endIndex = list.length > endIndex ? endIndex : list.length;

		if (activedPageNum !== this.tmpPageNum){

		    const emptySpaceElem = Util.sel(`.${CLASS_NAME.scrollSpace}`, this.root);

            Util.prop(emptySpaceElem, '@height', `${((activedPageNum * pageSize) * height)}px`);

			this.tmpPageNum = activedPageNum;

		    // 이전 노드들을 삭제한다.
		    _removeRows.call(this);

		    _addRows.call(this, startIndex, endIndex);
		}
    }])

}

/**
 *
 * @param startIndex
 * @param endIndex
 * @private
 */
function _addRows(startIndex = 0, endIndex = 0){

    const data = this.data;

    for (let i = startIndex ; i < endIndex; i++){

        const item = data[i];

        const html = `<tr><td class="id">${item.id}</td><td class="name">${item.name}</td></tr>`;

        Util.append(this.root, Util.el('tbody', {'innerHTML': html}).firstChild);
    }
}

/**
 *
 * @private
 */
function _removeRows(){

    const elems = Util.children(this.root, 'tr');

    console.log(elems);

    const length = elems.length;

    for (let i = 1 ; i < length; i++){

        const elem = elems[i];

        Util.remove(elem);
    }
}

module.exports = Infinity;

/**
 * Created by mohwa on 2018. 4. 21..
 */


const BASE = require('../base');
const Util = require('../assets/js/util');
const Type = require('../assets/js/type');

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
        elem = null,
        data = [],
        cols = [],
        height = 30,
        pageSize = 5
    } = {}){

        if (!Type.isElement(elem)) return;
        if (elem.nodeName.toLowerCase() !== 'tbody') return;

        this.opts = {
            elem,
            data,
            cols,
            height,
            pageSize
        };

        // 컴포넌트 엘리먼트
        this.data = this.opts.data;

        // 활성회된 현재 페이지 번호
        this.activetedPageNum = 0;
        // 활성화된 이전 페이지 번호
        this.tmpPageNum = 0;

        this.init();
    }

    /**
     * 초기화 함수
     */
    init(){

        const component = this.opts.elem;
        const height = this.opts.height;
        const pageSize = this.opts.pageSize;

        _createScrollSpace.call(this);

        _addRows.call(this, 0, (pageSize * 2));

        const componentHeight = parseInt(Util.prop(component, '@height'));
        const componentClassName = Util.prop(component, 'className');

        // 확정된 세로 사이즈
        let resolveHeight = height * pageSize;
        resolveHeight = componentHeight <= resolveHeight ? componentHeight : resolveHeight;


        Util.prop(component, {
            "className": `${componentClassName} ${COMPONENT_CLASS_NAME}`,
            "@height": `${resolveHeight}px`
        });

        _addEventListener.call(this);
    }
}

/**
 *
 * 가상 스크롤 영역을 컴포넌트 엘리먼트에 추가한다.
 *
 * @private
 */
function _createScrollSpace(){

    const html = `<tr class="${CLASS_NAME.scrollSpace}" style="height:0px"></tr>`;

    Util.prepend(this.opts.elem, Util.el('tbody', {'innerHTML': html}).firstChild);
}

/**
 *
 * 스크롤 이벤트를 추가한다.
 *
 * @private
 */
function _addEventListener(){

    const component = this.opts.elem;
    const height = this.opts.height;
    const pageSize = this.opts.pageSize;

    Util.prop(component, 'addEventListener', ['scroll', e => {

		const elem = e.target;

		// 현재 활성화된 페이지 번호
		const activetedPageNum = this.activetedPageNum = parseInt(elem.scrollTop / (height * pageSize));

        // 보여질 데이터의 시작 index(0 페이지일때는 0, 1 페이지일때는 5 부터 시작한다)
		let startIndex = activetedPageNum * pageSize;
		// 보여질 데이터의 마지막 index(0 페이지일때는 0 ~ 9, 1 페이지일때는 5 ~ 14 까지)
		let endIndex = startIndex + (pageSize * 2);

        // 스크롤을 통해, 현재 페이지 번호가 변경될경우
		if (activetedPageNum !== this.tmpPageNum){

		    const emptySpaceElem = Util.sel(`.${CLASS_NAME.scrollSpace}`, component);

            Util.prop(emptySpaceElem, '@height', `${(activetedPageNum * pageSize) * height}px`);

            // 활성화된 페이지 번호를 임시 변수에 저장한다.
			this.tmpPageNum = activetedPageNum;

		    // 이전 노드들을 전부 삭제한다.
		    _removeRows.call(this);

            // 새로운 노드들을 추가한다.
		    _addRows.call(this, startIndex, endIndex);
		}
    }]);
}

/**
 *
 * row 엘리먼트를 추가한다.
 *
 * @param startIndex
 * @param endIndex
 * @private
 */
function _addRows(startIndex = 0, endIndex = 0){

    const component = this.opts.elem;
    const data = this.data;
    const cols = this.opts.cols;
    const height = this.opts.height;

    // data 길이에 맞게, 전체 길이를 변경시킨다.
    endIndex = data.length < endIndex ? data.length : endIndex;

    for (let i = startIndex ; i < endIndex; i++){

        let html = [];

        html.push(`<tr style="height:${height}px">`);

        const item = data[i];

        const colLength = cols.length;
        for (let ii = 0 ; ii < colLength; ii++){

            const col = cols[ii];

            if (!col.hidden) html.push(`<td>${item[col.name]}</td>`);
        }

        html.push(`</tr>`);

        Util.append(component, Util.el('tbody', {'innerHTML': html.join('')}).firstChild);
    }
}

/**
 *
 * 이전 row 엘리먼트를 삭제한다.
 *
 * @private
 */
function _removeRows(){

    const component = this.opts.elem;
    const elems = Util.children(component, 'tr');

    const length = elems.length;

    for (let i = 1 ; i < length; i++){

        const elem = elems[i];

        Util.remove(elem);
    }
}

module.exports = Infinity;

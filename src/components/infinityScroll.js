/**
 * Created by mohwa on 2018. 5. 23..
 */


const BASE = require('../base');
const Util = require('../assets/js/util');
const Type = require('../assets/js/type');

const COMPONENT_CLASS_NAME = BASE.componentClassName('infinity');

// 전역 클래스 객체
const CLASS_NAME = {
    topScrollSpace: 'top-scroll-space'
};


/**
 * InfinityScroll Class
 */
class InfinityScroll{

    constructor({
        elem = null,
        data = [],
        cols = [],
        height = 30,
        pageSize = 5
    } = {}){

        // 전달받은 엘리먼트가 엘리먼트 타입이 아닐 경우
        if (!Type.isElement(elem)) return;
        // 전달받은 엘리먼트가 div 엘리먼트가 아닐 경우
        if (elem.nodeName.toLowerCase() !== 'div') return;

        // tbody 엘리먼트를 가져온다.
        const tableBody = Util.sel('tbody', elem);

        if (!Type.isElement(tableBody)) return;

        this.opts = {
            elem,
            // 데이터
            data,
            // 컬럼 데이터
            cols,
            // row 세로 사이즈
            height,
            pageSize
        };

        this.tableBody = tableBody;

        // 활성회된 현재 페이지 번호
        this.activetedPageNum = 0;

        // 활성화된 이전 페이지 번호
        this.tmpPageNum = 0;

        // 컴포넌트 초기화
        this.init();
    }

    /**
     * 초기화 함수
     */
    init(){

        const root = this.opts.elem;
        const tableBody = this.tableBody;
        const height = this.opts.height;
        const pageSize = this.opts.pageSize;

        _createTopScrollSpace.call(this);

        _addRows.call(this, 0, (pageSize * 2));

        const tableBodyHeight = parseInt(Util.prop(tableBody, '@height'));
        const rootClassName = Util.prop(root, 'className');

        // 확정된 세로 사이즈
        let resolvedHeight = height * pageSize;
        resolvedHeight = tableBodyHeight <= resolvedHeight ? tableBodyHeight : resolvedHeight;

        // root 엘리먼트에 세로 사이즈를 할당한다.
        Util.prop(root, {
            "className": `${rootClassName} ${COMPONENT_CLASS_NAME}`,
            "@height": `${resolvedHeight}px`
        });

        _addEventListener.call(this);
    }
}

/**
 *
 * (가상)스크롤 영역을 가진 엘리먼트를 추가한다.
 *
 * @private
 */
function _createTopScrollSpace(){

    const tableBody = this.tableBody;
    const html = `<tr class="${CLASS_NAME.topScrollSpace}" style="height:0px"></tr>`;

    Util.prepend(tableBody, Util.el('tbody', {'innerHTML': html}).firstChild);
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

		    const topScrollSpaceElem = Util.sel(`.${CLASS_NAME.topScrollSpace}`, component);

            Util.prop(topScrollSpaceElem, '@height', `${(activetedPageNum * pageSize) * height}px`);

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

    const tableBody = this.tableBody;
    const data = this.opts.data;
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

        Util.append(tableBody, Util.el('tbody', {'innerHTML': html.join('')}).firstChild);
    }
}

/**
 *
 * 이전 row 엘리먼트를 삭제한다.
 *
 * @private
 */
function _removeRows(){

    const tableBody = this.tableBody;
    const elems = Util.children(tableBody, 'tr');

    const length = elems.length;

    for (let i = 1 ; i < length; i++){

        const elem = elems[i];

        Util.remove(elem);
    }
}

module.exports = InfinityScroll;

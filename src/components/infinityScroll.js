/**
 * Created by mohwa on 2018. 5. 23..
 */

const domUtil = require('../assets/js/domUtil');
const util = require('../assets/js/util');
const type = require('../assets/js/type');

const BASE = require('../base');

const COMPONENT_CLASS_NAME = BASE.componentClassName('infinity');

// 전역 클래스 객체
const CLASS_NAME = {
    topScrollSpace: 'top-scroll-space',
    bottomScrollSpace: 'bottom-scroll-space',
    noDataText: 'no-data-text'
};

const ERR_MSG = {
    notElementType: 'elem 옵션이 엘리먼트 타입이 아닙니다.',
    notFoundTableBodyElement: 'elem 옵션의 자식 엘리먼트에 tbody 엘리먼트가 없습니다.'
};

/**
 * InfinityScroll Class
 */
class InfinityScroll{

    constructor({
        elem = null,
        data = [],
        cols = [],
        rowHeight = 30,
        rowSize = 5,
        noDataText = '',
        multipleRowCount = 4,
        onSelectCell = function(){},
    } = {}){

        // 전달받은 엘리먼트가 엘리먼트 타입이 아닐 경우
        if (!type.isElement(elem)){
            throw new Error(ERR_MSG.notElementType);
        }

        // elem 자식인 tbody 엘리먼트를 가져온다.
        const tableBody = domUtil.sel('tbody', elem);

        // 전달받은 엘리먼트의 자식 엘리먼트에 tbody 엘리먼트가 없을 경우
        if (!type.isElement(tableBody)){
            throw new Error(ERR_MSG.notFoundTableBodyElement);
        }

        this.opts = {
            // root 엘리먼트
            elem,
            // 데이터
            data,
            // 컬럼 데이터
            cols,
            // row 세로 사이즈
            rowHeight,
            // 페이지당 보여질 row 갯수
            rowSize,
            // 전달받은 데이터가 비어있을때 보여줄 텍스트
            noDataText,
            // 전달받은 rowSize 에, 추가로 더해질 row 들의 (공)배수
            multipleRowCount,
            // cell 선택 시, 호출될 callback 함수
            onSelectCell
        };

        // tbody 엘리먼트
        this.tableBody = tableBody;

        // 활성회된 현재 페이지 번호
        this.activetedPageNum = 0;

        // 활성화된 이전(임시) 페이지 번호
        this.tmpPageNum = 0;
    }
    /**
     * 초기화 함수
     */
    init(){

        const root = this.opts.elem;
        const tableBody = this.tableBody;

        const data = this.opts.data;
        const rowHeight = this.opts.rowHeight;
        const rowSize = this.opts.rowSize;

        const multipleRowCount = this.opts.multipleRowCount;

        // 컴포넌트 클래스명을 추가시킨다.
        domUtil.prop(root, 'className', `${domUtil.prop(root, 'className')} ${COMPONENT_CLASS_NAME}`);

        // 데이터가 비어있을 경우
        if (!data.length){
            this._setNoDataText();
            return;
        }

        this._createTopScrollSpaceElem();

        this._addRowElems(0, (rowSize * multipleRowCount));

        this._createBottomScrollSpaceElem();

        // 페이지당 총 세로 사이즈
        const pageHeight = rowHeight * rowSize;
        const tableBodyWidth = parseInt(domUtil.prop(tableBody, '@width'));
        const tableBodyHeight = parseInt(domUtil.prop(tableBody, '@height'));

        // 실제 보여질 overflow 사이즈
        const overflowHeight = tableBodyHeight <= pageHeight ? tableBodyHeight : pageHeight;

        // root 엘리먼트에 가로/세로 사이즈를 할당한다.
        domUtil.prop(root, '@width', `${(tableBodyWidth + 1)}px`);
        domUtil.prop(root, '@height', `${overflowHeight}px`);

        domUtil.attr(tableBody, 'tabindex', 0);

        this._addEventListener();
    }
    /**
     *
     * top 스크롤 영역을 가진 엘리먼트를 추가한다.
     *
     * @private
     */
    _createTopScrollSpaceElem(){

        const tableBody = this.tableBody;
        const html = `<tr class="${CLASS_NAME.topScrollSpace}" style="height:0px"></tr>`;

        const tr = domUtil.el('tbody', {"innerHTML": html}).firstChild;

        domUtil.prepend(tableBody, tr);
    }
    /**
     *
     * bottom 스크롤 영역을 가진 엘리먼트를 추가 및 설정한다.
     *
     * @private
     */
    _createBottomScrollSpaceElem(topScrollSpaceHeight = 0){

        const rowHeight = this.opts.rowHeight;
        const rowSize = this.opts.rowSize;
        const data = this.opts.data;

        const tableBody = this.tableBody;

        const pageHeight = rowHeight * rowSize;

        //**************************************************
        //**************************************************
        // tableBody 스크롤을 전달받은 topScrollSpace 위치에 놓기위해, bottomScrollSpace 공간을 만들어준다.
        // bottomScrollSpace 사이즈 공식은 아래와 같다.
        // (data.length * rowHeight(전체 데이터를 노출 시키기위해 필요한 사이즈)) - (topScrollSpaceHeight(사용자가 스크롤한 사이즈) + resolvedHeight(이미 화면에 그려진 rows 사이즈))
        //**************************************************
        //**************************************************
        // 아이템의 전체 높이
        const fullHeight = data.length * rowHeight;
        // 바닥 공간 높이(fullHeight - ((topScrollSpaceHeight + pageHeight) + 현재 랜더링된 아이템 전체 높이))
        // 현재 랜더링된 아이템 전체 높이가 빠져있다(추가해야한다!!)
        const bottomScrollSpaceHeight = fullHeight - (topScrollSpaceHeight + pageHeight);

        let tr = domUtil.sel(`.${CLASS_NAME.bottomScrollSpace}`, tableBody);

        // bottomScrollSpace 엘리먼트가 없을 경우
        if (!type.isElement(tr)){

            // bottomScrollSpace 엘리먼트를 추가한다.
            tr = domUtil.el('tbody', {"innerHTML": `<tr class="${CLASS_NAME.bottomScrollSpace}"></tr>`}).firstChild;
            domUtil.append(tableBody, tr);
        }

        if (bottomScrollSpaceHeight > pageHeight){
            domUtil.prop(tr, '@height', `${bottomScrollSpaceHeight}px`);
        }
        else{
            // 더이상 스크롤할 공간이 없을 경우
            domUtil.remove(tr);
        }
    }
    /**
     *
     * 스크롤 이벤트를 추가한다.
     *
     * @private
     */
    _addEventListener(){

        const component = this.opts.elem;
        const tableBody = this.tableBody;

        const rowHeight = this.opts.rowHeight;
        const rowSize = this.opts.rowSize;
        const multipleRowCount = this.opts.multipleRowCount;

        // multipleRowCount 반 사이즈
        // 전달받은 rowSize 에 multipleRowCount 를 곱해준 row 갯수 반만큼을 갱신할 row 갯수로 설정한다.

        // rowSize(5) * multipleRowCount(4) = 20 / (multipleRowCount / 2)(=> 2) = 결과: 10
        const halfMultipleRowCount = multipleRowCount / 2;

        domUtil.prop(component, 'addEventListener', ['scroll', e => {

            const elem = e.target;

            // 페이지당 세로 사이즈
            const pageHeight = rowHeight * rowSize;

            // 현재 활성화된 페이지 번호
            const activetedPageNum = this.activetedPageNum = parseInt(elem.scrollTop / (pageHeight * halfMultipleRowCount));

            // 데이터의 시작 index(0 페이지일때는 0, 1 페이지일때는 10 부터 시작한다)
            let startIndex = (activetedPageNum * rowSize) * halfMultipleRowCount;
            // 데이터의 마지막 index(0 페이지일때는 0 ~ 20, 1 페이지일때는 10 ~ 30 까지)
            let endIndex = startIndex + (rowSize * multipleRowCount);

            // 스크롤을 통해, 현재 페이지 번호가 변경될경우
            if (activetedPageNum !== this.tmpPageNum){

                const topScrollSpaceElem = domUtil.sel(`.${CLASS_NAME.topScrollSpace}`, component);
                const topScrollSpaceSize = ((activetedPageNum * rowSize) * rowHeight) * halfMultipleRowCount;

                domUtil.prop(topScrollSpaceElem, '@height', `${topScrollSpaceSize}px`);

                // 활성화된 페이지 번호를 임시 변수에 저장한다.
                this.tmpPageNum = activetedPageNum;

                // 추가된 이전 노드들을 모두 삭제한다.
                this._removeRows();

                // 새로운 노드들을 추가한다.
                this._addRowElems(startIndex, endIndex);

                // bottomScrollSpaceElem 설정한다.
                this._createBottomScrollSpaceElem(topScrollSpaceSize);
            }
        }]);

        domUtil.prop(tableBody, 'addEventListener', ['click', e => {

            const elem = e.target;
            const nodeName = elem.nodeName.toLowerCase();
            const onSelectCell = this.opts.onSelectCell;

            if (nodeName === 'td'){
                onSelectCell.call(this, elem);
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
    _addRowElems(startIndex = 0, endIndex = 0){

        const tableBody = this.tableBody;
        const data = this.opts.data;
        const cols = this.opts.cols;
        const rowHeight = this.opts.rowHeight;

        // data 길이에 맞게, endIndex 값을 변경시킨다.
        endIndex = data.length < endIndex ? data.length : endIndex;

        for (let i = startIndex ; i < endIndex; i++){

            let html = [];

            html.push(`<tr style="height:${rowHeight}px">`);

            const item = data[i];

            if (cols.length){

                cols.forEach(v => {

                    // 컬럼을 노출해야할 경우
                    if (!v.hidden){
                        html.push(`<td>${item[v.name]}</td>`);
                    }
                });
            }
            else{

                for (let k in item){
                    html.push(`<td>${item[k]}</td>`);
                }
            }

            html.push(`</tr>`);

            domUtil.append(tableBody, domUtil.el('tbody', {"innerHTML": html.join('')}).firstChild);
        }
    }
    /**
     *
     * 빈 데이터 텍스트를 설정한다.
     *
     * @private
     */
    _setNoDataText(){
        const tableBody = this.tableBody;
        const noDataText = this.opts.noDataText;

        if (type.isEmpty(noDataText)) return;

        const html = `<tr class="${CLASS_NAME.noDataText}"><td>${noDataText}</td></tr>`;

        domUtil.append(tableBody, domUtil.el('tbody', {"innerHTML": html}).firstChild);
    }
    /**
     *
     * 이전 row 엘리먼트를 삭제한다.
     *
     * @private
     */
    _removeRows(){

        const tableBody = this.tableBody;
        const elems = domUtil.children(tableBody, 'tr');

        const length = elems.length;

        for (let i = 1 ; i < length; i++){

            const elem = elems[i];

            domUtil.remove(elem);
        }
    }
}


module.exports = InfinityScroll;

/**
 * Created by mohwa on 2018. 5. 25..
 */

const base = require('../src/base');
const componentClassName = base.componentClassName('infinity');
const templateFilePath = require('./infinityScroll.spec.html');

const InfinityScroll = require('../src/components/infinityScroll');

const $ = require('jquery');
const chai = require('chai');

const expect = chai.expect;

// 이 부분을 추가 export 영역으로 둘지는 좀더 생각해봐야겠다.
const className = {
    topScrollSpace: 'top-scroll-space',
    bottomScrollSpace: 'bottom-scroll-space',
    noDataText: 'no-data-text'
};

// 최종 사용자 관점에서 문제(요구사항)들을 정리한다.

// given: "어떤 상황"이 들어간다.
// when: "어떻게 동작한다"가 들어간다.
// then:" 동작한 결과가 어떠해야한다"가 들어간다.
describe('infinityScroll.js', () => {

    let $div = null;
    let instance = null;

    let rowSize = 0;
    let rowHeight = 0;
    let pageHeight = 0;
    let multipleRowCount = 0;

    const data = [];

    // before hook 은 describe 단위, beforeEach 는 it 단위로 실행된다.
    before(() => {

        rowSize = 5;
        rowHeight = 30;
        pageHeight = rowHeight * rowSize;
        multipleRowCount = 2;

        for (let i = 0; i < 1000; i++){

            data.push({
                "Name": "Name" + i,
                "logCode": "logCode" + i,
                "logCodeName": "logCodeName" + i,
                "date": new Date().getTime(),
                "Salary": "Salary" + i,
                "stateCode": "stateCode" + i,
                "stateCodeName": "stateCodeName",
                "testCode": "testCode" + i,
                "testCodeName": "testCodeName" + i
            });
        }
    });

    beforeEach(() => {

        $div = $(templateFilePath);
        $(document.body).append($div);
    });

    afterEach(() => {
        $div.remove();
    });

    describe('엘리먼트 생성 테스트', () => {

        it('최상위 엘리먼트에 컴포넌트 클래스명(-mohwa-ui-infinity)이 할당된다.', () => {

            // given
            instance = new InfinityScroll({
                elem: $div.get(0)
            });

            // when
            instance.init();

            // then
            expect($div.prop('className').indexOf(componentClassName)).to.not.equal(-1);
        });

        it('top scroll 영역을 갖는 엘리먼트가 생성된다.', () => {

            // given
            instance = new InfinityScroll({
                elem: $div.get(0),
                data
            });

            // when
            instance.init();

            const $topScrollSpaceElem = $div.find(`tbody tr.${className.topScrollSpace}`);

            // then
            expect($topScrollSpaceElem.get(0)).to.not.equal(undefined);
        });

        it('bottom scroll 영역을 갖는 엘리먼트가 생성된다.', () => {

            // given
            instance = new InfinityScroll({
                elem: $div.get(0),
                data
            });

            // when
            instance.init();

            const $bottomScrollSpaceElem = $div.find(`tbody tr.${className.bottomScrollSpace}`);

            // then
            expect($bottomScrollSpaceElem.get(0)).to.not.equal(undefined);
        });
    });

    describe('리스트 테스트', () => {

        it('데이터가 비어있다면, `tr` 엘리먼트를 생성하지않는다.', () => {

            // given
            instance = new InfinityScroll({
                elem: $div.get(0),
                data: []
            });

            // when
            instance.init();

            // then
            expect($div.find('tbody tr').children().length).to.equal(0);
        });

        it('데이터가 비어있으면서 `noDataText` 속성을 전달했다면, 첫 번째 `tr > td` 엘리먼트에 `noDataText` 값이 할당된다.', () => {

            // given

            const noDataText = '데이터가 없습니다';

            instance = new InfinityScroll({
                elem: $div.get(0),
                data: [],
                noDataText: noDataText
            });

            // when
            instance.init();

            // then
            expect($div.find(`.${className.noDataText}`).text()).to.equal(noDataText);
        });

        it('리스트를 추가한다.', () => {

            // given

            instance = new InfinityScroll({
                elem: $div.get(0),
                data: data
            });

            // when
            instance._addRowElems(0, 10);

            const length = $div.find('tbody tr')
            .not(`.${className.topScrollSpace}`)
            .not(`.${className.bottomScrollSpace}`).length;

            // then
            expect(length).to.equal(10);
        });

        it('`topScrollSpace` 엘리먼트를 제외한 나머지 리스트를 전부 삭제한다.', () => {

            // given
            instance = new InfinityScroll({
                elem: $div.get(0),
                data
            });

            // when
            instance._removeRows();

            const length = $div.find('tbody tr')
            .not(`.${className.topScrollSpace}`)
            .not(`.${className.bottomScrollSpace}`).length;

            // then
            expect(length).to.equal(0);
        });
    });

    describe('스크롤 테스트', () => {

        it('컴포넌트 스크롤을, 두 번째 페이지의 시작만큼(150px) 스크롤하면, 그에 맞는 데이터가 보여지는가.', (done) => {

            // given

            instance = new InfinityScroll({
                elem: $div.get(0),
                data,
                rowSize,
                rowHeight,
                multipleRowCount
            });

            // when
            instance.init();

            $div.scrollTop(pageHeight);

            window.setTimeout(() => {

                // 6번째 row 엘리먼트의 첫번째 col 데이터
                const index = $div.find('tbody tr:nth-child(2) td:nth-child(1)').text().indexOf('Name5');

                // then
                expect(index).to.not.equal(-1);

                done();

            }, 100);
        });

        it('컴포넌트 스크롤을, 세 번째 페이지의 시작만큼(300px) 스크롤하면, 그에 맞는 데이터가 보여지는가.', (done) => {

            // given

            instance = new InfinityScroll({
                elem: $div.get(0),
                data,
                rowSize,
                rowHeight,
                multipleRowCount
            });

            // when
            instance.init();

            $div.scrollTop(pageHeight * 2);

            window.setTimeout(() => {

                // 11번째 row 엘리먼트의 첫번째 col 데이터
                const index = $div.find('tbody tr:nth-child(2) td:nth-child(1)').text().indexOf('Name10');

                // then
                expect(index).to.not.equal(-1);

                done();

            }, 100);
        });
    });
});
  

/**
 * Created by mohwa on 2018. 5. 25..
 */

const Base = require('../src/base');
const Util = require('../src/assets/js/util');

const InfinityScroll = require('../src/components/infinityScroll');

const COMPONENT_CLASS_NAME = Base.componentClassName('infinity');

const $ = require('jquery');
const chai = require('chai');

const expect = chai.expect;
const should = chai.should;

// 이 부분을 추가 export 영역으로 둘지는 좀더 생각해봐야겠다.
const CLASS_NAME = {
    topScrollSpace: 'top-scroll-space',
    bottomScrollSpace: 'bottom-scroll-space',
    noDataText: 'no-data-text'
};

// 최종 사용자 관점에서 문제(요구사항)들을 정리한다.

// given: "어떤 상황"이 들어간다.
// when: "어떻게 동작한다"가 들어간다.
// then:" 동작한 결과가 어떠해야한다"가 들어간다.
describe('infinityScroll.js', () => {

    const data = [];

    let $div = null;

    beforeEach(() => {

        for (let i = 0; i < 10000; i++){

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

        $div = $('<div class=".infinity-container"><table><tbody></tbody></table></div>');
    });

    describe('주요 엘리먼트 생성 테스트', () => {

        it('최상위 컴포넌트 엘리먼트가 생성되는가?', () => {

            // given
            const instance = new InfinityScroll({
                elem: $div.get(0)
            });

            // when
            instance.init();

            // then
            expect($div.prop('className').indexOf(COMPONENT_CLASS_NAME)).to.not.equal(-1);
        });

        it('top scroll 영역을 갖는 엘리먼트가 생성되는가?', () => {

            // given
            const instance = new InfinityScroll({
                elem: $div.get(0),
                data
            });

            // when
            instance.init();

            const $topScrollSpaceElem = $div.find(`tbody tr.${CLASS_NAME.topScrollSpace}`);

            // then
            expect($topScrollSpaceElem.get(0)).to.not.equal(undefined);
        });

        it('bottom scroll 영역을 갖는 엘리먼트가 생성되는가?', () => {

            // given
            const instance = new InfinityScroll({
                elem: $div.get(0),
                data
            });

            // when
            instance.init();

            const $bottomScrollSpaceElem = $div.find(`tbody tr.${CLASS_NAME.bottomScrollSpace}`);

            // then
            expect($bottomScrollSpaceElem.get(0)).to.not.equal(undefined);
        });
    });

    describe('리스트 테스트', () => {

        it('데이터가 비어있을 경우, 리스트 엘리먼트를 생성하는가?', () => {

            // given
            const instance = new InfinityScroll({
                elem: $div.get(0),
                data: []
            });

            // when
            instance.init();

            // then
            expect($div.find('tbody tr').children().length).to.equal(0);
        });

        it('데이터가 비어있을 경우, 첫 번째 엘리먼트에 `noDataText` 속성값을 출력하는가?', () => {

            const noDataText = '데이터가 없습니다';
            // given
            const instance = new InfinityScroll({
                elem: $div.get(0),
                data: [],
                noDataText: noDataText
            });

            // when
            instance.init();

            // then
            expect($div.find(`.${CLASS_NAME.noDataText}`).text()).to.equal(noDataText);
        });
    });
});
  

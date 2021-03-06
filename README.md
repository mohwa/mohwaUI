# [mohwa-ui](https://github.com/mohwa/mohwaUI)

`mohwa-ui`는 개인적으로 (재미삼아)만들고 싶었던 UI들을 결합시킨 프레임워크입니다.

## 지원 브라우저

`IE9+`, 대부분의 모던 브라우저(`Chrome`, `FF`, `Safari` 등)


## 설치하기

```
npm i mohwa-ui
```

## JS 가져오기

CommonJS 모듈 로더 방식으로 가져오기

```
const MohwaUI = require('mohwa-ui');
```


\<script\> 엘리먼트로 가져오기

```html
<script type="text/javascript" src="path/to/mohwa-ui.min.js"></script>
```

## CSS 가져오기

\<link\> 엘리먼트로 가져오기

```html
<link rel="stylesheet" href="path/to/mohwa-ui.min.css"></script>
```

## UI 컴포넌트 목록

### Suggest 컴포넌트

- 자동 (연관)검색 기능을 위한, 컴포넌트

- [실행 소스 및 데모 보기](https://jsfiddle.net/mohwa/gznkrwjp/10/)

프로퍼티

|Name|Types|Description|
|:--:|:-----:|:----------|
|`elem`|`{Element}`|Suggest를 적용할 입력 엘리먼트를 정의한다.|
|`data`|`{Array/Object}`|검색 데이터 또는 요청할 서버 정보를 정의한다.|

이벤트

|Name|Types|Description|
|:--:|:-----:|:----------|
|`onEnter`|`{Function}`|`Enter`키 클릭 시, 호출될 콜백함수를 정의한다.|
|`onSelected`|`{Function}`|검색어 선택 시, 호출될 콜백함수를 정의한다.|

___

### InfinityScroll 컴포넌트

- 일정한 엘리먼트 갯수로, 무한 스크롤 테이블을 만들 수 있는 컴포넌트

- [실행 소스 및 데모 보기](https://jsfiddle.net/mohwa/Lsv7fx3f/28/)

프로퍼티

|Name|Types|Description|
|:--:|:-----:|:----------|
|`elem`|`{Element}`|InfinityScroll를 적용할 엘리먼트를 정의한다.|
|`data`|`{Object Array}`|테이블 데이터|
|`cols`|`{Object Array}`|컬럼 순서 및 화면 렌더링 유/무를 정의한다.|
|`rowHeight`|`{Int}`|row 당 세로 사이즈|
|`rowSize`|`{Int}`|페이지당 보여질 row 갯수|
|`noDataText`|`{String}`|데이터가 비어있을때 보여줄 텍스트|
|`multipleRowCount`|`{Int}`|기존 rowSize 에, 추가로 더해질 row 들의 (공)배수(높게 설정할 수록, 리스트 갱신 범위를 늘릴 수 있다)|

이벤트

|Name|Types|Description|
|:--:|:-----:|:----------|
|`onSelectCell`|`{Function}`|셀 선택 시, 호출될 callback 함수|

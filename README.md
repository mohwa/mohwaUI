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

- [실행 소스 및 데모 보기](http://jsfiddle.net/mohwa/gznkrwjp/7/)

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

- [실행 소스 및 데모 보기](https://jsfiddle.net/mohwa/Lsv7fx3f/)

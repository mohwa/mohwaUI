import axios from 'axios';
import Mousetrap from 'mousetrap';
// const Ganada = require('ganada');

import { after, el, prop, sel, parents, next, selAll, prev } from '../utils/domUtil';
import { isPlainObject, isNull, isFunction, isEmpty } from '../utils/type';

import Base from '.';

// 문자 조합/분리 모듈

// ajax 라이브러리

const COMPONENT_CLASS_NAME = Base.componentClassName('suggest');

// 전역 클래스 객체
const CLASS_NAME = {
  searchList: 'search-list',
  searchText: 'search-text',
  highlightWord: 'highlight-word',
};

/**
 * Suggest Class
 */
export default class Suggest {
  constructor({ elem = null, data = [], onEnter = null, onSelected = function() {} } = {}) {
    this._opts = {
      elem,
      data,
      onEnter,
      onSelected,
    };

    // 데이터를 바인딩한다.
    this._data = this._getSearchData()
      .then(res => {
        this._data = res.data;
        this.init();
      })
      .catch(err => {
        console.error(err);
      });

    // 컴포넌트 엘리먼트
    this._component = null;

    // 임시 검색된 문자열
    this._searchedText = '';

    // 활성화된 아이템
    this._activedItem = null;
  }
  init() {
    const root = this._opts.elem;
    const component = (this._component = this._createElement());

    this._setSearchListPosition();

    after(root, component);

    this._addEventListener();
  }
  /**
   * 컴포넌트 엘리먼트 객체를 반환한다.
   *
   * @returns {*}
   * @private
   */
  _createElement() {
    const html = [];

    html.push(`<div class="${COMPONENT_CLASS_NAME}">`);
    html.push(`<div class="${CLASS_NAME.searchList}">`);
    html.push('<ul>');
    html.push('</ul>');
    html.push('</div>');
    html.push('</div>');

    return el('div', { innerHTML: html.join('') }).firstChild;
  }
  /**
   *
   * 필요 이벤트들을 바인딩한다.
   *
   * @private
   */
  _addEventListener() {
    const root = this._opts.elem;
    const component = this._component;
    const onEnter = this._opts.onEnter;

    const ul = sel('ul', component);

    prop(root, 'addEventListener', [
      'keyup',
      e => {
        // 이벤트가 바인딩된 엘리먼트
        const elem = e.currentTarget;

        const val = elem.value;

        // 정의된 키코드들을 막는다.
        if (this._isPreventKeyCode(e)) return;

        // 공백 처리
        if (isEmpty(val)) {
          this._hide();
          return;
        }

        this._searchedText = val;

        this._clearSearchedList(ul);

        // 검색 리스트를 반환한다.
        const list = this._createSearchList(val, this._data);

        if (list.length) {
          prop(ul, 'innerHTML', list.join(''));

          this._show();
        }
      },
    ]);

    prop(ul, 'addEventListener', [
      'click',
      e => {
        // 이벤트가 발생된 엘리먼트
        const elem = e.target;

        const nodeName = elem.nodeName.toLowerCase();
        const activeItem = this._activedItem;

        // ui 엘리먼트 내부에서 `enter` 키가 눌렸을 경우
        if (this.isEnterKeyDown) {
          this.isEnterKeyDown = false;
          return;
        }

        const li = nodeName === 'a' || nodeName === 'b' ? parents(elem, 'li')[0] : elem;

        const text = this._getElemText(li);

        this._opts.onSelected.call(this, text);

        if (activeItem) this._addBlurClassName(activeItem);

        this._addFocusClassName(li);

        sel('a', li).focus();

        prop(root, 'value', text);

        this._activedItem = li;
      },
    ]);

    // 문서 엘리먼트를 클릭한 경우.
    prop(document, 'addEventListener', [
      'click',
      e => {
        // 이벤트가 발생된 엘리먼트
        const elem = e.target;

        if (this._isClose(elem)) this._hide();
      },
    ]);

    Mousetrap(root).bind('up', this._up.bind(this));
    Mousetrap(root).bind('down', this._down.bind(this));

    Mousetrap(ul).bind('up', this._up.bind(this));
    Mousetrap(ul).bind('down', this._down.bind(this));

    Mousetrap(root).bind('tab', this._hide.bind(this));
    Mousetrap(ul).bind('tab', this._hide.bind(this));

    Mousetrap(root).bind('enter', () => {
      enterKeyDown.call(this);
    });
    Mousetrap(ul).bind('enter', () => {
      this.isEnterKeyDown = true;
      enterKeyDown.call(this);
    });

    function enterKeyDown() {
      isFunction(onEnter) && onEnter.call(this, root.value);
      this._hide();
    }
  }
  /**
   *
   * 검색 리스트의 사이즈/위치를 설정한다.
   *
   * @private
   */
  _setSearchListPosition() {
    const root = this._opts.elem;
    const component = this._component;

    // root 엘리먼트의 절대 수치를 반환한다.
    const offset = offset(root);

    const width = outerWidth(root);
    const height = outerHeight(root);

    const top = offset.top + height;

    prop(component, {
      '@width': `${width}px`,
      '@top': `${top}px`,
      '@left': `${offset.left}px`,
    });
  }

  /**
   *
   * component 엘리먼트를 show 시킨다.
   *
   * @private
   */
  _show() {
    prop(this._component, '@display', 'block');
  }

  /**
   *
   * component 엘리먼트를 hide 시킨다.
   *
   * @private
   */
  _hide() {
    prop(this._component, '@display', 'none');
  }

  /**
   *
   * 정의된 키코드를 막는다.
   *
   * @param e
   * @returns {boolean}
   * @private
   */
  _isPreventKeyCode(e = {}) {
    const keyCode = e.keyCode;

    return keyCode === 13 || keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40;
  }

  /**
   *
   * input cursor 를 이동시킨다.
   *
   * @private
   */
  _moveInputCursor() {
    const root = this._opts.elem;

    window.setTimeout(() => {
      // 커서의 위치를 이동시키기위해, start, end 위치를 동일하게 전달한다.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
      root.setSelectionRange(root.value.length, root.value.length);
    });
  }

  /**
   *
   * 리스트 엘리먼트를 위로 이동시킨다.
   *
   * @private
   */
  _up() {
    const root = this._opts.elem;

    if (isEmpty(root.value)) return;

    this._show();

    const searchedText = this._searchedText;

    const lastElem = this._getLastListElement();
    const activedItem = this._activedItem;

    const prevElem = isNull(activedItem) ? lastElem : prev(activedItem);

    if (!isNull(activedItem)) {
      this._addBlurClassName(activedItem);
    }

    if (prevElem) {
      const text = this._getElemText(prevElem);

      this._addFocusClassName(prevElem);
      prop(root, 'value', text);

      //sel('a', prevElem).focus();

      this._activedItem = prevElem;
    } else {
      prop(root, 'value', searchedText);
      this._activedItem = null;
    }

    this._moveInputCursor();
  }

  /**
   *
   * 리스트 엘리먼트를 아래로 이동시킨다.
   *
   * @private
   */
  _down() {
    const root = this._opts.elem;

    if (isEmpty(root.value)) return;

    this._show();

    const firstElem = this._getFirstListElement();
    const activedItem = this._activedItem;

    const nextElem = isNull(activedItem) ? firstElem : next(activedItem);

    const searchedText = this._searchedText;

    if (!isNull(activedItem)) {
      this._addBlurClassName(activedItem);
    }

    if (nextElem) {
      const text = this._getElemText(nextElem);

      this._addFocusClassName(nextElem);
      prop(root, 'value', text);

      //sel('a', nextElem).focus();

      this._activedItem = nextElem;
    } else {
      prop(root, 'value', searchedText);
      this._activedItem = null;
    }

    this._moveInputCursor();
  }

  /**
   *
   * 시작 리스트 엘리먼트를 반환한다.
   *
   * @returns {*}
   * @private
   */
  _getFirstListElement() {
    return selAll('li', this._component)[0];
  }

  /**
   *
   * 마지막 리스트 엘리먼트를 반환한다.
   *
   * @returns {*}
   * @private
   */
  _getLastListElement() {
    const elems = selAll('li', this._component);

    return elems[elems.length - 1];
  }
  /**
   *
   * 검색된 리스트를 삭제한다.
   *
   * @param ul
   */
  _clearSearchedList(ul = null) {
    prop(ul, 'innerHTML', '');
  }

  /**
   *
   * 바인딩할 데이터를 반환한다.
   *
   * @returns {Promise}
   */
  _getSearchData() {
    const data = this._opts.data;

    return new Promise((resolve, reject) => {
      console.log('type', isPlainObject);
      if (isPlainObject(data)) {
        const url = data.url;
        const method = data.method || 'get';

        axios({
          url: url,
          method: method,
          data: data,
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      } else {
        resolve({ data: data });
      }
    });
  }

  /**
   *
   * 리스트 엘리먼트 집합을 반환한다.
   *
   * @param val
   * @param data
   * @returns {Array}
   * @private
   */
  _createSearchList(val = '', data = []) {
    const ret = [];

    data.forEach(v => {
      // const searchText = Ganada.search(v, val);
      // if (searchText) {
      //   const ptn = new RegExp(searchText);
      //
      //   v = v.replace(ptn, match => {
      //     return `<b>${match}</b>`;
      //   });
      //
      //   ret.push(`<li><a href="#" tabindex="0" onclick="return false">${v}</a></li>`);
      // }
    });

    return ret;
  }

  /**
   *
   * 전달받은 엘리먼트에 blur 클래스를 할당한다.
   *
   * @param elem
   * @private
   */
  _addBlurClassName(elem = null) {
    prop(elem, 'className', 'blur');
  }

  /**
   *
   * 전달받은 엘리먼트에 focus 클래스를 할당한다.
   *
   * @param elem
   * @private
   */
  _addFocusClassName(elem = null) {
    prop(elem, 'className', 'focus');
  }

  /**
   *
   * 검색 리스트 닫기 유/무를 반환한다.
   *
   * @param elem
   * @returns {boolean}
   * @private
   */
  _isClose(elem = null) {
    const className = `.${COMPONENT_CLASS_NAME}`;

    // 전달받은 엘리먼트가 input 엘리먼트가 아니거나, searchList 엘리먼트가 아닌 경우 true 를 반환한다.
    return next(elem) !== sel(className) && !parents(elem, className).length;
  }

  /**
   *
   * 전달받은 엘리먼트의 innerText 를 반환한다.
   *
   * @param elem
   * @returns {*}
   * @private
   */
  _getElemText(elem = null) {
    return prop(elem, 'innerText');
  }
}

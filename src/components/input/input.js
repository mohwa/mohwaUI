/**
 * Created by mohwa on 2018. 4. 21..
 */


const _BASE = require('./_base');

const Util = require('../../assets/js/util');
const Type = require('../../assets/js/type');

class Input extends _BASE {

    constructor(elem = null){

        super();

        this.elem = elem;

        this.init();

    }
    init(){

        const elem = this.elem;

        Util.append(elem, this.createElement());

        this.addEventListener();
    }
    createElement(){

        let html = [];

	//<div class="mohwa-ui-input-search">
	//	<div class="search-text">
	//		<input type="text" />
	//	</div>
	//	<div class="search-list">
	//		<ul>
	//			<li><a href="#">menu1</a></li>
	//			<li><a href="#">menu2</a></li>
	//			<li><a href="#">menu3</a></li>
	//			<li><a href="#">menu4</a></li>
	//			<li><a href="#">menu5</a></li>
	//			<li><a href="#">menu6</a></li>
	//			<li><a href="#">menu7</a></li>
	//		</ul>
	//	</div>
	//</div>

        html.push('<div class="mohwa-ui-input-search">');
        html.push('<div>dadasdas</div>');
        html.push('<div class="search-text">');
        html.push('<label>검색창</label><input type="text" />');
        html.push('</div>');
        html.push('<div class="search-list">');
        html.push('<ul>');
        html.push('</ul>');
        html.push('</div>');
        html.push('</div>');

        return Util.el('div', {'innerHTML': html.join('')}).firstChild;
    }
    addEventListener(){

        const elem = this.elem;

        const input = Util.sel('input', Util.sel('.search-text', elem));

        const searchList = Util.sel('.search-list', elem);
        const ul = Util.sel('ul', searchList);

        Util.prop(input, 'addEventListener', ['keyup', (e) => {
            Util.prop(searchList, '@display', 'block');
        }]);

        //console.dir(Util.prev(Util.sel('.search-text', elem)));
        //console.log($(Util.sel('.search-text', elem)).prev());
        //
        //console.dir(Util.prev(Util.sel('.search-list', elem)));
        //console.log($(Util.sel('.search-list', elem)).prev());

        // 문서 엘리먼트를 클릭한 경우.
        Util.prop(document, 'addEventListener', ['click', function(e){

            if (!Util.parents(e.target, '.mohwa-ui-input-search').length){
                Util.prop(searchList, '@display', 'none');
            }
        }]);
    }
}

module.exports = Input;

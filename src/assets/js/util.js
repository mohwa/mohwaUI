/**
 * Created by mohwa on 2018. 4. 21..
 */

const type = require('./type');

/**
* 유틸 객체
*/
const util = {
    /**
     * 전달받은 Object/Array 객체를 순회한다.
     */
    map(v = null, callback = function(){}){

        if (type.isPlainObject(v)){
            Object.keys(v).map(k => {
                return callback(v[k], k);
            });
        }
        else if (type.isArray(v)){

            v.map((v, index, array) => {
                return callback(v, index, array);
            });
        }

        return this;
    },
    /**
     * 전달받은 Object/Array 객체를 얕은 복사한다
     */
    clone(v = null){

        let ret = null;

        if (type.isPlainObject(v)){

            ret = {};

            this.map(v, (vv, k) => {
                ret[k] = vv;
            });
        }
        else if (type.isArray(v)){

            ret = [];

            this.map(v, vv => {
                ret.push(vv);
            });
        }

        return ret;
    },
    /**
     * 전달받은 Object/Array 객체를 깊은 복사한다
     */
    cloneDeep(v = null){

        let ret = null;

        if (type.isPlainObject(v)){

            ret = {};

            this.map(v, (vv, k) => {

                if (type.isPlainObject(vv) || type.isArray(vv)){
                    ret[k] = this.clone(vv);
                }
                else{
                    ret[k] = vv;
                }
            });
        }
        else if (type.isArray(v)){

            ret = [];

            this.map(v, vv => {

                if (type.isPlainObject(vv) || type.isArray(vv)){
                    ret.push(this.clone(vv));
                }
                else{
                    ret.push(vv);
                }
            });
        }

        return ret;
    },
    /**
     * 전달받은 Array 객체를 무작위로 다시 섞는다.
     */
    shuffle(v = []) {

        let r, tmp;

        const length = v.length;

        for (let i = length; --i;) {

            r = Math.floor(Math.random() * i);

            tmp = v[i - 1];
            v[i - 1] = v[r];
            v[r] = tmp;
        }

        return v;
    }
};

module.exports = util;
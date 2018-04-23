/**
 * Created by mohwa on 2018. 4. 23..
 */


const COMPONENT_PREFIX_NAME = '-mohwa-ui-';

/**
 *
 * @type {{}}
 */
const BASE = {

    /**
     * 컴포넌트 클래명을 반환한다.
     */
    componentClassName(v = ''){

        return `${COMPONENT_PREFIX_NAME}${v}`;
    }

};

module.exports = BASE;
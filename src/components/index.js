const COMPONENT_PREFIX_NAME = '-mohwa-ui-';

/**
 *
 * @type {{}}
 */
export default {
  /**
   * 컴포넌트 클래명을 반환한다.
   */
  componentClassName(v = '') {
    return `${COMPONENT_PREFIX_NAME}${v}`;
  },
};

/**
 * $('#button')
  .css('color', '#fff')
  .css('backgroundColor', '#000')
  .css('fontWeight', 'bold')
*/

/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    return {
        css(propertyName, value) {
            el.style[propertyName] = value;
            return this;
        },
    };
}

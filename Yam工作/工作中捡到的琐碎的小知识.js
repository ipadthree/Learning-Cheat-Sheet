---
写jasmine test时候：
describe blocks should provide context (e.g. describe('when this thing happens', ...)),
it blocks should provide the expectation, with it being the subject of the test (e.g. it('renders a list of foobars', ...)).

---
grunt i18n-status        可以看出string 的 translation status

---
console.error('asdf');      可以在phantomjs里显示出来信息

---
One caveat to be aware of when using the jQuery method is that, in addition to being a jQuery method,
.click() is also a DOM Level 2 native JavaScript method that can be called on HTML elements, such as <button> elements.

One place where this can become confusing is if you have a selector like this:

$("#element")[0].click();
There, you are actually calling the method on the DOM element. For instance, if you tried

$("#element")[0].trigger('click');
you would get an error that the element has no trigger method defined.

Be aware that $('#element')[0].click(); will not work in Safari, on certain elements. You will need to use a workaround.

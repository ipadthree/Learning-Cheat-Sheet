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

---
Array.prototype.map() method creates a new array with the results of calling a provided function on every element in this array.
var roots = numbers.map(function(x) {
   return x * 2;
});                                                 不改变原来值，但是返回新值

Array.prototype.forEach() method executes a provided function once for each array element. 就是只是运行一下，并不改变原来值，(don't mutate state)
没有返回值

---{
BannerSevices

用于保存一些 flag数据，或者count数据什么的。这些数据保存在services 里，
工作原理是：有一些key，事先确定好的。在 banners_bundle.js 的bootstrap里事先约定好
然后
import Banners from 'models/banner';
const Count = Banners.findById(NewEducationToast.TOAST_COUNT);
就可以得到这些key 的 value
这些值都是user sepcific的，传user id的过程是behind the scene的
所以这样可以帮助储存user的数据，因为不存在local storage，所以user可以 cross browser的查看存在server上得信息。

---
Ideally you should only have one expectation per it block, and that expectation should match the description in the block.
That way, when it fails, you know exactly what failed.

If you think they are different things, you should split in two.
If you think they are the same thing, maybe one of them is redundant, and you dont need both?

Never use MAGIC WORD in the code.

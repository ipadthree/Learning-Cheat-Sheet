---------------------------- Day 1 ----------------------------
data-* attributes    <element data-*="somevalue">
例子🌰：
function showDetails(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
<li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
<li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>
//显示    The Owl is a bird.
---
.key {
  transition: all .07s ease;    用于控制动画的长度时间，不是一下就让变化出现，当.playing 这个class
}                               加到 .key 上时，不会下一子 scale，而是按transition的控制慢慢scale

.playing {
  transform: scale(1.1);      The transform property applies a 2D or 3D transformation to an element.
}                             This property allows you to rotate, scale, move, skew, etc., elements.

---
box-shadow: 0 0 1rem #ffc600;
/* offset-x | offset-y | blur-radius | color */

---
<kbd>ipsum</kbd>          就是一种<span>
The HTML <kbd> element represents user input and produces an inline element displayed in the browser's default monospace font.'

---
window.addEventListener('keydown', (e) => {});      js vanilla way of listening event， pass in event as e。有event所有信息。

---
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);     找全部是 querySelectorAll
console.log(audio)你就会发现这种返回的就是一个纯html element，没有乱七八糟很多东西，不像jQuery返回的是一个包含很多东西的object

---
<audio src=""></audio>
像上面找到这个element后，就可以用
audio.currentTime = 0;   这个相当于rewind 这个音乐 to start，拖进度条到从开始播放。要不然每次播放完了进度条走到最后了，下一次没法看啊
audio.play()来播放这个音乐。

---
key.classList.add('playing') vanilla javascript way ===
key.addClass('playing'); in jQuery

key.classList.remove('playing')
key.classList.toggle('playing')

---
const keys = document.querySelectorAll('.key');       返回的是nodelist， nodelist 和 array的区别是 nodelist包含的 function 少，主要只有forEach，可以用es6[...nodelist] spread into array
keys.forEach(key => key.addEventListener(...))      要loop一个个给每个element加listener，要不直接夹在key上就是直接给keys array加listener了

---
keys.forEach(key => key.addEventListener('transitionend', () => {}))   css的 transition 结束是会有这个event
每一项transition都会trigger 自己的一个 event，所以可能出现好多个event





------------------------------- Day 2 ----------------------------
在需要target的css element上：
.hand{
  transform-origin: 100%;       x轴改变 transform的中点，default是50%
  transform: rotate(90deg);     让default的状态顺时针转90deg
  transition: all .5s;
  transition-timing-function: ease-in-out;      改变transition的效果
}

---
setInterval(callback(), 1000);      多产时间call 一次 callback function 以millisecond为单位。

---
const now = new Date()      自动就是当前时间。
const sec = now.getSeconds();   获得now这个值里的秒
因为是setInterval，每次都重新建一个新 Date()  所以秒数都变

---
secondHand.style.transform = `${second}deg`;      `这样就是在js里给一个element修改style的项目


------------------------- Day 3 ------------------------------

CSS variables can be updated by javascript
SASS 的是在compile time时候确定好，之后就不能改了

---
:root {               :root 就和 html的default 重置style一样，从根本上从新定义
  --base: #ff6600;    创建CSS variable 并赋默认值
  --spacing: 30px;        修改这些值，整个文件的值就都修改了
  --blur: 10px;
}

img {
  padding: var(--spacing);      这是如何使用这个css variable。     （SASS 里是$ sign？）
  filter: blur(--var(blur));      用来改照片effect的//The filter property provides graphical effects like blurring, sharpening, or color shifting an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
}

---
<input data-size='px' data-wes='aa'>
如果html有这样一个 component，在 js里选中这个object 这就有一个 this.dataset, dataset是一个object：
DOMStringMap{         有所有data-attribute的值
  size:'px',
  wes: 'aa'
}

---
const suffix = this.dataset.size || '';    这个句子就会找this.dataset.size，如果没有的话，就返回''，这样就不至于返回
                                      undefined，原来都不知道js的这种简单技巧。
---
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
                                    |             |                   改变成这个值，suffix是px别忘了
                                    |             ->找到要改变的值的key
                                    ->用这个function设置文件里css的perperty


------------------------- Day 4 ------------------------------
console.table(arrayObjects)     可以在console中output出一个表

---
Array.map(), take in an array, return a new array, but same length. 相当于给array做了个加工生产出新array。

---
Array.sort()
const ordered = a.sort((a,b) => a.year > b.year ? 1 : -1 )      sort就是来回比较两个值，把array里面的值都bubble 排序一遍。并且比较的是时候
                                                              使用1 -1 来表示谁在前谁在后，拍好序返回新的array。1 表示在前，－1 表示在后
---
Array.reduce()
const red = a.reduce((total, inven) = > {
  return total + inven
}, 0);                                             reduce有两个传入值，第一个值，也就是total，
                                                   总是之前作用结束产生的值，并且传入的function每次都要再次return 总的total值给下次使用
                                                   第二个就是每次loop到的array里的单个值。
                                                   这里的第二个值，which is 0，是设定的total的初始值。要不然谁知道最一开始应该是多少
---
string.split(', ')    就以逗号和空格把string分开，得到个array


------------------------- Day 5 ------------------------------
I should come back later and watch it again and againg for flex box

------------------------- Day 6 ------------------------------
Browser API
const endData = 'http://thisis.url'
fetch(endData)                            fetch 访问url, return 的是个 promise
  .then(blob => console.log(blob));

------------------------- Day 7 ------------------------------
Array.some(item => {});     some() take in a function 检查array里只要最少有一个item满足了条件， 就返回true。

const isAdult = people.some(()=>{})
console.log({isAdult});               加上{},会返回这个函数名字和结果值

---
Array.every()       是比较是不是Array里所有的item都（必须是全都）满足条件，全满足返回true

---
Array.find()      和filter()功能一模一样，只不过这个function只返回第一个找到的值

---
Array.findIndex(()=>{})     找到相对应 item 的index

---
Array.splice() method changes the contents of an array by removing existing elements and/or adding new elements

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]

---
Array.slice() method returns a shallow copy of a portion of an array into a new array object 
selected from begin to end (end not included). The original array will not be modified.

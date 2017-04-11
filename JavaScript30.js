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
const keys = document.querySelectorAll('.key');
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
secondHand.style.transform = `${second}deg`;      这样就是在js里给一个element修改style的项目

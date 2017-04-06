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
The HTML <kbd> element represents user input and produces an inline element displayed in the browser's default monospace font.

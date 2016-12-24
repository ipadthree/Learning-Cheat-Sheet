Array.isArray(obj)        判断obj是不是array

Transpile convert ES6 ---> ES5 用Babel
  <script src="babel的cdn"></script>
  还要改<script type="text/Javascript"  -> "text/babel">

  Babel-node 来run ES6的 node.js
  Babel-loader 转ES6 -> ES5

  webpack.config        file for webpack use.

  module.export = {
    entry: './script.js',
    output: {filename: 'bundle.js'},      run webpack in terminal 就输出成bundle.js 这文件有各个部分。
    module: {
      loaders; [
        { test: /\.js/, loader: "babel-loader" }
      ]
    }
  }

polyfill: code that support features that not there originally on browser.
  |
   -> Is a shim for a browser API.
            |
            ->library, 拦API 然后改arguments用于api放老version之类的。


Default values:
  function (firstname = "Jay") {
                |
                ->arg可加default value
  }

Let                   enforcing blockingscope, 用于for loop
  var a = 10;
  if(x) {
    var a = 4;          ES5 里global 的 a被改成4
  }

  var a = 10;
  if(x){
    let a = 4;
  }
  console.log(a)        这里的a是global的，为10


const
  const birthday = 1995;        把这个variable name 占位，不能被其他用。

template String
  function print (firstname) {
      console.log(`hello ${firstname}`);          extra space, line break, indention这些格式都保留。
                              |
                              ->可加判决语句 ? :

  }

spread sperator:    ...
  ["a", "b", ...cat, "c"];

Object literals
  Old:
    var cat = {
      meow: function (times) {
        console.log(Array((times + 1).join("H")));
      }
    }

  ES6:
    var cat = {
      meow (times) {
        console.log("meow".repeat(times));
                              |
                              ->ES6新function,构建新string，传进去几，重复几次。
      }
    }



Arrow function
  var studentList = function (students) {
    console.log(students);
  };
  变成：
  var studentList = (students) => {console.log(students);};
                    students => console.log(students);          一行code，括号都省了，省了之后不懈return，就被当成return value了

var person = {
  first: "Jay",
  actions: ["a", "b", "c"],
  printAction: function () {
    //var _this = this;
    this.actions.forEach(function (action) {            因为这里this refer to 这整个object, 所以这里面的 this refer不了整个object，this.first就不是Jay了。
      var str = this.first + "like" + action;       //_this.first + "like" + action
      console.log(str);
    }/*.bind(this)*/);
  }
}

改进1：加_this，让他refer整个object，这样就能一直access整个object
改进2: 加bind(this)，让里面这个this bind上外面的大scope this，让两个一样，就能refer to this.first = "Jay"了。
改进3:
  this.actions.forEach(action => {
    var str = this.first + "like" + action,
    console.log(str);
  });                     Arrow function 就相当于.bind(this)



For of
              ->直接就是array里各element
              |
  for (var value of array) {
    console.log(`${value}`);
  }

Computed properties
  var prefixos = "OS_";
  var [prefixos + 'windows'] = "a";
  var [prefixos + 'mac'] = "b";
          |
          ->variable name 在runtime改。


Destructuring assignment:
  var [aa, bb] = ['a', 'b', 'c', 'd'];          从右向左给variable
        |
        ->[]只是个syntax，实际相当于var aa, var bb 并用Array 里 element给他们赋值；
  console.log(aa)     //a
  console.log(bb)     //b
  var [aa,,,bb] = ['a', 'b', 'c', 'd', 'e'];
  console.log(aa)     //是'a'
  console.log(bb)     //是'd'
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
  var vacation = {
    destination: "china",
    travelers: 2,
    activity; 'ski',
    cost: 2000
  }
  直接按名refer，不像array按顺序。
  //传进来vacation
  function vac({destination, activity}) {
    return `${destination} ${activity}`;
  }

  console.log(vac(vacation));



Generator
  function* aFunction () {
    yield;
    yield;        pause function execution.
  }

  function* bFunction () {
    yield "three";
    yield "two";
    yield "one";
  }

  var action = bFunction();
  console.log(action.next());
                      |
                      ->往下走
  console.log(action.next().value);
                              |
                              ->"three"这种实际value
  常用于asynchronous function



class:
  class Vehicle {
    constructor(a,b) {

    }
  }

class inheritance
  class SemiTrack extends Vehicle {
    super(a, b)       ->call super 也即是parent的constructor
  }
  var smallCar = new SemiTrack();
  子类不写constructor就是默认用父类constructor
















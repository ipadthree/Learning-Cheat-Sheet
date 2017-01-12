el 指的是DOM, 每个backbone view 都有一个el refer她们。

_.debounce(function, wait, [immediate])         返回一个新function 等几微秒

_.first(array, [n])           返回array的第一个element，option是返回前n个。


The initialize() method is called when a new instance of a model is created.

var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {                 defaults 如果没有给variable进来就用default填
    title: '',
    completed: false
  }
});

Model.get('title')          用于获得model attribute

Model.set('title', 'new stuff');        重新设attribute
myTodo.set({
  title: "Both attributes set through Model.set().",        或者用一个object设置。
  completed: true
});



var Person = new Backbone.Model();
Person.on("change:name", function() { console.log('Name changed'); });          "change:attr"是检查attribute是不是改变了，没有：attr就是任何attr变了都算。现在listento name是否改变了
Person.set({name: 'Andrew'});
// log entry: Name changed

Person.set({name: 'Jeremy'}, {silent: true});     加了silent： true 就是改变了也不trigger，不回让之前的listerner听到。
// no log entry


最好在initialize()里加listener

Views 不含html markup，含presentation的logic，一般都是通过template表现。
Views render() 与Model的change()绑定可以有效只render一部分，不render整个page。

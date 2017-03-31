backbone 里 children 的 render 要在parent render 完实现
比如 在parent.js里
initialize() {
  const child = new Children();
}
这时child 和 parent 一起render child 就有可能找不到parent 应该有的东西。
需要
initialize() {}
等parent 建设完了，
在parent 的 render() 里
render(){
  const child = new Children();
}
这样让child have access to parent的所有东西。
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

el 指的是DOM, 每个backbone view 都有一个el refer她们。
$el 也是自动存在在View里的。相当于$(view.el)     就是加了个jQuery

var TodosView = Backbone.View.extend({
  tagName: 'ul', // required, but defaults to 'div' if not set
  className: 'container', // optional, you can assign multiple classes to
                          // this property like so: 'container homepage'
  id: 'todos' // optional
});

var todosView = new TodosView();
console.log(todosView.el); // logs <ul id="todos" class="container"></ul>         这个创建了Dom，但是没有append it to Dom

也可以把view强加给一个已经存在的element上：
el: '#footer';

var todosView = new TodosView({el: $('#footer')});
---------------------------------------------------------------------------------

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



var button2 = $('<button></button>');
view.setElement(button2);                       setElement可以把其他的html element加到这个view里，
view.setElement('<p><a><b>test</b></a></p>');
console.log(view.$('a b').html()); // outputs "test"

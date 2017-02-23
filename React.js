npm install -g create-react-app       跑react的一个环境，我在安装的时候还用了sudo npm install才装上
输入create-react-app react－app      就会创建好叫react-app 的文件夹的react程序环境，create-react-app就是个自动配置react开发环境的东西。
现在用 yarnpkg start 来启动
/------------------------------------------------------------------/

用react的file都要在最前面加上 import React from 'react';
import ReactDOM from 'react-dom';
专用于dom manipulation，一般是跟着ReactDOM.render（）用

1)
class App extends React.Component {
  render () {
    return <h1 className="">Hello Jay</h1>        因为 class 成为了一个关键字，所以jsx里的class一律都用className表示
  }         JSX就是 React.createElement('h1',null,'hello')  JSX最后都会compile成这个JS code。 h1 是用什么tag， 第二个null的位置是prop，第三个是再要加入的一个component或者是html tag的innerText
}

2)另一种建React component 的方法：        这是stateless function的说
const App = () => <h1>Hello jay</h1>

export default App     这属于ES6的export component的内容


/------------------------------------------------------------------/

class App extends React.Component {
  render () {
    return <h1 className="">Hello Jay</h1> <b>bold</b>          React 的render method只能返回一个component，返回两个就错了。
    //相当于 return React.createElement('h1',null,'hello') React.createElement('b',null,'bold')  这样的syntax明显错啊。
  }
}
返回两个的话这样：
return (
  <div>
    <h1 className="">Hello Jay</h1>
    <b>Bold Bold</b>
  </div>
)             好的习惯是加上（），不加的话<div> 必须和return一行

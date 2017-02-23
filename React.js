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
/------------------------------------------------------------------/

ReactDOM.render(
  <App />,
  document.getElementById('root')           这个就是把App这个别的文件创造的component加到页面上Id为root的 div 上
);

ReactDOM.render(
  <App txt="this is a prop" />,             这样的话就是传一个prop，把prop的名字命名为txt，有点像html的一个attribute。属于static value，并不被component本身修改。
  document.getElementById('root')                         |
);                                                        |
class App extends React.Component {                       |
  render () {                                             |
    return <h1 className="">{this.prop.txt}</h1>         <- 这样这就能接住得到这个prop的内容      所以prop是在 <App />这地方instantiate时候给出的，然后在定义里用，（感觉有点反过来了啊。。）
  }
}
App.propTypes = {                                   可以在定义App componnet的这个file里（但是是App componnet外面）定义App这个有什么prop的type。
  txt: React.propTypes.string,                      有点像规定好prop的template
  cat: React.propTypes.number.isRequired            还可以指明这个prop是不是在instatiate时是必须的
}
App.defaultProps = {                                这个是定义App的default props 没有明确指明prop就用这个。
  txt: "this is default txt"
}
/----------------------------------------------------------------------------------------------------------------------------------/


constructor () {
  super();        这个让this的context变成当前component本身，不是他继承的React.component
  this.state = {
    txt: 'this is a state text'             这就是定义了个state的object，
  }
}
用的时候就是用  this.state.txt


update(e){    e代表一个event。
  this.setState({txt: e.target.value})                      state是我们自己要维护的                setState() function 改变state，并且会调用 render() function 来重新render。
}
render () {
  return (
    <div>
      <input type="text"
        onChange={this.update.bind(this)}/>               创建update function，这样每次输入的时候
      <h1 className="">{this.state.txt}--{this.state.cat}</h1>                  setState()只会改变化的state，不变化的不动
    </div>
  )
}

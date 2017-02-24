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
props
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
    return <h1 className="">{this.props.txt}</h1>         <- 这样这就能接住得到这个prop的内容      所以prop是在 <App />这地方instantiate时候给出的，然后在定义里用，（感觉有点反过来了啊。。）
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
/----------------------------------------------------------------------------------------------------------------------------------/
一个react component render 另一个component。
render () {
    return (
      <div>
        <h1 className="">{this.state.txt}-------{this.state.cat}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>      |
    )             |
  }               |
}                 ---------------------------------------------|| 就是在一有变化（onchange）的时候就调用update这个props，是哪个呢，在instantiate的时候定义了是定义的update这个function。
                                                               \/
const Widget = (props) => <input type="text" onChange={props.update}/>    这种stateless的定义 输入的argument是props。
/----------------------------------------------------------------------------------------------------------------------------------/
props.children

class App extends React.Component {
  render() {
    return <Button>I <Heart /> React</Button>
  }                     |
}                       |
                        ---------------|   props.children就是代表了之上的 I <Heart /> React, <Button>中间这些就存到了props.children里
const Button = (props) => <button>{props.children}</button>      ***In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children.

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}
/----------------------------------------------------------------------------------------------------------------------------------/
refs

class App extends React.Component {
  constructor (){
    super();
    this.state= {
      a: ""
    }
  }
  update(e){
    this.setState({
      a: this.refs.a.value,
      b: this.refs.b.value})
  }               |
  render(){       |
    return (      |
      <div>       ||
        <input    \/
          ref="a"                                 配合着就能够决定哪对应哪里。
          type="text"
          onChange={this.update.bind(this)} />
          {this.state.a}
          <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)} />
          {this.state.b}
      </div>
    )
  }
}

/----------------------------------------------------------------------------------------------------------------------------------/

componentWillMount(){                       在component render之前，就发生一次。
  console.log('componentWillMount');
}
render
componentDidMount(){                        在render之后发生，也就一次。
  console.log('componentDidMount')
}
componentWillUnmount(){                     element要被unmount的时候发生，如果已经unmount，再unmount，也不会发生。
  console.log('componentWillUnmount')
}


class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));                   加App component到 id＝a的这里
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))             把id＝a的div里的东西都unmount掉。
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>                所以这三个element现在page上出现。
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='a'></div>

      </div>
    )
  }
}

export default Wrapper                      就会先render Wrapper这个 component

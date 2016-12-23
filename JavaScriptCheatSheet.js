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
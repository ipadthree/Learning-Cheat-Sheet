干什么用的：Take multiple JS files into single bundle, using commonJS style. ！只在client side！ 做出一个 web app， 并且还能bundle html css
webpack.config.js

webpack 自带server，once your js code bundle，changes， it changes

npm init 用来新建一个 node project (会有package.json file)然后：
mkdir client  用于存放 js 和 css assests
mkdir client/js
mkdir build   用于存放 webpack output file。
touch client/js/app.js      entry point

安装dependency：
npm i webpack babel-polyfill --save       装 webpack 和 babel-polyfill(用于target browser that don't fully support latest JS 不是modern 的browser )'

Webpack 的configuration使用过 js config的，不是json
是webpack.config.js


const config = {
  entry: {
    app: ['babel-polyfill', './client/js/app.js']   每一行的key都代表一个bundle，array里是bundle的entry point从左到右执行，所以需要全局都存在的写在左边，
                                                    使他先被打包，能被使用。
  },
  output: {
    path: './build',                              !!!!真执行的时候他告诉我要放absolute path!!!!output bundle放哪。或者 path: 'build' ？试试这个也行
    filename: '[name]-bundle.js'                  output bundle 叫什么   [name] template 会被 app（我们在上面entry里写的）替换
  },
  devServer: {},
  devtool: 'source-map',                          这行是说we want webpack to create a source-map 这样我们就能看到从reverse 从 bundle找到source code哪来的
  module: {},                                     这是specify loader的
  resolve: {
    extension: ['', '.js'],                         !!!!!!Shit 真执行的时候resolve里放什么什么报错，好像是webpack改了config的模式!!!!!!!这行是告诉webpack要找什么样子的文件，什么后缀名需要加进来。
    modulesDirectories: ['node_modules']            告诉webpack where to find modules
  },
}

module.exports = config;



要执行config好的webpack，需要在 npm 的 package.json 里的script加入script
"scripts": {
  "webpack": "webpack --watch --progress --colors"      watch code changes，then bundle rebuild   ｜ progress告诉我们什么东西正在被 bundle on command line.
},                                                      colors 让output bundle 更好看。


然后用npm 跑 webpack的脚本 npm run-script webpack
就能看到command line上webpack 打包的信息

也可以直接在 command line 里 输入 webpack 打包
？？然后在root directory 里加一个index.html，就能把bundle的信息传到html上了？？？不太懂？？？？



webpack loader 主要是个翻译器，能把ES6 或者 JSX 翻译成 plain javascript，而且主要也就是babel。
npm install babel-loader babel-core --save-dev    先安装babel 用 npm 才能在接下来中用。
                  ｜           ｜
                  ｜           ｜
            这个是loader       这个是真babel必须要有的
装完之后就会在 npm 的 package.json 的 devDependencies里出现，也就在 npm node_modules folder里出现可以用了。

所以在这我理解了 npm 和 webpack 的关系： npm是 管所有的dependency的，比如我要用 jquery，backbone，在我client app里，我必须要用npm 安装
并且在package.json里显示我有这些dependency.
而webpack就在这有了dependency的基础上 把这些dependency 加上你自己写的file，连带着什么 loader翻译器，全都打包成一个bundle，方便使用。要没有webpack，就是
散碎的各种小文件。

在babel 5 之前，只要用babel 所有的东西都是统一transpile的，现在 babel6 后，可以set stage，stage 是ECMAscript 的 proposal，要加什么feature。
这里对应 preset这个东西

npm install babel-preset－es2015 babel-preset-react --save-dev
这些loader都要 先 npm install，他们是写小程序 别人写的

module: {
  loaders: [                              loaders是一个array of all loaders we need。并且loader的需要在一个object里配置。
    {
      test: /\.js$/,                      表示我们要load什么样的file
      exclude:/(node_modules)/,           表示我们希望什么file 不用 这个loader load，这里是node_modules整个文件都不管。
      loader: 'babel',                    用babel loader
      query: {                                    这个对应babel 6 告诉这个loader,which is babel,
        presets: ['es2015', 'react']              用 presets specify 什么需要用 babel 来transpile ？？？？？还可以加个什么 .babelrc 把query这部分东西加到那里面？？？？？？
      }
    }
  ],
}




webpack-dev-server
用nodejs 的 express 的server，用socket.io 打开socket，听到有code change 就 reload
也需要 npm install webpack-dev-server --save-dev

devServer: {
  inline: true,
  contentBase: './build',     server 要从哪跑bundle
  port: 3000                  在哪个port上run显示出来
},


npm package.json 里的scripts 是用来跑 scripts的 （废话。。。）
"scripts": {
  "build": "webpack",                     输入 npm build, 就相当于跑 webpack， 就能bundle打包出来
  "start": "webpack-dev-server"           输入 npm start   就开始跑server了
},

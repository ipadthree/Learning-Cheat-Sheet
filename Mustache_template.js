在yamjs里 ， 我们有写好的方法来自动 inject mustache template

如果自己想用 mustache in backbone。

要使用html－loader 来让 .js file 里能 import template from './HeaderNav.html'

module: {
  rules: [                                        webpack 2.0 里改成了 rules
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.html$/,
      exclude: /(node_modules)/,
      use: 'html-loader',                           和use
    }
  ]
}

import Mustache from 'mustache';
之后就可以在 backbone view里render 这个。

render() {

  var rendered = Mustache.render(template, {name: "Luke"});
  this.$el.html(rendered);
  return this;
},

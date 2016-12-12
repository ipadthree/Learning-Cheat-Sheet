Workflow    (Gulp.js    Git     Browserify =>  var $ = require('jquery') 的源头)

IDE Editor选择也算workflow一部分。
  IDE 对于team中share config不方便，不好改
  Editor比较flexible 随便改 package.json 中包含所有dependency 都显示。


requireJS 是 AMD (Asynchrnonus Module Definition) 的一个implementation.

        ||
        \/

  define (['jquery'], function () {
    function myFunc() {};
    return myFunc;
  });

CommonJS 在nodeJS里常用，并跟随Browserify变多。
file里直接就是：

  var $ = require('jquery');


在yamjs中， 我们现在mix AMD和ES6， 如果对于es6 component 用 export dafault， 在amd component中要
      var MastheadUserProfile = require('components/masthead/src/masthead_user_profile').default;
    这样特别指出使用default才能找到export default 出来的。
  因为es6 可以 export default 也可以export任意东西，而amd只能export或接收一个。

repository/ORM model     !!!－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－!!!

yamjs 里有一个repository，这个repository储存所有的model的东西。



                               ---------user ---memory_store
                               |
Jay－－－－－－－－－Repository---|-------Feed ----memory_store
                               |
                               |---------thread-----memory_store
                               |
                               |------- ......

所以是Repository里可以register不同的model，相当于不同的bucket可以放不同的model。如果我想建一个新的model，我可以
register这个model在repository里，这样以后我想访问这个model的data就可以直接问repository，并且Repository会返回给我这些model with methods，（比如
static_methods.js里的static function）
所有的data就都储存在Repository里，这样我想用data就直接问Repository


并且有两种方法access model：
1）import specific model 你想用。
2）用yam.model.foobar   来从global直接调用你想用的model。
因为 namespace.ns('yam.model'); 有这一句把yam.model直接放在了global window.下

比如这是 user.js里，

define(function (require) {
  var modelHelper = require('core/lib/model_helper');
                                这就是直接global用User 这个 model
  return modelHelper.define('yam.model.User', function () {             在model_helper.js 里就能看到 modelHelper.define 就是create 一个 model，并且注册这个新model到repository里
    // DO NOT ADD ANYTHING ELSE TO THIS FILE

    this.prototype.type = 'user';
  });
});

在 repository.js 里 register function 里，register的同时会新建一个memoryStore用于储存这个model的data
并且repository里有一个_model[] array用语存贮所有的repository的model。
Repository.prototype.register 被call的时侯会调用 Repository.prototype._define，这个_define function就会加上 static method from static_methods.js （应该也有 instance_methods.js）
这些static methods就有什么 findOrCreate, create, save 这些 function 方便任何东西使用

还有一个dynamic service layer 具体什么也不太清楚：
var dslMethods = require('core/lib/data/dsl_methods');



yammerAPI/Request  !!!－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－!!!
如果想和service通信，读写用的。


yammer_request.js     里重要的有一个 _send  本质是发送一个ajax call，与service通信。
yammer_api.js     yammerApi 就是把request wrap 一下。就不用人工每次都写ajax request。
                  重要的有function apiRequest()     就是用url与service通信。
                  还有什么   getUser()   这些 function  看一看，就是 apiRequest() 写好的直接call常用的内容。

oauth2_authenticator.js     获得authentication。





Bootstrap     !!!－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－!!!


yammer_bootstrap.js    就是每次refresh page后都会调用的。    主要是一些promise 来获得需要获得的data，以及token
                       有firstTry() secondTry()   两个function， 就是试两遍。

home_main.js           bootstrap好了之后就从这个文件开始render UI component。用每一个component的run()来开始run

bootstrap_api.js        run（）有yam.ready()     和window.onload()有点像，就是看yam是不是好了，好了就call callback function。


entries.js          里就是webpack弄的asset，具体怎么工作我也还不太清楚。

index.html          就是static html用的类似于 skeleton 的 html

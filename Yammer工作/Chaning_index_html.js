yamjs的html来自bootstrap > pages > home-feed > index.html        (这里还有别的page的html file)

修改这里的html并不能被charles抓住显示，因为即使打开charles，这些html也是来自网络，并不是通过local的webpack-dev-server得到的。

~/Dev/yamjs (PM_Hoist_Toast ✔) ᐅ grunt proxy --environment=production
Running "concurrent:proxy" (concurrent) task
    Running "connect:proxy:keepalive" (connect) task
    Running "webpack-dev-server:proxy" (webpack-dev-server) task
    Waiting forever...
    Started connect web server on http://localhost:8484
 70% 24/24 build modules[HPM] Proxy created: /assets  ->  http://localhost:8484
webpack-dev-server on port 8483  －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－>>>>>>>>>>>>>>>>>>看这里！！！！！！！！！
    /assets/releases/stable/resources/yam-application-f48d4f74c727b9562a34.css -> http://localhost:8483/resources/yam-application.css
    /assets/releases/stable/resources/yam-feeds-c888d687d50d2f6adf5f.css -> http://localhost:8483/resources/yam-feeds.css
    /assets/releases/stable/yam-vendor-6f5f2ed481f851f76b57.js -> http://localhost:8483/yam-vendor.js

从上面找到webpack-dev-server的localhost port

在browser的地址栏里输入localhost: 8483    进入webpack-dev-server，找到index.html被host的url，然后到charles
加入一个新的mapping

比如把www.yammer.com/salmonellaville.com    MAP TO    localhost:8483/home-feed/en-us/index.html  就能access到local了

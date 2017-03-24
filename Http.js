Default TCP/IP Port is 80

Client 送 HTTP request message, 得到 HTTP response message
现在的HTTP是 1.1 version

HTTP request message 就是通过 url 完成的

http://www.domain.com:1234/path/to/resource?a=b&x=y
  |         |           |         |           |
  |         |           |         |          query
  |        host        port       |
  |                           resource path
  |
protocol

URL 可以告诉我们哪个host我们需要找到。但是具体做什么action 需要 HTTP verb 指明：

GET   这时 URL 包含 server 找到location 并返回的所有信息。

POST    create 新 resource     通常要带上payload to specify the new resource

PUT  更新用

DELETE    删除resource


Client 发出 request 后 server 就要 返回给 client Status Code （还有message body） ----------------------------------

1XX HTTP 1.1 新出的， 没什么用

2XX 成功processed
      200 OK

3XX Redirection     需要用户再做 additional action，通常是去 different url to fetch the resource时用

4XX Client Error        server 觉得 client 有错的时候 返回给client
                                比如 client request invalid resource 或者 make a bad request
        404 Not found    表示client 要的 resource 不再server上。
        403 Forbiden      deny access

5XX Server Error
        500

---------------------------------------------------------------------------

message header 和 body中间必须要空一行。

Header 有几种：

General header 是 request，response都能用的

general-header = Cache-Control
               | Connection
               | Date
               | Pragma
               | Trailer
               | Transfer-Encoding
               | Upgrade
               | Via
               | Warning

。。。。。。。   比较多， 先省略不记了

记得在Chrome Dev Tool 里的 Network 看的时候可以看 review source 是看真正的原包什么样

-----------实--战--使--用--------------------

主要使用 jQuery.ajax(settings) 来进行 http 请求

By passing a settings object with the beforeSend callback, we can modify the request headers.
The callback receives the jqXHR (jQuery XMLHttpRequest) object that exposes a method, called setRequestHeader() to set headers.

$.ajax({
    url: 'http://www.articles.com/latest',
    type: 'GET',
    beforeSend: function (jqXHR) {
      jqXHR.setRequestHeader('Accepts-Language', 'en-US,en');
    }
});

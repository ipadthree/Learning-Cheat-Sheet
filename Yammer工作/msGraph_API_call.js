One drive picker 用的就是 magraph api

在yammer_api.js  里有 function msGraphRequest
就是专门用来call这个的


可以在chrome dev tool 的 network 里选 XHR 然后在搜索框中filter： magraph 这样就能看到所有的这些call


Same－origin policy：
            URL	                                  Outcome	    Reason
http://store.company.com/dir2/other.html	        Success
http://store.company.com/dir/inner/another.html	  Success
https://store.company.com/secure.html	            Failure	   Different protocol
http://store.company.com:81/dir/etc.html	        Failure	   Different port
http://news.company.com/dir/other.html	          Failure	   Different host



XHR   :    XMLHttpRequest
function reqListener () {
  console.log(this.responseText);
}

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", reqListener);
xhr.open("GET", "http://www.example.org/example.txt");         先open
xhr.send();                                                    然后send 访问，返回的东西就在xhr.responseText里

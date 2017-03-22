One drive picker 用的就是 magraph api

在yammer_api.js  里有 function msGraphRequest
就是专门用来call这个的


可以在chrome dev tool 的 network 里选 XHR 然后在搜索框中filter： magraph 这样就能看到所有的这些call

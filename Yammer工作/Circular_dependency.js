Webpack在一开始的时候会把所有file里的包 import 等都打包好，每一个file需要的 dependency 都已经 import 好了。
这时即使有circular dependency， webpack也不会管，就会import好放那。

在真正run time的时侯，browser 会 go through 这些包， 比如
A depend on
如果B是正常的包，没有circular depend A，那browser就会import B 给 A 使用。
A－－－－－－－－－> B

如果有circular dependency，

A－－－－－－-－> B
/\              |
|               |
------------------


browser 在import包的时侯， 要 import B 到 A 里，但是他发现B 也 import 了 A，于是他大呼一声 ‘去你妈的’，就不 import B 到 A 里了
这样在A 里 B 就是空的了。


没有什么工具detects circular dependency， 只有你自己在browser 报各种各样奇怪的错误之后自己找到是 circular dependency的问题。

要先连接上 vpn

一开始有4个图，左面两个是 production.canaries     右面两个是 production
显示的是error rates

柱形图不同的颜色显示的是不同的version，有这么多颜色表示有些人没有刷新网页，所以在run旧代码。
可以hover over到你的deploy 的号上看自己的deploy 状态。

右下有 Yamjs Top 10 Error Message Counts
可以点击，就可以 filter出来你单独想看的东西。


最右上角有时间，可以看你想看多久之内的error情况。

kibana 和 sumologic用的是同一个数据源，kibana更详细些。

在Yamjs里加入 SVG：

将SVG image拷入 yamjs/assets/svg-sprite/images/

然后在terminal里输入
grunt svg-sprite        这个command
这个command可以将这些分散的svg合成一个大的svg sprite file。最后我们是要用这个大的svg合体file

跑完grunt svg-sprite  后

会出现这个：
Demo file /Users/jiayiliang/Dev/yamjs/assets/svg-sprite/svg-sprite-demo.html created.
把这个url粘到browser里，可以确认svg file确实是加入了。


可以run git status看被改变的file，会出现类似这个：
assets/images/svg-sprite-c20b5513d645c66e4af8702bab558a81.svg
这个是因为修改了svg file， 产生的新的svg大合体file。

然后在charles
Tools/Map Local的设置里
加入／更改mapping
Map from
host是 www.yammer.com
Path是 assets/images/svg-sprite-c20b5513d645c66e4af8702bab558a81.svg 这个新产生的大file

Map to
/Users/jiayiliang/Dev/yamjs/assets/svg-sprite/svg-sprite.svg   就是你local file里的这个大合体file
现在准备工作就做好了，就可以用charles map 到 local svgs 自己可以开发玩了




在Yamjs 里加入一个 SVG

要先 import SvgIcon from 'components/svg_icon';

然后 直接加入这个SvgIcon component
<SvgIcon
  iconName={'skype-away'}       iconName就是svg file的那个真实name，不带.svg后缀
  width='20'
  height='20'
/>

SvgIcon会给这个svg自动加一些 yk-svg-24tihieohj   之类的class， 可以去这个component里看一看
然后就好了！

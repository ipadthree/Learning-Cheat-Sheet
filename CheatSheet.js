child element 的内容大于parent的size叫overflow。
overflow: hidden; overflow 超出parent的部分就直接砍掉
          auto; 加个scroll bar

position: relative; top bottom left right确定他和他应该在的位置的相对位置。
          absolute; top bottom left right确定和他nearest ancestor的位置
          static; 不受top bottom left right的影响
          fixed;  top bottom left right 固定这个element在页面上的位置， 怎么scroll都不动

border-radis: 35px;
              50%; 控制element的角变圆

z-index: 10;   z demision上，决定屏幕中谁在谁上面。大的在上面

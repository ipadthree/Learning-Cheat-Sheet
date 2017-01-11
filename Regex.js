const a = new RegExp('ab');
const a = /ab/;                     这样就建了两个regualr expression

特殊字符还是用backslash \ escape     比如：      /ee/+/

/[0-9]/.test('ab 12');                test function 这样就是检查string ab 12   是不是符合regex的要求。
//是不是存在数字 也可以写成   /\d/

\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline

const dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));
// → true

/\d+/          数字可以重复多次
/\d*/           重复0～多次

const neighbor = /neighbou?r/             ？表示u可以出现或不出现。

const a = /\d{4}/;        表示必须数字出现4次
          /\d{2,4};       表示数字出现最少两次 最多4次。
          /\d{5, }        five or more times.


用parentheses把一些character连成一个整体。
var cartoonCrying = /boo+(hoo+)+/i;             这个i表示让regex case insensitive
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

var match = /\d+/.exec("one two 100");          exec 可以return null 如果没找到，找到了也会返回info
match.index     从哪里match开始。


const a = /[^01]/         invert, 表示不找有01的

/^\d+$/                 表示从头到尾都是数字，^表示开头 $表示结尾
/^!/                    string starts with exclamation
  

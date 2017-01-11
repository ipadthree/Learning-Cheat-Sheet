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

\b 表示这是word和非word之间的边界。一边是word另一边是除了word之外的任意。string开头结尾啊 数字啊什么都行。

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;          | 表示或者选择。
console.log(animalCount.test("15 pigs"));
// → true

［01］ 表示0或1  ［ou］ 表示o 或者 u

string有replace function,
string.replace('/\w/g', 'a')          表示把字母全换成a，g表示global，对所有的match都作用。不加就只有一次。
console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));            把lastname, firstname的格式变成 first last， $2, $1 表示第二场match的内容和第一次match的内容，最多能到$9，类似于一种variable。
// → Grace Hopper
//   John McCarthy
//   Dennis Ritchie


console.log("  word".search(/\S/));     .search会找第一个出现的位置，第一个不是space的w是2
// → 2
console.log("    ".search(/\S/));         找不到就返回－1
// → -1

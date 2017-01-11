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

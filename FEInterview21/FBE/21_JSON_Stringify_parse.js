/**
 * JSON stringify 就是吧js item变成 string
 * 1）8种 data type每一个都是 一个if判断下
 * 2）json只支持array object primitive type, 其他都是不要。
 * 3）一些奇怪的结构，Date bigint， Infinity symbol NaN都不要
 * 4） Recursion
 */

function stringify(data) {
    // your code here
    if (typeof data === 'bigint') throw new Error('cannot support bigint');
    if (typeof data === 'function') return undefined;
    if (typeof data === 'symbol') return 'null';

    if (data !== data) return 'null'; // NaN
    if (data === Infinity || data === -Infinity) return 'null';
    if (data === null) return 'null';
    if (data === undefined) return 'null';

    if (typeof data === 'string') return `"${data}"`;
    if (typeof data === 'number') return `${data}`;
    if (typeof data === 'boolean') return `${data}`;
    if (data instanceof Date) return `"${data.toJSON()}"`;

    if (Array.isArray(data)) {
        const arr = data.map((item) => stringify(item));
        return `[${arr.join(',')}]`;
    }

    if (typeof data === 'object') {
        const arr = Object.entries(data).reduce((accumulator, [key, value]) => {
            if (value === undefined) return accumulator;
            accumulator.push(`"${key}":${stringify(value)}`);
            return accumulator;
        }, []);
        return `{${arr.join(',')}}`;
    }
}

/**
 * Parse 把string变成object
 * 1） 也是一些基本情况分类讨论
 * 2）recursion
 */

function parse(str) {
    if (str === '' || str[0] === "'") throw new Error('syntax error');
    if (str === 'null') return null;
    if (str === '{}') return {};
    if (str === '[]') return [];
    if (str === 'true') return true;
    if (str === 'false') return false;
    if (+str === +str) return Number(str);
    if (str[0] === '"') return str.slice(1, -1); //得到string,去除“”
    // “<abc>”.slice(1,-1) === "abc";

    if (str[0] === '{') {
        return str
            .slice(1, -1)
            .split(',')
            .reduce((acc, item) => {
                const index = item.indexOf(':');
                const key = item.slice(0, index);
                const value = item.slice(index + 1);
                acc[parse(key)] = parse(value);
                return acc;
            }, {});
    }
    if (str[0] === '[') {
        return str
            .slice(1, -1)
            .split(',')
            .map((value) => parse(value));
    }
}

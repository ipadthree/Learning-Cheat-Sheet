var intToRoman = function (num) {
    //所有特殊情况 13 个
    const map = [
        { num: 1000, roman: 'M' },
        { num: 900, roman: 'CM' },
        { num: 500, roman: 'D' },
        { num: 400, roman: 'CD' },
        { num: 100, roman: 'C' },
        { num: 90, roman: 'XC' },
        { num: 50, roman: 'L' },
        { num: 40, roman: 'XL' },
        { num: 10, roman: 'X' },
        { num: 9, roman: 'IX' },
        { num: 5, roman: 'V' },
        { num: 4, roman: 'IV' },
        { num: 1, roman: 'I' },
    ];

    let result = '';

    while (num > 0) {
        // .find() will search the array in order of highest numeral to lowest
        // it will return then largest numeral that is lower than or equal to the target
        const numItem = map.find((item) => item.num <= num);
        result += numItem.roman;
        num -= numItem.num;
    }
    return result;
};

var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        !!s[i + 1] && map[s[i]] < map[s[i + 1]] ? (result -= map[s[i]]) : (result += map[s[i]]);
    }
    return result;
};

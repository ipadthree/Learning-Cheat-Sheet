/**
 * highlightKeywords(
  'Hello FrontEnd Lovers', 
  ['Front', 'End', 'JavaScript']
)
// 'Hello <em>FrontEnd</em> Lovers'

highlightKeywords(
  'Hello FrontEnd Lovers', 
  ['Front', 'FrontEnd', 'JavaScript']
)
// 'Hello <em>FrontEnd</em> Lovers'
*/

function highlightKeywords(html, keywords) {
    // html|css|js
    const regExp = new RegExp(keywords.join('|'), 'gi');
    return html
        .split(' ')
        .map((word) => {
            if (keywords.includes(word)) {
                return `<em>${word}</em>`;
            }
            // 找word里面有咩有substring，用regex
            return word
                .replace(regExp, (subWord) => `<em>${subWord}</em>`)
                .replace('</em><em>', ''); //去除紧相连的
        })
        .join(' ');
}

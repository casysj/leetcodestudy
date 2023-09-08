/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
/**
*	시간복잡도 : O(n) 이라고 보는데 왜냐하면 두 인자값의 횟수만큼 루프를 돌리고 있기때문
*	공간복잡도 : O(n) 새 객체를 만드는것도 그렇고 새로만드는 스트링도 각 인자의 크기만큼에 비례하게 공간을 사용한다.
*/

var evaluate = function (s, knowledge) {
    let knowledgeObj = {};
    knowledge.forEach((el) => {
        knowledgeObj[el[0]] = el[1];
    });

    let arr = [];
    let i = 0;
    while (i < s.length) {
        if (s[i] === '(') {
            const j = s.indexOf(')', i);
            arr.push(knowledgeObj[s.substring(i + 1, j)] ?? '?');
            i = j + 1;
        } else {
            arr.push(s[i]);
            i++;
        }
    }

    return arr.join('');
};

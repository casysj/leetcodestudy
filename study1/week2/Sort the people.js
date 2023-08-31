/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
/**
 * 시간복잡도 : O(n) 주어진 배열의 길이만큼만 연산을 반복하므로
 * 공간복잡도 : O(n) 두 배열을 합쳐서 사용할 배열을 정의하므로
 */
var sortPeople = function(names, heights) {
    let arr = [];
    let returnArr = [];
    names.forEach(function(el, idx){
        arr.push({name:el, height:heights[idx]});
    });

    arr.sort(function(a,b){
        return  b.height - a.height;
    });

    arr.forEach(function(el){
        returnArr.push(el.name);
    });

    return returnArr;
};
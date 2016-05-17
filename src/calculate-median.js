function calculate_median(arr) {
    //请勿改动函数名
    var newTraverse = traverse(arr);
    var newJudgment = judgment(newTraverse);
    return newJudgment;
}

function traverse(arr) {//遍历数组挑出偶数位数的数字
    var temp = [];

    for (var i = 1; i < arr.length; i=i + 2) {
        temp.push(arr[i]);
    }
    return temp;
}

function judgment(temp) {//判断长度是否是偶数的，再分别进行处理
    var result;

    if (temp.length % 2 == 0) {
        result = (temp[temp.length / 2] + temp[(temp.length / 2) - 1])/2;
    }
    else {
        result = temp[parseInt(temp.length / 2)];
    }

    return result;
}
module.exports = calculate_median;

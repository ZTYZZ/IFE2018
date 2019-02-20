//任务1

var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];

function numComp(a, b) {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
}

//正向的排列数组
arr.sort(numComp);

console.log(arr);
console.log(arr.reverse());

// 任务2
arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];

console.log(arr.sort());
console.log(arr.reverse());

// 任务3
// 将上面的二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出.
arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];

function compare(a, b) {
    if (a[1] < b[1]) {
        return 1;
    } else if (a[1] > b[1]) {
        return -1;
    } else {
        return 0;
    }
}

console.log(arr.sort(compare));

// 任务4
// 将上面数组分别按元素对象的value值从小到大进行排序后输出
arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

function objectComp(a, b) {
    if (a.value < b.value) {
        return -1;
    } else if (a.value > b.value) {
        return 1;
    } else {
        return 0;
    }
}
console.log(arr.sort(objectComp));

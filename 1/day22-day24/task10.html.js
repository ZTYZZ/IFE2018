var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    },
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    },
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
};
var arr = [];
var item = [];
for(var i in scoreObject) {
    item.push(i);
    if (typeof scoreObject[i] === "object") {
        for(var j in scoreObject[i]) {
            item.push(scoreObject[i][j]);
        }
    }
    arr.push(item);
    item = [];
}

console.log(arr);

//test
var arr = ["hello","my","name","is","Peppa Pig"];
for(var item of arr) {
    console.log(item);
}

var book = {
    name: "hello",
    id: "2",
    author: "ztyzz",
    time: "2018.2.30"

};
for(var key of Object.keys(book)) {
    console.log(book[key]);
}
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

var menuObject={},newNode = {};
for(var i in menuArr) {
    newNode.name = menuArr[i][2];
    if(menuArr[i][2] === -1) {
        menuObject[menuArr[i][0]] = newNode;
    }else {
        menuObject[menuArr[i][2]].submenu = newNode;
    }
}
console.log(menuObject);
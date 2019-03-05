
//生成按钮
function setCheckBox(element, arr) {
    var checkBox = `<input type="checkbox" checkbox-type = "all">全选`;
    var subCheck = "";
    for (let value of arr) {

        subCheck += `<input type="checkbox" value = "${value.text}">${value.text}`;

    }
    element.innerHTML = checkBox + subCheck;
    console.log(element);
    element.addEventListener("change", function (event) {
        if (event.target.getAttribute("type") === "checkbox") {
            if (event.target.getAttribute("checkbox-type") === "all") {
                //做全选的逻辑
                //当点击全选按钮时，全部元素要进行选择
                var child = element.querySelectorAll("input");
                console.log(child[0].checked);
                if (child[0].checked) {
                    for (let i = 1; i < child.length; i++) {
                        child[i].checked = true;
                    }
                } else {
                    child[0].checked = true;
                }
            } else {
                //做子选项的逻辑
                child = element.querySelectorAll("input");
                var count = 0;

                for (let i = 1; i < child.length; i++) {
                    if (child[i].checked) {
                        count++;
                    }
                }
                console.log(count);

                if (count === 0) {
                    event.target.checked = true;
                } else if (count === 3) {
                    child[0].checked = true;

                } else {
                    child[0].checked = false;
                }
            }
        }
        var data = getData();
        setTable(data);
    });

}

//生成一组checkBox
setCheckBox(document.querySelector("#region-radio-wrapper"), [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华南"
}, {
    value: 3,
    text: "华北"
}]);

//再生成一组checkBox
setCheckBox(document.querySelector("#product-radio-wrapper"), [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
}, {
    value: 3,
    text: "智能音箱"
}]);

// document.querySelector("#region-select").addEventListener("change", function () {
//     var data = getData();
//     console.log(data);
//     setTable(data);
// }, false);
//
// document.querySelector("#product-select").addEventListener("change", function () {
//     var data = getData();
//     console.log(data);
//     setTable(data);
// }, false);
// 筛选数据
function getData() {

    var newData = [];
    var regions = [];
    var products = [];
    var regionRadios = document.querySelectorAll("#region-radio-wrapper input");
    var productRadios = document.querySelectorAll("#product-radio-wrapper input");
    //遍历子按钮，将所选的存入到相应的数组中。
    for (let i = 1; i < regionRadios.length; i++) {
        if (regionRadios[i].checked) {
            regions.push(regionRadios[i].value);
        }
    }
    for (let i = 1; i < productRadios.length; i++) {
        if (productRadios[i].checked) {
            products.push(productRadios[i].value);
        }
    }
    //遍历原始数据
    for (let i of sourceData) {
        var index1 = products.indexOf(i.product);
        var index2 = regions.indexOf(i.region);
        if (index1 !== -1 && index2 !== -1) {
            newData.push(i);
        }

    }


    return newData;

}

//获取选择按钮的数量。
function numberOfRadio(element) {
    var count = 0;
    for (let i = 1; i < element.length; i++) {
        if (element[i].checked) {
            count++;
        }
    }
    return count;
}

//渲染表格
function setTable(data) {
    var title = "";
    var regions = document.querySelectorAll("#region-radio-wrapper input");
    var products = document.querySelectorAll("#product-radio-wrapper input");
    var count1 = numberOfRadio(products);
    var count2 = numberOfRadio(regions);
    //当商品选择了一个，地区选择了多个的时候，商品作为第一列，地区作为第二列，并且把商品这一列的单元格做一个合并，只保留一个商品名称
    if (count1 === 1 && count2 > 1) {
        title += `<tr>
                            <th>商品</th>
                            <th>地区</th>
                            <th>1月</th>
                            <th>2月</th>
                            <th>3月</th>
                            <th>4月</th>
                            <th>5月</th>
                            <th>6月</th>
                            <th>7月</th>
                            <th>8月</th>
                            <th>9月</th>
                            <th>10月</th>
                            <th>11月</th>
                            <th>12月</th>
                       </tr>`;
        for (let item of data) {
            if (item === data[0]) {
                title += `<tr><td rowspan="${data.length}">${data[0].product}</td><td>${item.region}</td>`;
                for (let price of item.sale) {
                    title += `<td>${price}</td>`;
                }
            } else {
                title += `<tr><td>${item.region}</td>`;
                for (let price of item.sale) {
                    title += `<td>${price}</td>`
                }
            }
            title += `</tr>`;

        }

    }
    //当地区选择了一个，商品选择了多个的时候，地区作为第一列，商品作为第二列，并且把地区这一列的单元格做一个合并，只保留一个地区名称
    else if (count2 === 1 && count1 > 1) {
        title += `<tr>
                            <th>地区</th>
                            <th>商品</th>
                            <th>1月</th>
                            <th>2月</th>
                            <th>3月</th>
                            <th>4月</th>
                            <th>5月</th>
                            <th>6月</th>
                            <th>7月</th>
                            <th>8月</th>
                            <th>9月</th>
                            <th>10月</th>
                            <th>11月</th>
                            <th>12月</th>
                       </tr>`;
        for (let item of data) {
            if (item === data[0]) {
                title += `<tr><td rowspan="${data.length}">${data[0].region}</td><td>${item.product}</td>`;
                for (let price of item.sale) {
                    title += `<td>${price}</td>`;
                }
            } else {
                title += `<tr><td>${item.product}</td>`;
                for (let price of item.sale) {
                    title += `<td>${price}</td>`
                }
            }
            title += `</tr>`;

        }
    }
    // 当商品和地区都选择了多于一个的情况下，以商品为第一列，地区为第二列，商品列对同样的商品单元格进行合并
    else if(count1 > 1 && count2 > 1) {
        title += `<tr>
                            <th>商品</th>
                            <th>地区</th>
                            <th>1月</th>
                            <th>2月</th>
                            <th>3月</th>
                            <th>4月</th>
                            <th>5月</th>
                            <th>6月</th>
                            <th>7月</th>
                            <th>8月</th>
                            <th>9月</th>
                            <th>10月</th>
                            <th>11月</th>
                            <th>12月</th>
                       </tr>`;
        var productLength={};
        var productRecord = {};
        var count = 0;
        var length = 0;

        for(let i of data ) {
            console.log(productRecord[i.product]);
            if(typeof productRecord[i.product]=== "undefined" ) {
                length = 1;

                productRecord[i.product] = count++;
            }else {
                count++;
                length++;
                productLength[i.product] = length;
            }
        }
        console.log(data);
        console.log(productRecord);
        console.log(productLength);

        for (let i = 0;i<data.length;i++) {
            if(data[i] === data[productRecord[data[i].product]]) {
                title += `<tr><td rowspan="${productLength[data[i].product]}">${data[i].product}</td><td>${data[i].region}</td>`;
                for(let j of data[i].sale) {
                    title += `<td>${j}</td>`;
                }

            }else {
                title += `<td>${data[i].region}</td>`;
                for(let j of data[i].sale) {
                    title += `<td>${j}</td>`;
                }
            }
            title+="</tr>";
        }

    }
    //当商品和地区都只选择一个的情况下，以商品为第一列，地区为第二列

    else {
        title += `<tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>`
        for(let item of data) {
            title +=`<tr><td>${item.product}</td><td>${item.region}</td>`;
            for(let price of item.sale) {
                title +=`<td>${price}</td>`;
            }
            title += "</tr>";
        }
    }
    document.querySelector("table").innerHTML = title;

}


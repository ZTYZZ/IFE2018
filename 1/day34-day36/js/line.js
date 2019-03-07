// 画一个折线图
function line(data) {
   var sizeW = 500,
       sizeH = 300,
       x = 500,
       y = 300,
       gap = 30,
       radius = 5,
       lineColor = setColor(),
       pointColor = setColor(),
       maxItem = 0;
       //找到数据点的最大值
    for(var item of data) {
        if(item>maxItem) {
            maxItem = item;
        }
    }

    // 根据Max和你用来绘制折线图图像区域的高度，进行一个数据和像素的折算比例
    var scale = y / maxItem;
    //绘制横轴和纵轴

    var canvas = document.getElementById("canvas");
    canvas.setAttribute("height",sizeH);
    canvas.setAttribute("width",sizeW);
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,y);
    ctx.lineTo(x,y);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //点的绘制
    var penX = 0;
    var penY = 0;
    for(let i in data) {
        penX += gap;
        penY = y - data[i];

        //进行数据点的绘制
        ctx.beginPath();
        ctx.arc(penX,penY,radius,0,Math.PI * 2,true);
        ctx.fillStyle = pointColor;
        ctx.fill();
        //如果不是第一个点
        if(i!=="0") {
            //连接与上一个数据点的连线
            ctx.beginPath();
            ctx.moveTo(penX,penY);
            ctx.lineTo(lastPenX,lastPenY);
            ctx.strokeStyle = lineColor;
            ctx.stroke();
        }

        var lastPenX = penX;
        var lastPenY = penY;
    }


}

function drawpoint (r) {

}
line([120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]);
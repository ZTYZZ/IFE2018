var Bar = {
    data:[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270],
    drawBar: function (tag,attrs) {
        var el = document.createElementNS("http://www.w3.org/2000/svg",tag);
        for(let k in attrs) {
        el.setAttribute(k,attrs[k]);
        }
        return el;
    },

    //随机更改颜色
    setColor: function() {
        var r = Math.round(Math.random()*250);
        var g = Math.round(Math.random()*250);
        var b = Math.round(Math.random()*250);
        var randomColor = `rgb(${r},${g},${b})`;
        return randomColor;
    }


    drawBar: function(data) {
        //由于只绘制一个图表，所以将其数据直接取出，未做提取工作。

        var drawWidth = 500, drawHeight = 300;
        var width = 20,gap = 10;
        var axisColor = "black";
        var max = 0;
        var svg = document.getElementById("svg");
        for(let i = 0;i<data.length;i++ ) {
            if(data[i]>max) {
                max = data[i];
            }

        }

        //进行比例折算
        var scale = max/drawHeight;

        //进行横轴和纵轴的绘制
        var x = makeSVG("line",{
            x1:0,
            y1:drawHeight,
            x2:drawWidth,
            y2:drawHeight,
            stroke:axisColor,
            "stroke-width":1
        });
        var y =makeSVG("line",{
            x1:0,
            y1:0,
            x2:0,
            y2:drawHeight,
            stroke: axisColor,
            "stroke-width": 1
        });
        svg.appendChild(x);
        svg.appendChild(y);

        //进行状图的绘制
        var penX=0,
            penY=0;
        for(let i in data) {
            if(i === "0") {
                penX = 0;
            }
            else {
                penX+=gap+width;
            }
            penY = drawHeight - data[i];
            console.log(setColor());
            var bar = makeSVG("rect",{
                x:penX,
                y:penY,
                width: width,
                height: data[i],
                fill: setColor()
            });
            svg.appendChild(bar);
        }
    }
    };

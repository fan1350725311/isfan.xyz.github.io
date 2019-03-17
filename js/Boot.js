/**
 * Created by Yilan丶 on 2018/12/14.
 */

//canvas画布居中
    /*var viewWidth=window.innerWidth;
     var div=document.getElementById("div");
     div.style.marginLeft=viewWidth/4+"px";*/
$(document).ready(function() {
    var music = document.querySelector("audio");                  //audio对象
    var img = document.querySelector("section>figure>img");       //音乐图标
    music.play();//默认播放音乐
//音乐图标点击事件
    img.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            img.src = "images/音乐图标-play.png";
        }
        else {
            music.pause();
            img.src = "images/音乐图标-pause.png";
        }

    });
});

    var canvas = document.getElementById("cas");
    var mycontext = canvas.getContext("2d");
    //画布宽高度
    var width =375;
    var height = 520;
    var R = 180;          //外轨迹半径
    var r = 100;          //内轨迹半径
    var R_circle = 40;    //外轨迹圆半径
    var r_circle = 30;    //内轨迹圆半径
    var R_circle_OnAngel = 270;          //旋转角度
    var R_circle_UnderAngel = 90;       //旋转角度
    var r_circle_LeftAngel = 180;        //旋转角度
    var r_circle_RightAngel = 0;       //旋转角度
    function move() {
        mycontext.clearRect(0, 0, 375, 667);
        //外轨迹
        mycontext.beginPath();
        mycontext.arc(width / 2, height / 2, R, 0, Math.PI * 2);
        mycontext.strokeStyle = "#dd6411";
        mycontext.stroke();
        mycontext.closePath();
        //内轨迹
        mycontext.beginPath();
        mycontext.arc(width / 2, height / 2, r, 0, Math.PI * 2);
        mycontext.strokeStyle = "#e27613";
        mycontext.stroke();
        mycontext.closePath();

      /* //中心圆阴影
        mycontext.beginPath();
        mycontext.arc(width / 2, height / 2, r - 50 + 10, 0, Math.PI * 2);
        mycontext.globalAlpha = 0.1;
        mycontext.fillStyle = "#a87f4d";
        mycontext.fill();
        mycontext.closePath();
        //中心圆
        mycontext.beginPath();
        mycontext.globalAlpha = 1;
        mycontext.arc(width / 2, height / 2, r - 50, 0, Math.PI * 2);
        mycontext.fillStyle = "#EBBD4D";
        mycontext.fill();
        mycontext.closePath();
        //中心圆字体
        mycontext.beginPath();
        mycontext.font = "20px 微软雅黑";
        mycontext.lineWidth = "3";
        mycontext.fillStyle = "#fff";
        mycontext.textAlign = "center";
        mycontext.fillText("点击点餐", width / 2, height / 2 + 10);
        mycontext.closePath();*/
        //外轨迹圆-上
        mycontext.beginPath();
        mycontext.globalAlpha = 1;
        mycontext.arc(width / 2 + R * Math.cos(R_circle_OnAngel * Math.PI / 180), height / 2 + R * Math.sin(R_circle_OnAngel * Math.PI / 180), R_circle, 0, Math.PI * 2);
        mycontext.fillStyle = "#f33fa0";
        mycontext.fill();
        mycontext.closePath();
        //外轨迹圆-上字体
        mycontext.beginPath();
        mycontext.font = "16px 微软雅黑";
        mycontext.lineWidth = "3";
        mycontext.fillStyle = "#fff";
        mycontext.textAlign = "center";
        mycontext.fillText("欢迎光临", width / 2 + R * Math.cos(R_circle_OnAngel * Math.PI / 180), height / 2 + R * Math.sin(R_circle_OnAngel * Math.PI / 180) + 5);//纵坐标+5--字体垂直居中
        mycontext.closePath();
        //外轨迹圆-下
        mycontext.beginPath();
        mycontext.globalAlpha = 1;
        mycontext.arc(width / 2 + R * Math.cos(R_circle_UnderAngel * Math.PI / 180), height / 2 + R * Math.sin(R_circle_UnderAngel * Math.PI / 180), R_circle, 0, Math.PI * 2);
        mycontext.fillStyle = "#3BB5C4";
        mycontext.fill();
        mycontext.closePath();
        //外轨迹圆-下字体
        mycontext.beginPath();
        mycontext.font = "16px 微软雅黑";
        mycontext.lineWidth = "3";
        mycontext.fillStyle = "#fff";
        mycontext.textAlign = "center";
        mycontext.fillText("微信点餐", width / 2 + R * Math.cos(R_circle_UnderAngel * Math.PI / 180), height / 2 + R * Math.sin(R_circle_UnderAngel * Math.PI / 180) + 5);//纵坐标+5--字体垂直居中
        mycontext.closePath();
        //内轨迹圆-左
        mycontext.beginPath();
        mycontext.globalAlpha = 1;
        mycontext.arc(width / 2 + r * Math.cos(r_circle_LeftAngel * Math.PI / 180), height / 2 + r * Math.sin(r_circle_LeftAngel * Math.PI / 180), r_circle, 0, Math.PI * 2);
        mycontext.fillStyle = "#A5C639";
        mycontext.fill();
        mycontext.closePath();
        //内轨迹圆-左字体
        mycontext.beginPath();
        mycontext.font = "11px 微软雅黑";
        mycontext.lineWidth = "3";
        mycontext.fillStyle = "#fff";
        mycontext.textAlign = "center";
        mycontext.fillText("小程序点餐", width / 2 + r * Math.cos(r_circle_LeftAngel * Math.PI / 180), height / 2 + r * Math.sin(r_circle_LeftAngel * Math.PI / 180) + 5);//纵坐标+5--字体垂直居中
        mycontext.closePath();
        //内轨迹圆-右
        mycontext.beginPath();
        mycontext.globalAlpha = 1;
        mycontext.arc(width / 2 + r * Math.cos((r_circle_RightAngel + 1) * Math.PI / 180), height / 2 + r * Math.sin((r_circle_RightAngel + 1) * Math.PI / 180), r_circle, 0, Math.PI * 2);
        mycontext.fillStyle = "#f354ff";
        mycontext.fill();
        mycontext.closePath();
        //内轨迹圆-右字体
        mycontext.beginPath();
        mycontext.font = "11px 微软雅黑";
        mycontext.lineWidth = "3";
        mycontext.fillStyle = "#fff";
        mycontext.textAlign = "center";
        mycontext.fillText("fan式餐厅", width / 2 + r * Math.cos(r_circle_RightAngel * Math.PI / 180), height / 2 + r * Math.sin(r_circle_RightAngel * Math.PI / 180) + 5);//纵坐标+5--字体垂直居中
        mycontext.closePath();
        R_circle_OnAngel += 3;
        R_circle_UnderAngel += 3;
        r_circle_LeftAngel += 8;
        r_circle_RightAngel += 8;
    }
    window.setInterval("move()", 100);


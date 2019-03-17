/**
 * Created by Yilan丶 on 2018/12/12.
 */

    var n;   //arr数组的name属性
    //获取地址栏的值,并转换其url编码
    var url=decodeURI(location.href);
    //判断地址栏信息是否有传值
    if(url.indexOf("=")>= 0) {
        //有的话加载文档---显示对应商品
        $(document).ready(function () {
            var img = document.querySelector('#big>figure>img');                    //图片
            var name = document.querySelector('#big>section>article>aside');        //菜名
            var price = document.querySelector('#big>section>article>mark');        //价格
            var addShopping = document.querySelector("#big>section>div");           //加入购物车
            var num = document.querySelector("#big>footer>figure>b");               //购物车数量
            var selectOK = document.querySelector("#big>footer>div");               //选好了
            var footerPrice=document.querySelector("#big>footer>aside");            //底部共计价格
            var p;                                                                  //存储所显示的商品索引


            //加入购物车按钮点击事件
            addShopping.addEventListener('click', function () {
                //显示购物车数量
                num.style.visibility = "visible";
                num.style.animation = "go 1s";
                //显示底部共计价格并输出
                footerPrice.style.visibility="visible";
                footerPrice.innerHTML=arr[p].price+".00";
            });

            //选好了点击事件
            selectOK.addEventListener("click", function () {
                $(location).attr('href', 'shopping_trolley.html');
            });

            //获取=号后边的字符串
            var index = url.lastIndexOf("=");
            var str = url.substring(index + 1, url.length);
            //展示图片
            img.src = "images/" + str + ".jpg";
            for (var i = 0; i < arr.length; i++) {
                //遍历所有函数--寻找是否存在对应的str
                if (arr[i].name == str) {
                    //存储所显示的商品索引
                    p=i;
                    //如果存在---储存在变量n
                    n = arr[i].name;
                    name.innerHTML = arr[i].name;
                    price.innerHTML = arr[i].price;
                }
            }
            if (n == null) {
                alert("天啊，出错误了！");
            }

        });
    }
    //没有值的话提示用户
    else {
        alert("非法进入");
        $(location).attr('href','index.html');
    }


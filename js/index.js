/**
 * Created by Yilan丶 on 2018/12/16.
 */
$(document).ready(function(){
    //所在标签下所有li对象
    var kind=document.querySelectorAll("#big>section>nav>ul>li");
    //所在标签下所有div对象---所有商品数
    var div=document.querySelectorAll("#big>section>article>div");
    //所在标签下所有图片对象
    var img=document.querySelectorAll("#big>section>article>div>figure>img");
    //所在标签下所有菜名对象
    var name=document.querySelectorAll("#big>section>article>div>section>h4");
    //所在标签下所有价格对象
    var price=document.querySelectorAll("#big>section>article>div>section>mark");
    //所在标签下所有+号对象
    var plus=document.querySelectorAll(".plus");
    //所在标签下所有-号对象
    var minus=document.querySelectorAll(".minus");
    //所在标签下所有单价--商品总数量
    var count=document.querySelectorAll("#big>section>article>div>section>b");
    //购物车数量
    var num=document.querySelector("#big>footer>figure>b");

    //加载菜单--种类：日常套餐
    //所有div---none
    for(var i=0;i<div.length;i++)
    {
        div[i].style.display = "none";
    }
    //从索引a开始
    var a=0;
    //商品件数
    var l=12;
        //加载对应商品
        for (var i = a; i < a+l; i++) {
            div[i].style.display="block";
            img[i].src = arr[i].src;
            price[i].innerHTML = arr[i].price;
            name[i].innerHTML = arr[i].name;
        }
    //默认第一个被选中
    kind[0].style.backgroundColor="#F0EFF5";
    //遍历所有种类对象并增加click事件
    for (var i = 0; i < kind.length; i++) {
        kind[i].index=i;
        var item = kind[i];
        item.addEventListener('click', function () {
            //让所有li元素改为默认色
            for(var j=0;j<kind.length;j++)
            {
                kind[j].style.backgroundColor="#fff";
            }
            //在让点击的li元素改为对应颜色
            this.style.backgroundColor="#F0EFF5";

            //种类：日常套餐
            if(this.index==0) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=0;
                //商品件数
                var l=12;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i-a].src = arr[i].src;
                    price[i-a].innerHTML = arr[i].price;
                    name[i-a].innerHTML = arr[i].name;
                }
            }

            //种类：热销
            else if(this.index==1) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=12;
                //商品件数
                var l=2;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i].src = arr[i].src;
                    price[i].innerHTML = arr[i].price;
                    name[i].innerHTML = arr[i].name;
                }
            }

            //种类：西式快餐
            else if(this.index==2) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=16;
                //商品件数
                var l=7;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i].src = arr[i].src;
                    price[i].innerHTML = arr[i].price;
                    name[i].innerHTML = arr[i].name;
                }
            }


            //种类：今日优惠
            else if(this.index==3) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=23;
                //商品件数
                var l=3;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i].src = arr[i].src;
                    price[i].innerHTML = arr[i].price;
                    name[i].innerHTML = arr[i].name;
                }
            }

            //种类：小吃
            else if(this.index==4) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=13;
                //商品件数
                var l=3;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i].src = arr[i].src;
                    price[i].innerHTML = arr[i].price;
                    name[i].innerHTML = arr[i].name;
                }
            }

            //种类：盖浇饭
            else if(this.index==5) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=35;
                //商品件数
                var l=1;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i].src = arr[i].src;
                    price[i].innerHTML = arr[i].price;
                    name[i].innerHTML = arr[i].name;
                }
            }

            //种类：饮品
            else if(this.index==6) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=26;
                //商品件数
                var l=4;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i].src = arr[i].src;
                    price[i].innerHTML = arr[i].price;
                    name[i].innerHTML = arr[i].name;
                }
            }

            //种类：酱料
            else if(this.index==7) {
                //所有div---none
                for(var i=0;i<div.length;i++)
                {
                    div[i].style.display = "none";
                }
                //从索引a开始
                var a=30;
                //商品件数
                var l=5;
                //加载对应商品
                for (var i = a; i < a+l; i++) {
                    div[i].style.display="block";
                    img[i].src = arr[i].src;
                    price[i].innerHTML = arr[i].price;
                    name[i].innerHTML = arr[i].name;
                }
            }

        });
    }

    //遍历所有+号对象并增加click事件
    var n=0;        //用来储存当前购物车数量
    for (var i = 0; i < plus.length; i++) {
        plus[i].index=i;
        plus[i].addEventListener('click', function () {
            //购物车数量+1
            n++;
            //赋值给num对象
            num.innerHTML=n;
            //购物车数量显示并执行go动画
            num.style.visibility="visible";
            num.style.animation="go 1s";

            //单件商品-号与数量显示---先显示在获取text,隐藏会获取不到
            count[this.index].style.visibility="visible";
            minus[this.index].style.visibility="visible";
            //单件数量+1
            var c=parseInt(count[this.index].innerText);
            count[this.index].innerHTML=c+1;

        });
    }

    //遍历所有-号对象并增加click事件
    for (var i = 0; i < minus.length; i++) {
        minus[i].index=i;
        minus[i].addEventListener('click', function () {
            //大于1---购物车数量-1
            if(n>1)
            {   //购物车数量-1
                n--;
                //赋值给num对象
                num.innerHTML=n;
            }
            //否则--购物车数量图标隐藏
            else{
                n=0;
                num.style.visibility="hidden";
                //购物车数量图标动画为空;
                num.style.animation="";


            }

            //获取当前单价商品数量
            var c=parseInt(count[this.index].innerText);
            //大于1---商品数量-1
            if(c>1)
            {
                count[this.index].innerHTML=c-1;
            }
            //否则---商品数量为0，并隐藏-号与商品数量
            else
            {   count[this.index].innerHTML=0;
                count[this.index].style.visibility="hidden";
                minus[this.index].style.visibility="hidden";
            }


        });
    }

});
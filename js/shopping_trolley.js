/**
 * Created by Yilan丶 on 2018/12/13.
 */
$(document).ready(function() {
    //对应标签下所有article对象
    var All_article=document.querySelectorAll("#big>section>article");
    //对应标签下所有垃圾箱图标对象
    var All_aside = document.querySelectorAll('#big>section>article>footer>aside');
    //对应标签下所有✔对象
    var IsSelect=document.querySelectorAll("#big>section>article>aside");
    //一个bool变量，判断菜品是否被选中（✔）----默认为false
    var bool=false;
    //对应标签下所有图片对象
    var img=document.querySelectorAll("#big>section>article>figure>img");
    //对应标签下所有菜名对象
    var name=document.querySelectorAll("#big>section>article>div>h4");
    //对应标签下所有价格对象
    var price=document.querySelectorAll("#big>section>article>div>mark");
    //对应标签下所有单品的数量
    var num=document.querySelectorAll("#big>section>article>footer>div>b");
    //对应标签下所有-号对象
    var minus=document.querySelectorAll(".minus");
    //对应标签下所有+号对象
    var plus=document.querySelectorAll(".plus");
    //单个商品总价格
    var count=document.querySelectorAll("#big>section>article>div>mark");
    //总价
    var SumPrice=document.querySelector(".SumPrice");
    //优惠价
    var DisCountPrice=document.querySelector(".DisCountPrice");
    //加载购物车清单---8个--对应8个article
    for(var i=0;i<8;i++){
        img[i].src=arr[i].src;
        price[i].innerHTML=arr[i].price;
        name[i].innerHTML=arr[i].name;
    }
    //遍历所有垃圾箱图标对象并增加click事件
    for (var i = 0; i < All_aside.length; i++) {
        //获取点击元素的下标
        All_aside[i].index=i;
        //为每个aside对象添加事件
        All_aside[i].addEventListener('click', function () {
            //取消选中对应商品
            IsSelect[this.index].bool=false;
            //所点击的对象对应的article块消失
            All_article[this.index].style.display="none";
            //计算购物车总价
            ShoppingCountPrice();
        });
    }

    //遍历所有✔对象并增加click事件
    for (var i = 0; i < IsSelect.length; i++) {
        //获取点击元素的下标
        IsSelect[i].index=i;
        //为每个✔对象添加事件
        IsSelect[i].addEventListener('click', function () {
            if(this.bool==true)
            {
                this.style.backgroundColor="#cccccc";
                //false--表示✔未被选中
                this.bool=false;
                //计算购物车总价
                ShoppingCountPrice();
            }
            else{
                this.style.backgroundColor="#ffc107";
                //false--表示✔已选中
                this.bool=true;
                //计算购物车总价
                ShoppingCountPrice();
            }
        });
    }
    //遍历所有-对象并增加click事件
    for(var i=0;i<minus.length;i++){
        minus[i].index=i;
        minus[i].addEventListener("click",function () {
            var n=parseInt(num[this.index].innerText);
            //限定最小商品数量为1
            if(n<=1)
            {
                num[this.index].innerHTML=1;
                //计算购物车总价
                ShoppingCountPrice();
            }
            else {
                //数量-1
                num[this.index].innerHTML = n - 1;
                //计算出单件商品总价
                var n=parseInt(num[this.index].innerText);
                var p=parseInt(price[this.index].innerText);
                //p/(n-1)商品单价  n数量----单件商品总价
                count[this.index].innerHTML=p/ (n +1) * n;
                //计算购物车总价
                ShoppingCountPrice();
            }
        });
    }
    //遍历所有+对象并增加click事件
    for(var i=0;i<plus.length;i++){
        plus[i].index=i;
        plus[i].addEventListener("click",function () {
            //转换int类型进行计算
            var n=parseInt(num[this.index].innerText);
            num[this.index].innerHTML=n+1;
            n=parseInt(num[this.index].innerText);
            var p=parseInt(price[this.index].innerText);
            //p/(n-1)商品单价  n数量----单件商品总价
            count[this.index].innerHTML=p/ (n -1) * n;
            //计算购物车总价
            ShoppingCountPrice();
        })
    }
    //计算当前购物车总价
    var countPrice=0;
    function ShoppingCountPrice(){
        for (var i = 0; i < IsSelect.length; i++) {
           // alert("下标"+i+"为"+IsSelect[i].bool);
            //判断菜品是否被选中，选中就计算总价
            if(IsSelect[i].bool==true){
                //单价商品总和
                var c=parseInt(count[i].innerText);
                //所有选中商品总和相加
                countPrice+=c;
            }
            //赋值给总价对象
            SumPrice.innerHTML=countPrice;
            if(SumPrice.innerText>=28) {
                //总价大于等于优惠价28---给优惠28元
                DisCountPrice.innerHTML = countPrice - 28;
            }
            else{
                //总价小于28，按照实际价格
                DisCountPrice.innerHTML = countPrice;
            }
        }
        //计算完成就归0
        countPrice=0;

    }
});
$(document).ready(function(){
    //跳转到引导页
    $("#Jump_Boot").click(function(){

        $(location).attr('href','Boot.html');

    });

    //跳转到主页
   $("#Jump_index").click(function(){

      $(location).attr('href','index.html');

   });
    //跳转到购物车页
    $("#Jump_shopping_trolley").click(function(){

        $(location).attr('href','shopping_trolley.html');

    });

    //跳转到menu页
    //获取主页下执行标签下的所有h4对象
    var All = document.querySelectorAll('#big>section>article>div>section>h4');
    //遍历其所有对象并增加click事件
    for (var i = 0; i < All.length; i++) {
        var item = All[i];
        item.addEventListener('click', function () {
            //获取点击的h4文本
            var str=this.innerText;
            //跳转menu页，并把str传到地址栏上去
            $(location).attr('href','menu.html?name='+str);
        });
    }

    //跳转到history页
    $("#Jump_history_order").click(function(){
        alert("支付成功！！！");
        $(location).attr('href','history_order.html');

    });
});

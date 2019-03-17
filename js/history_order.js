/**
 * Created by Yilan丶 on 2018/12/16.
 */
$(document).ready(function() {
    //对应标签下所有图片对象
    var img=document.querySelectorAll("#big>section>article>figure>img");
    //对应标签下所有菜名对象
    var name=document.querySelectorAll("#big>section>article>div>h4");
    //对应标签下所有价格对象
    var price=document.querySelectorAll("#big>section>article>div>mark");

    var n=18;   //商品编号初值
    for(var i=n;i<n+3;i++){
        img[i-n].src=arr[i].src;
        price[i-n].innerHTML=arr[i].price;
        name[i-n].innerHTML=arr[i].name;
    }

});
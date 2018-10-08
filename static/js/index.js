{
    //banner部分
    $(".pgct li").each(function (index,ele) {
        $(this).mouseover(function () {
            $(this).addClass("active").siblings(".active")
                .removeClass("active")
            $(".imgbox li").removeClass("active")
                .eq(index)
                .addClass("active")
        })
    })
}
  let imgs=document.querySelectorAll(".imgbox li");
  let pagers=document.querySelectorAll(".pgct li");
  let banner=document.querySelector(".picture");
  
  let n=0; 
  let t=setInterval(move,3000);
  function move(){
    n++;
    if(n===imgs.length){
      n=0;
    }
    if(n<0){
      n=imgs.length-1;
    }
    for(let i=0;i<imgs.length;i++){
      imgs[i].classList.remove("active");
      pagers[i].classList.remove("active");
    }
    imgs[n].classList.add("active");
    pagers[n].classList.add("active");
  }

  let imgbox=document.querySelectorAll(".fengqiang .fqhead p")
  let con=document.querySelectorAll(".fengqiang .fqconbody .con")
  let m=0; 
  let r=setInterval(move1,3000);


  function move1(){
    m++;
    if(m===imgbox.length){
      m=0;
    }
    if(m<0){
      m=imgbox.length-1;
    }
    for(let i=0;i<imgbox.length;i++){
      imgbox[i].className=("q2");
      con[i].classList.remove("active");
    }
    imgbox[m].className=("q1");
    con[m].classList.add("active");
  }
  $(".fengqiang .fqhead p").mousemove(function () {
        let index=$(this).index(".fengqiang .fqhead p")
        for(let i=0;i<imgbox.length;i++){
          imgbox[i].className=("q2");
          con[i].classList.remove("active");
        }
        imgbox[index].className=("q1");
        con[index].classList.add("active");
  })

$("#totop").click(function () {
    $("html,body").animate({scrollTop:0},500)
})
$("#db").click(function () {
    $("html,body").animate({scrollTop:0},500)
})




 window.onscroll=function(){
    let ot=$(this).scrollTop();
     console.log(ot);
     if(ot>700){
       $(".leftBar").attr("style","display:block");
       $(".topBar").attr("style","height:50px");
    }
    else{
       $(".leftBar").attr("style","display:none");
       $(".topBar").attr("style","height:0px");
    }
 }

// let leftBar=document.querySelector(".leftBar");
// let topBar=document.querySelector(".topBar");
// window.onscroll=function(){
//         let st=document.documentElement.scrollTop;

//         console.log(st);
//         if(st>700){
//             leftBar.style.display="block";
//             topBar.style.display="block";
//         }else{
//             leftBar.style.display="none";
//              topBar.style.display="none";
//         }

// }




$(".tips").click(function () {

    let index=$(this).index(".tips");
    console.log(index);
    let ot=$(".tiaolou").eq(index).offset().top-50;
    console.log(ot);
    $("html,body").animate({scrollTop:ot},200)
})

$(window).scroll(function () {
    let st= $(window).scrollTop();
    $(".tiaolou").each(function (index,ele) {
        if(st>$(this).offset().top-150){
            $(".tips").removeClass("active")
                .eq(index).addClass("active");
        }
    })
})


 //右侧导航栏部分
{
    $(".biaoqian li").each(function (index,ele) {


        $(ele).mouseover(function () {


            $(this).addClass("righthide").siblings(".righthide")
                .removeClass("righthide");
            $(".righthide div")
                .addClass("hide1").siblings(".hide1")
                .removeClass("hide1")
        })
    })
}

{
      $(".biaoqian2 li").each(function (index,ele) {


          $(ele).mouseover(function () {


              $(this).addClass("righthide").siblings(".righthide")
                  .removeClass("righthide");
              $(".righthide div")
                  .addClass("hide3").siblings(".hide3")
                  .removeClass("hide3")
          })
      })
  }

    $(window).resize(function () {
        let Width=window.innerWidth
        console.log(Width);
        if(Width<1300){
            $(".content").css("width","982px")
            $(".content .fs2left").css("display","none")

            $(".fsmid .imgbox1").each(function (index,obj) {
                if($(this).hasClass("removes")){
                $(this).css("display","none")
                }
            })

            $(".fs3").css("width","982px")
            $(".fs3 li").each(function (index,obj) {
                if($(this).hasClass("removes")){
                $(this).css("display","none")
                }
            })

            $(".tmcs").css("width","982px")
            $(".csright").css({"width":"747px","overflow":"hidden"})
            $(".houve").each(function (index,obj) {
                if($(this).hasClass("removes")){
                $(this).css("display","none")
                }
            })

            $(".like").css({"width":"982px"})
            $(".likecon a").css({"width":"185px","height":"280px","margin-bottom":"11px"})
            $(".likeitem").css("width","185px")
            $(".likeitem .likeimg").css("margin","0")
        }
        else{
            $(".content").css("width","1230px")
            $(".content .fs2left").css("display","block")

            $(".fsmid .imgbox1").each(function (index,obj) {
                if($(this).hasClass("removes")){
                $(this).css("display","block")
                }
            })

            $(".fs3").css("width","1230px")
            $(".fs3 li").each(function (index,obj) {
                if($(this).hasClass("removes")){
                $(this).css("display","block")
                }
            })

            $(".tmcs").css("width","1230px")
            $(".csright").css({"width":"995px","overflow":"hidden"})
            $(".houve").each(function (index,obj) {
                if($(this).hasClass("removes")){
                $(this).css("display","block")
                }
            })

            $(".like").css({"width":"1230px"})
            $(".likecon a").css({"width":"236px","height":"326px","margin-bottom":"11px"})
            $(".likeitem").css("width","236px")
            $(".likeitem .likeimg").css("margin","30px 25px 5px 25px")
        }
    })


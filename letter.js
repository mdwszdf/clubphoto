let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "http://cv-senior-engineer.gitee.io/pleasantly-surprised/images/qlx.mp3");
     x.setAttribute("autoplay","autoplay");

let i =0
let str = '本次纳新咱优软社团又多了17位猛将（再加16位哈哈 乾杯 []~（￣▽￣）~*），<各位凭借自己能力 自身优点 对程序设计的热爱，<数学类的热爱等<成功进入优软社团这个小家庭，<咱部门主打学习，对程序设计知识的指导例如C语言C++等等，<以及其它学习上的问题例如高数，<线代 概率论之类有不懂的一起讨论 ，<大胆一点 不要觉得尴尬 ，<相互讨论研究才是解决问题的最优途径。<---你们的社长 冯江涛'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190); 
}, 5500); 
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})

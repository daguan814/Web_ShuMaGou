var div =document.querySelector('#tanchu')
const ul =document.createElement("ul")
div.appendChild(ul)
var btn=document.querySelector('button')
btn.onclick=function (){
    var li =document.createElement('li')
    var num =0
    const phone =3000
    const num1=5000
    const num2=2000
    var shouji=document.querySelector('#phone')
    if (shouji.checked==true){
        num+=3000
    }
    var diannao=document.querySelector('#diannao')
    if (diannao.checked==true){
        num+=5000
    }
    var dianshi=document.querySelector('#dianshi')
    if (dianshi.checked==true){
        num+=2000
    }
    var trade =document.querySelector('#trade').value
    num =num*trade
    li.innerText='总计是'+num
    ul.appendChild(li)
}
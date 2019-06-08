function a1()
{
location.replace("http://www.google.com");	
}
// Функция обработки нажатия кнопки 2	
function a2()
{
var a=document.getElementsByTagName("h1");
a[0].innerHTML = "World Hello!";
a[0].style.color="green";
a[0].style.fontSize="150"+"px";
var b=document.getElementsByClassName("Buttons");
b[0].style.background="aqua";
}
// Функция обработки нажатия кнопки 3	
function a3()
{
var s=document.getElementsByTagName("h1");
s[0].remove();
var b=document.getElementsByClassName("Buttons");
b[0].remove();

var head = document.createElement('div');
head.style.width="99%";
head.style.height="100px";
head.style.background="aqua";
head.style.margin="10px";
head.style.border="1px solid black";
head.innerHTML = "Header";

document.body.appendChild(head);

var base=document.createElement('div');
base.style.width="99%";
base.style.height="80%";
base.style.background="grey";
base.style.border="1px solid black";
base.style.margin="10px";
base.style.display="flex";
base.style.flexDirection="row";
base.style.justifyContent="space-between";

document.body.appendChild(base);


var left=document.createElement('div');
left.style.width="20%";
left.style.height="480px";
left.style.background="grey";
left.style.border="1px solid black";
left.style.margin="10px";
left.innerHTML = "Nav";
base.appendChild(left);

var cent=document.createElement('div');
cent.style.width="60%";
cent.style.height="480px";
cent.style.background="grey";
cent.style.border="1px solid black";
cent.style.margin="10px";
cent.innerHTML = "Content";
base.appendChild(cent);

var right=document.createElement('div');
right.style.width="20%";
right.style.height="480px";
right.style.background="grey";
right.style.border="1px solid black";
right.style.margin="10px";
right.innerHTML = "for something else";
base.appendChild(right);

var footer=document.createElement('div');
footer.style.cssText = "color: blue; border: 1px solid black; height: 100px; background-color: brown;"; 
footer.innerHTML = "Footer";
document.body.appendChild(footer);
}
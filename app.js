let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let hoe = document.getElementsByClassName("hoe");
let ho = document.getElementsByClassName("ho");
let xy = document.getElementsByClassName("xy");
let yz = document.getElementsByClassName("yz");
let h = document.getElementsByClassName("h");
let navbar = document.getElementsByClassName("navbar")
let f = document.getElementsByClassName("f")

btn.onclick = function(){
    document.body.classList.toggle("dark-theme");


    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "imgg/sun.png";
        btnText.innerHTML = "Light";
    }
    else{
        btnIcon.src = "imgg/moon.png";
        btnText.innerHTML = "Dark";
    }
}
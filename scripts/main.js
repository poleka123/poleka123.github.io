const myImage = document.querySelector("img");
myImage.onclick = () =>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox.png"){
        myImage.setAttribute("src", "images/river_change.png");
    }else{
        myImage.setAttribute("src", "images/firefox.png")
    }
}
let myButtion = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){
    const myName = prompt("Please enter your name.");
    if(!myName){
        //防止名字为空
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
// 初始化代码
if(!localStorage.getItem("name")){
    //数据不存在
    setUserName();
}else{
    //数据存在
    const storeName = localStorage.getItem("name");
    myHeading.textContent=`Mozilla is cool,${storeName}`;
}
myButtion.onclick = function(){
    setUserName();
};
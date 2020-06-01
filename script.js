document.querySelector("#toggle_btn").onclick = function() {
    if (window.getComputedStyle(document.querySelector('#nav')).display=='none'){
    document.querySelector("#nav").style.display="block";
    document.querySelector("body").style.backgroundColor="rgba(38, 12, 12, 0.30)";
    } 
    else 
    {
    document.querySelector("#nav").style.display="none";
    document.querySelector("body").style.backgroundColor="#ffffff";
    }
}

myImage = document.querySelector('#toggle_btn');
var actionImage = function () {
    let getSrc = myImage.getAttribute('src')
    if (getSrc === 'img/icon-hamburger.svg') {
        myImage.setAttribute('src', 'img/icon-close.svg')
    } else if (getSrc === 'img/icon-close.svg') {
        myImage.setAttribute('src', 'img/icon-hamburger.svg')
    }
};
myImage.addEventListener('click', actionImage);
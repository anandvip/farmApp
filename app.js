let i = 1,
imgs = [
    "img/img00000.png","img/img00001.png","img/img00002.png","img/img00003.png","img/img00004.png","img/img00005.png","img/img00006.png","img/img00007.png","img/img00008.png","img/img00009.png","img/img00010.png","img/img00011.png","img/img00012.png","img/img00013.png","img/img00014.png", "img/img00015.png","img/img00016.png","img/img00017.png","img/img00018.png","img/img00019.png","img/img00020.png","img/img00021.png","img/img00022.png","img/img00023.png","img/img00024.png"
],
time = 1000;

let imageSlider = () => {
    document.slide.src = imgs[i];
    i <= imgs.length - 1 ? (i++ ?i === imgs.length:i === 0): i = 0;
}

let imageSliderP = () => {
    document.slide.src = imgs[i];
    i <= imgs.length - 1 ? (i-- ?i === imgs.length - 1:i = imgs.length-1): i = 0;
}

//next
const imslderN = document.getElementById("sldrBtn");
imslderN.addEventListener("click",imageSlider);
//previous
const imslderP = document.getElementById("sldrBtnP");
imslderP.addEventListener('click',imageSliderP);

//Keyboard Arrow Keys for presentation
document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37:
            imageSliderP();
          break;
       case 39:
            imageSlider();
          break;
       case 38: 
            imageSliderP();
          break;
       case 40: 
            imageSlider();
          break;   
    }
};
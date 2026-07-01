// ===========================
// A11パーキング
// script.js
// ===========================

// スライドショー用画像
const images = [
    "parking1.jpg",
    "parking2.jpg"
];

let current = 0;

// 画像を取得
const slide = document.getElementById("slide");

// スライド切替
function changeImage(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    slide.style.opacity = 0;

    setTimeout(function(){

        slide.src = images[current];

        slide.style.opacity = 1;

    },300);

}

// 5秒ごとに切り替え
setInterval(changeImage,5000);
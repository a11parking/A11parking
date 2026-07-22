/* ===========================
   A11パーキング
   script.js
=========================== */

const images = [
    "parking1.jpg",
    "parking2.jpg"
];

let current = 0;

const slide = document.getElementById("slide");

if (slide) {

    setInterval(() => {

        current++;

        if (current >= images.length) {
            current = 0;
        }

        slide.style.opacity = "0";

        setTimeout(() => {

            slide.src = images[current];

            slide.style.opacity = "1";

        }, 300);

    }, 3000);

}

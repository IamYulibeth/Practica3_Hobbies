// Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Show Video //

let second_playButton = document.querySelector(".play-movie2");
let second_video = document.querySelector(".video-container2");
let sec_myvideo = document.querySelector("#myvideo2");
let second_closebtn = document.querySelector(".close-video2");

second_playButton.onclick = () => {
    second_video.classList.add("show-video2");
    //Play al dar click
    sec_myvideo.play();
};

second_closebtn.onclick = () => {
    second_video.classList.remove("show-video2");
    //Pausar el video
    sec_myvideo.pause();
};


let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
    video.classList.add("show-video");
    //Play al dar click
    myvideo.play();
};

closebtn.onclick = () => {
    video.classList.remove("show-video");
    //Pausar el video
    myvideo.pause();
};


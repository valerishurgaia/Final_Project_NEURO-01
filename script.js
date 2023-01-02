const navToggle = document.getElementById("nav_toggle");
const navbar = document.querySelector(".navbar");
const pageOne = document.querySelector("#pageOne");
const slide = document.querySelector("#slide");
const header = document.querySelector(".header");
const arrowBtn = document.querySelector("#arr-btn");
const menu = document.querySelector(".menu");
const mode = document.querySelector(".mode");
const toggle = document.querySelector('#toggle');
const headerNavToggle = document.getElementById('header_nav_toggle');
const mobileArrBtn = document.querySelector('.notMobile')

navbar.onclick = function () {
    navToggle.classList.toggle('active');
    navbar.classList.toggle('active');
    pageOne.classList.toggle('active');
    slide.classList.toggle('active');
    header.classList.toggle('active');
}


menu.addEventListener('click', function() {
    navToggle.classList.remove('active');
    navbar.classList.remove('active');
    pageOne.classList.remove('active');
    slide.classList.remove('active');
    header.classList.remove('active');
})

headerNavToggle.onclick = function () {
    headerNavToggle.classList.toggle('active');
    pageOne.classList.toggle('active');
    slide.classList.toggle('active');
    header.classList.toggle('active');
}

menu.addEventListener('click', function() {
    headerNavToggle.classList.remove('active');
    pageOne.classList.remove('active');
    slide.classList.remove('active');
    header.classList.remove('active');
})


mode.addEventListener('click', function(){
    document.body.classList.toggle('light-mode');
    mode.classList.toggle('light');
})

arrowBtn.addEventListener('click' , function() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
})

mobileArrBtn.addEventListener('click' , function() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
})

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        document.body.style.overflowY = "scroll";
    } else {
        document.body.style.overflowY = "hidden";
    }
});


document.getElementById("item_website").addEventListener('mouseover', () => {
    document.getElementById("website_img").style.opacity = "1";
    
});
document.getElementById("item_website").addEventListener('mouseout', () => {
    document.getElementById("website_img").style.opacity = "0";
    
});

document.getElementById("item_ui/ux").addEventListener('mouseover', () => {
    document.getElementById("ui/ux_img").style.opacity = "1";
    
});
document.getElementById("item_ui/ux").addEventListener('mouseout', () => {
    document.getElementById("ui/ux_img").style.opacity = "0";
    
});

document.getElementById("item_social_media").addEventListener('mouseover', () => {
    document.getElementById("social_media_img").style.opacity = "1";
    
});
document.getElementById("item_social_media").addEventListener('mouseout', () => {
    document.getElementById("social_media_img").style.opacity = "0";
    
});

document.getElementById("item_brand_strategy").addEventListener('mouseover', () => {
    document.getElementById("brand_strategy_img").style.opacity = "1";
    
});
document.getElementById("item_brand_strategy").addEventListener('mouseout', () => {
    document.getElementById("brand_strategy_img").style.opacity = "0";
    
});

document.getElementById("item_motion").addEventListener('mouseover', () => {
    document.getElementById("motion_img").style.opacity = "1";
    
});
document.getElementById("item_motion").addEventListener('mouseout', () => {
    document.getElementById("motion_img").style.opacity = "0";
    
});


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
const pageFour = document.getElementById('company');

const onClick = (element) => {
    element.classList.toggle('active');
}

// For big screen version navbar animation...
navbar.addEventListener('click', () =>  {
    onClick(navToggle);
    onClick(navbar);
    onClick(pageOne);
    onClick(slide);
    onClick(header);
});

// For close navbar when menu items are clicked...
const menuItems = Array.from(document.getElementsByClassName("menu_item"));
menuItems.forEach(items => {
    items.addEventListener('click', () => {
        const menuOnClick = (elem) => {
            elem.classList.remove('active');
        }
        menuOnClick(navToggle)
        menuOnClick(navbar)
        menuOnClick(pageOne)
        menuOnClick(slide)
        menuOnClick(header)
        menuOnClick(headerNavToggle)
    })
})


// For mobile navbar animation...
headerNavToggle.addEventListener('click', () => {
    onClick(headerNavToggle);
    onClick(pageOne);
    onClick(slide);
    onClick(header);
})


// For light mode...
mode.addEventListener('click', function(){
    document.body.classList.toggle('light-mode');
    mode.classList.toggle('light');
})


// For scroll by arrow from first page...
const scrollByArrow = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
}
mobileArrBtn.addEventListener('click', scrollByArrow);
arrowBtn.addEventListener('click', scrollByArrow);


// For hide scroll when move to first page...
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        document.body.style.overflowY = "scroll";
    } else {
        document.body.style.overflowY = "hidden";
    }
});


// For animate page four (when you hover on list items, it will show image aside)..
pageFour.addEventListener('mouseover', (e) => {
    const websiteImg = document.getElementById("website_img");
    const uiUxImg = document.getElementById("ui/ux_img");
    const socialMediaImg = document.getElementById("social_media_img")
    const motionImg = document.getElementById("motion_img");
    const brandStrategyImg = document.getElementById("brand_strategy_img")

    const visibleOnHover = (elementId, image) => {
        if (e.target.parentElement.id === elementId) {
            image.style.opacity = "1"
        } else {
            image.style.opacity = "0"
        }
    }
    visibleOnHover('item_website', websiteImg)
    visibleOnHover('item_ui/ux', uiUxImg)
    visibleOnHover('item_social_media', socialMediaImg)
    visibleOnHover('item_motion', motionImg)
    visibleOnHover('item_brand_strategy', brandStrategyImg)
})
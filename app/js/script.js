const services = [
    {
        id: 1,
        heading: "Discover innovative ways to decorate",
        paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    }, {
        id: 2,
        heading: "We are available all across the globe",
        paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    }, {
        id: 3,
        heading: "Manufactured with the best materials",
        paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
];

const deskImg = document.querySelector("#desk-img");
const mobileImg = document.querySelector("#mobile-img");
const heading = document.querySelector("#heading");
const paragraph = document.querySelector("#paragraph");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentItem = 0;

const showService = (current) => {
    let service = services[current];
    heading.textContent = service.heading;
    paragraph.textContent = service.paragraph;
    deskImg.srcset = `images/desktop-image-hero-${service.id}.jpg`;
    mobileImg.src = `images/mobile-image-hero-${service.id}.jpg`;
};

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = services.length - 1;
    }
    showService(currentItem);
});

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > services.length - 1) {
        currentItem = 0;
    }
    showService(currentItem);
});

// For Mobile Menu
const nav = document.querySelector("nav");
const btnHamburger = document.querySelector("#btnHamburger");
const menuIcon = document.querySelector("#menu-icon");

btnHamburger.addEventListener("click", (e) => {
    e.preventDefault();
    if (nav.classList.contains("active")) {
        menuIcon.src = "images/icon-hamburger.svg";
        nav.classList.remove("active");
    } else {
        menuIcon.src = "images/icon-close.svg";
        nav.classList.add("active");
    }
});
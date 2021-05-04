import { nextItem, previousItem, currentItem, isEnabledCards } from "./carousel.js";
import { nextItemCam, previousItemCam, currentItemCam, isEnabledCams } from "./carousel-cams.js";
import { switchTestimonials, testimonialsRangeValue } from "./carousel-testimonials.js";
import { donateRadioButton, donateInput } from "./donate.js";
import { mapImage, calculateCoords, moveAt, stopDrag, headerElem, footerElem, 
    buttonPlus, buttonMinus, mapWrapper } from "./map.js";

const TITLE = document.title;
const SCREEN_WIDTH = window.screen.width;
let more = false;

//temporarly
//alert("Прошу вас при проверке адаптива при растягивании окна между брейкпойнтами 320 640 и 1000 обновлять страницу. Я прикрутила изменения в DOM через JS но не знаю как привязать обращение к JS при растягивании окна");// \
// Чтобы посмотреть страницы других животных кроме панды используйте, пожалуйста следующие пути: \
// https://rolling-scopes-school.github.io/little-plumelet-JSFE2021Q1/online-zoo/pages/zoos-page-alligator/zoos-alligator.html \
// https://rolling-scopes-school.github.io/little-plumelet-JSFE2021Q1/online-zoo/pages/zoos-page-eagle/zoos-eagle.html \
// https://rolling-scopes-school.github.io/little-plumelet-JSFE2021Q1/online-zoo/pages/zoos-page-gorilla/zoos-gorilla.html")

function zoos_page_1000_mix_dom_elements () {
    const main = document.querySelector(".main");
     const donate = document.querySelector(".donate");
     const description = document.querySelector(".description");
     main.appendChild(description);
     main.appendChild(donate);
}

function zoos_page_320_mix_dom_elements () {
    const camAside = document.querySelector(".cam-aside");
     const mainContent = document.querySelector(".main-content");
     const description = document.querySelector(".description");
     const moreCam = document.querySelector(".more-cam");

     const withAside = document.createElement("div");
     withAside.classList.add("with-aside");

     withAside.appendChild(camAside);
     withAside.appendChild(moreCam);
     mainContent.appendChild(withAside);
     mainContent.appendChild(description);
     
}

function click_buttons_zoos_pages() {
    //carousel for zoos page for animals' cards
    document.querySelector(".button-arrow_right").addEventListener("click", function() {
        if (isEnabledCams) {
            nextItemCam(currentItemCam);
        }
    })

    document.querySelector(".button-arrow_left").addEventListener("click", function() {
        if (isEnabledCams) {
            previousItemCam(currentItem);
        }
    })
}

function change_cam_zoos_page() {
    let camsList = document.querySelectorAll(".more-cam-list-item");
    let camContainer = document.querySelector(".more-cam-container");
    let mainCam = document.querySelector(".wrapper_main-cam-iframe");
    camContainer.onclick = function(e) {
        let tmpElement = mainCam.firstElementChild.cloneNode(true);
        tmpElement.classList.add(".more-cam-list-item");
        e.target.appendChild(tmpElement);
        mainCam.removeChild(mainCam.firstElementChild);
        mainCam.appendChild(e.target.firstElementChild);
    }
}

function toggleParagraphs() {
     if (more)
        this.style.display = "none";
    else
        this.style.display = "block";
 }

function more_less_button() {
        document.querySelector(".button__read-less_squared").addEventListener('click', function (e) {
            e.preventDefault();
            let paragraphs = document.querySelectorAll(".description__details-paragraph");
            let subtitles = document.querySelectorAll(".description__details-subtitle");
            if (more) {
                console.log(e.target)
                e.target.innerHTML = "Read More";
                e.target.style.bottom = "-23.5%";
                for (let i = 0; i < paragraphs.length; i++) {
                    if (i > 3) {
                        toggleParagraphs.apply(paragraphs[i]);
                    }
                }
                for (let i = 0; i < subtitles.length; i++) {
                    if (i > 3) {
                        toggleParagraphs.apply(subtitles[i]);
                    }
                }
                more = false;
            }
            else {
                e.target.innerHTML = "Read Less";
                e.target.style.bottom = "-7%";
                for (let i = 0; i < paragraphs.length; i++) {
                    if (i > 3) {
                        toggleParagraphs.apply(paragraphs[i]);
                    }
                }
                for (let i = 0; i < subtitles.length; i++) {
                    if (i > 3) {
                        toggleParagraphs.apply(subtitles[i]);
                    }
                }
                more = true;
            }
        });
}

//function check_window () {
    switch (TITLE) {
        case "Online-Zoo. Landing":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            }); 
            document.querySelectorAll(".navigation__item_about").forEach(element => {
                element.classList.add("active");
            });


            //carousel for landing page for animals' cards
            document.querySelector(".button-arrow_right").addEventListener("click", function() {
                if (isEnabledCards) {
                    nextItem(currentItem);
                }
            });

            document.querySelector(".button-arrow_left").addEventListener("click", function() {
                if (isEnabledCards) {
                    previousItem(currentItem);
                }
            });
            break;

        case "Online-Zoo. Map":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            }); 
            document.querySelectorAll(".navigation__item_map").forEach(element => {
                element.classList.add("active");
            });
            break;

        case "Online-Zoo. Panda":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            });
            document.querySelectorAll(".navigation__item_zoos").forEach(element => {
                element.classList.add("active");
            });
            document.querySelectorAll(".cam-aside__icon").forEach(element => {
                element.classList.remove("active");
            });
            document.getElementById("icon-panda").classList.add("active");
            if (SCREEN_WIDTH >= 640 && SCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCREEN_WIDTH >= 320 && SCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
            click_buttons_zoos_pages();
            change_cam_zoos_page();
            more_less_button();
            break;

        case "Online-Zoo. Eagle":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            }); 
            document.querySelectorAll(".navigation__item_zoos").forEach(element => {
                element.classList.add("active");
            });
            document.querySelectorAll(".cam-aside__icon").forEach(element => {
                element.classList.remove("active");
            });
            document.getElementById("icon-eagle").classList.add("active");
            if (SCREEN_WIDTH >= 640 && SCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCREEN_WIDTH >= 320 && SCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
            click_buttons_zoos_pages();
            change_cam_zoos_page();
            more_less_button();
            break;
        case "Online-Zoo. Alligator":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            }); 
            document.querySelectorAll(".navigation__item_zoos").forEach(element => {
                element.classList.add("active");
            });
            document.querySelectorAll(".cam-aside__icon").forEach(element => {
                element.classList.remove("active");
            });
            document.getElementById("icon-alligator").classList.add("active");
            if (SCREEN_WIDTH >= 640 && SCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCREEN_WIDTH >= 320 && SCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
            click_buttons_zoos_pages();
            change_cam_zoos_page();
            more_less_button();
            break;
        case "Online-Zoo. Gorilla":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            }); 
            document.querySelectorAll(".navigation__item_zoos").forEach(element => {
                element.classList.add("active");
            });
            document.querySelectorAll(".cam-aside__icon").forEach(element => {
                element.classList.remove("active");
            });
            document.getElementById("icon-gorilla").classList.add("active");
            if (SCREEN_WIDTH >= 640 && SCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCREEN_WIDTH >= 320 && SCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
            click_buttons_zoos_pages();
            change_cam_zoos_page();
            more_less_button();
            break;
    }
//}

//setInterval(check_window, 2000)

//carousel for landing page for testimonials
let cards = document.querySelectorAll(".testimonials-card");
let intervalTestimonialsID = setInterval(switchTestimonials, 10000);
if (cards.length > 0) {
    cards.forEach((card) => card.addEventListener("click", () => {
        clearInterval(intervalTestimonialsID);   
        setTimeout(function () {
            intervalTestimonialsID = setInterval(switchTestimonials, 10000); 
        }, 30000);
    }));

    let testimonialsRange = document.querySelector('.testimonials-slider');
    if (testimonialsRange) {
        testimonialsRange.addEventListener("input", (event) => {
            clearInterval(intervalTestimonialsID);   
            testimonialsRangeValue();
            intervalTestimonialsID = setInterval(switchTestimonials, 10000);

        });
    }
}

donateRadioButton();
donateInput();


//map
mapImage.addEventListener("mousedown", (e) => {
    calculateCoords(e, mapImage);
    moveAt(e);

    document.addEventListener("mousemove", moveAt);
    document.addEventListener("mouseup", stopDrag);
});

headerElem.addEventListener("mouseenter", stopDrag);
footerElem.addEventListener("mouseenter", stopDrag);

mapImage.width = mapImage.offsetWidth;
buttonMinus.addEventListener("click", () => {
    console.log(mapImage.width);
    
    if (mapImage.width >= mapWrapper.offsetWidth - 510) {
        mapImage.style.width = `${mapImage.width / 1.25}px`;
        mapImage.width = parseFloat(mapImage.style.width);
        if (mapImage.width < 1200) mapWrapper.style.paddingTop = "10rem"; 
    }
})
buttonPlus.addEventListener("click", () => {
    if (mapImage.width <= mapWrapper.offsetWidth * 4) {
        mapImage.style.width = `${mapImage.width * 1.25}px`;
        mapImage.width = parseFloat(mapImage.style.width);
        mapWrapper.style.paddingTop = "0"; 
    }
})
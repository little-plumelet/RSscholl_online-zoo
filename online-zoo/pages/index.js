const TITLE = document.title;
const SCCREEN_WIDTH = window.screen.width;

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

    switch (TITLE) {
        case "Online-Zoo. Landing":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            }); 
            document.querySelectorAll(".navigation__item_about").forEach(element => {
                element.classList.add("active");
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
            if (SCCREEN_WIDTH >= 640 && SCCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCCREEN_WIDTH >= 320 && SCCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
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
            if (SCCREEN_WIDTH >= 640 && SCCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCCREEN_WIDTH >= 320 && SCCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
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
            if (SCCREEN_WIDTH >= 640 && SCCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCCREEN_WIDTH >= 320 && SCCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
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
            if (SCCREEN_WIDTH >= 640 && SCCREEN_WIDTH <=1599) {
                zoos_page_1000_mix_dom_elements();
            }
            if (SCCREEN_WIDTH >= 320 && SCCREEN_WIDTH <=639) {
                zoos_page_320_mix_dom_elements();
            }
            break;
    }
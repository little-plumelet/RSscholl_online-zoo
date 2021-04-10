const TITLE = document.title;

//temporarly
// alert("К сожалению я не успела выполнить ссылки-иконки для переход по страницам животных на странице zoos. \
// Чтобы посмотреть страницы других животных кроме панды используйте, пожалуйста следующие пути: \
// https://rolling-scopes-school.github.io/little-plumelet-JSFE2021Q1/online-zoo/pages/zoos-page-alligator/zoos-alligator.html \
// https://rolling-scopes-school.github.io/little-plumelet-JSFE2021Q1/online-zoo/pages/zoos-page-eagle/zoos-eagle.html \
// https://rolling-scopes-school.github.io/little-plumelet-JSFE2021Q1/online-zoo/pages/zoos-page-gorilla/zoos-gorilla.html")

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
        document.getElementsByTagName('svg')[2].classList.add("cam-aside__icon_active");
        break;

    case "Online-Zoo. Eagle":
        document.querySelectorAll(".navigation__item").forEach(element => {
            element.classList.remove("active");
        }); 
        document.querySelectorAll(".navigation__item_zoos").forEach(element => {
            element.classList.add("active");
        });
        break;
    case "Online-Zoo. Alligator":
        document.querySelectorAll(".navigation__item").forEach(element => {
            element.classList.remove("active");
        }); 
        document.querySelectorAll(".navigation__item_zoos").forEach(element => {
            element.classList.add("active");
        });
        break;
    case "Online-Zoo. Gorilla":
        document.querySelectorAll(".navigation__item").forEach(element => {
            element.classList.remove("active");
        }); 
        document.querySelectorAll(".navigation__item_zoos").forEach(element => {
            element.classList.add("active");
        });
        break;
}
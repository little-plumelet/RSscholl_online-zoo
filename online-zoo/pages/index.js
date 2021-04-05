const TITLE = document.title;

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
        break;

        case "Online-Zoo. Eagle":
            document.querySelectorAll(".navigation__item").forEach(element => {
                element.classList.remove("active");
            }); 
            document.querySelectorAll(".navigation__item_zoos").forEach(element => {
                element.classList.add("active");
            });
            break;
}
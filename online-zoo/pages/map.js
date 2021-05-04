export const mapImage = document.querySelector(".map");
export const headerElem = document.querySelector(".header");
export const footerElem = document.querySelector(".footer");
export const buttonPlus = document.querySelector(".map-buttons__plus");
export const buttonMinus = document.querySelector(".map-buttons__minus");
export const mapWrapper = document.querySelector(".map-wrapper");

let topIndent = 0;
let leftIndent = 0;

export const calculateCoords = (e, elem) => {
    console.log(elem);
    let box = elem.getBoundingClientRect();
    topIndent = e.pageY - box.top + pageYOffset;
    leftIndent = e.pageX - box.left + pageXOffset;
}

export const moveAt = (e) => {
    mapImage.style.left = e.pageX - leftIndent + "px";

    if (e.pageX > mapWrapper.offsetWidth) stopDrag();
    else if (e.pageX < 0) stopDrag();

    mapImage.style.top =  e.pageY - topIndent + "px";
    console.log(e.pageX - leftIndent, e.pageY - topIndent);
    console.log(e.pageX, e.pageY);
}

export const stopDrag = () => {
    document.removeEventListener("mousemove", moveAt);
    mapImage.removeEventListener("mouseup", stopDrag);
}

mapImage.ondragstart = function() {
    return false;
}
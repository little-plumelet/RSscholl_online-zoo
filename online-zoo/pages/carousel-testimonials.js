let loop = true;
let currentOffset = 0;
let cards = document.querySelectorAll(".testimonials-card");
let testimonialsRange = document.querySelector('.testimonials-slider');
let tempValue = 0;


export function switchTestimonials() {
    if (loop)
    {
        let testimonialsCard = document.querySelector(".testimonials-card");
        let testimonialsList = document.querySelectorAll(".testimonials-list");
        if (testimonialsRange) {
            tempValue = Number(testimonialsRange.value);
            currentOffset = testimonialsCard.offsetWidth + 15;
            testimonialsList[0].setAttribute("style", "transition: margin " + "4000ms ease;");
            testimonialsList[0].setAttribute("style", "margin-left: -" + currentOffset + "px");
            testimonialsList[0].appendChild(testimonialsList[0].firstElementChild);
            testimonialsList[0].style.marginLeft = '0px';
            tempValue++;
            if (tempValue <= Number(testimonialsRange.max)) testimonialsRange.value = tempValue;
            else {
                tempValue = 0;
                testimonialsRange.value = 0;
            }
            //setTimeout(function() {
                testimonialsList[0].style.cssText = "transition: none;";
            //}, 4000);
        }
    }
}

export let testimonialsRangeValue = function() {
    let newValue = testimonialsRange.value;
    let testimonialsCard = document.querySelector(".testimonials-card");
    let testimonialsList = document.querySelectorAll(".testimonials-list");
    let target;
    for (let i = 0; i < cards.length; i++) {
        if (i == newValue) {
            currentOffset = testimonialsCard.offsetWidth * (i - tempValue) + 30 * (i - tempValue);
            if (currentOffset > 0) {
                testimonialsList[0].setAttribute("style", "transition: margin " + "4000ms ease;");
                testimonialsList[0].setAttribute("style", "margin-left: -" + currentOffset + "px");
            
                for (let j = 0; j < (i - tempValue) ; j++) {
                    testimonialsList[0].appendChild(testimonialsList[0].firstElementChild);
                }
            }
            else if (currentOffset < 0) {
                for (let j = 0; j < (tempValue - i) ; j++) {
                    testimonialsList[0].prepend(testimonialsList[0].lastElementChild);
                }
                currentOffset *= -1;
            }
            testimonialsList[0].style.marginLeft = '0px';
        }     
    }
    tempValue = Number(testimonialsRange.value);
}


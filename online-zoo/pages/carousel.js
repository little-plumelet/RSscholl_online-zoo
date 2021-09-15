
export let currentItem = 0;
export let isEnabledCards = true;
let animaCards = document.querySelectorAll(".animals-list");

function changeCurrentItem(n) {
        currentItem = (n + animaCards.length) % animaCards.length;
    }
    
    function hideItem(direction) {
        isEnabledCards = false;
        animaCards[currentItem].classList.add(direction);
        animaCards[currentItem].addEventListener("animationend", function() {
            this.classList.remove("active", direction);
        })
    }
    
    function showItem(direction) {
        animaCards[currentItem].classList.add("next", direction);
        animaCards[currentItem].addEventListener("animationend", function() {
            this.classList.remove("next", direction);
            this.classList.add("active");
            isEnabledCards = true;
        })
    }
    
    export function nextItem(n) {
        hideItem("to-left");
        changeCurrentItem(n + 1);
        showItem("from-right");
    }
    
    export function previousItem(n) {
        hideItem("to-right");
        changeCurrentItem(n - 1);
        showItem("from-left");
    }
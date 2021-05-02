export let currentItemCam = 0;
export let isEnabledCams = true;
let cams = document.querySelector(".more-cam-list");

function hideItem(direction) {
    isEnabledCams = false;
    console.log(cams);

    cams.classList.add(direction);
    cams.addEventListener("animationend", function() {
        this.classList.remove(direction);
        if (direction === "to-left" && !isEnabledCams) {
            console.log("!!!", cams.firstElementChild)
            cams.append(cams.firstElementChild.cloneNode(true));
            cams.removeChild(cams.firstElementChild); 
            isEnabledCams = true;    
        }
        
    })
    
}

function showItem(direction) {
    isEnabledCams = false;
    cams.prepend(cams.lastElementChild.cloneNode(true));
    cams.removeChild(cams.lastElementChild);
    cams.classList.add(direction);
    cams.addEventListener("animationend", function() {
        this.classList.remove(direction);
        isEnabledCams = true;    
    })
}

export function nextItemCam(n) {
    hideItem("to-left");
}

export function previousItemCam(n) {
    showItem("from-left");
}


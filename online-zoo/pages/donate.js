let donateRadioButtons = document.querySelectorAll(".scale-radio-buttons__item-input");
let donateInputField = document.querySelector(".donate-form__input");

export function donateRadioButton() {
    if (donateRadioButtons.length > 0) {
        donateRadioButtons.forEach(element  => {
            element.addEventListener("click", function(e) {
                let moneyInput = document.querySelector(".donate-form__input");
                moneyInput.value = e.target.value;
            });
        });
    }
}

export function donateInput() {
    if (donateInputField) {
        donateInputField.addEventListener("input", function() {
            let flag = false;
            donateRadioButtons.forEach(element => {
                if (Number(element.value) === Number(this.value)) {
                    element.checked = true;
                    flag = true;
                    if (this.value.length > 4)
                        this.value = this.value.slice(0, 4);
                }
                else if (!flag) {
                    donateRadioButtons.forEach(element => { element.checked = false;});
                    if (this.value.length > 4)
                    this.value = this.value.slice(0, 4);
                }
            });
        });
    }
}
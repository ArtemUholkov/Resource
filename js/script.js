const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const popupSlide = document.querySelector("#popupSlide")
const body = document.body;

burger.addEventListener("click", burgerHandler);
popup.addEventListener("click", (e) => {
    burgerHandler(e);
});



function burgerHandler(e) {

    if (popup.classList.contains('open')) {
        popup.classList.add('close')
        body.classList.remove('noscroll');
        popupSlide.classList.add('slideout');

        setTimeout(() => {
            popup.classList.remove('close');
            popup.classList.remove('open');
            popupSlide.classList.remove('slideout');
            popupSlide.classList.remove('slidein');
        }, 300);

    } else {
        body.classList.add('noscroll');
        popup.classList.add("open");
        popupSlide.classList.add("slidein")

    }
    burger.classList.toggle('active');
}

const headerButton = document.querySelector(".header_search-button");
const searchField = document.querySelector(".header_search");



searchField.addEventListener("focus", () => {
    headerButton.classList.add('show');
}, true);

const f = () => {
    if (searchField.value.length == 0) {
        headerButton.classList.remove('show');
    }
}

searchField.addEventListener("blur", f, true);


searchField.addEventListener("input", buttonValid);

function buttonValid() {
    if (searchField.value.length > 1) {
        headerButton.classList.add("colorchanger");
        // searchField.removeEventListener("blur", f);
    }
    else {
        headerButton.classList.remove("colorchanger");
    }
}

// function buttonValid() {
//     if (searchField.value.length > 1) {
//         headerButton.style.backgroundColor = "var(--main-style-color)";
//         // searchField.removeEventListener("blur", f);
//     }
//     else {
//         headerButton.style.backgroundColor = "#B8BDC9";
//     }
// }




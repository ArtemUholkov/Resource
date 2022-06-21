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


if (window.innerWidth < 581) {
    searchField.addEventListener("focus", () => {
        headerButton.classList.add('show');
    }, true);


    searchField.addEventListener("blur", () => {
        if (searchField.value.length == 0) {
            headerButton.classList.remove('show');
        }
    }, true);
}

searchField.addEventListener("input", buttonValid);


function buttonValid() {
    if (searchField.value.length > 1) {
        headerButton.style.backgroundColor = "var(--main-style-color)";
        headerButton.disabled = false;
    }
    else {
        headerButton.style.backgroundColor = "#B8BDC9";
        headerButton.disabled = true;
    }
}

const links = $(".how_link");
function loopAll() {
    let a = [];
    links.each(function (index) {
        a[index] = $(this);
        setTimeout(function () {
            a[index].addClass('glowing').delay(500).queue(function (next) {
                a[index].removeClass('glowing');
                next();
            });
        }, index * 600);
    });
}
loopAll();
setInterval(() => { loopAll(); }, 30000);
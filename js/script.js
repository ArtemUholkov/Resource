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

headerButton.disabled = true;
function buttonValid() {

    if (searchField.value.length > 1) {
        headerButton.style.backgroundColor = "var(--main-style-color)";
        headerButton.disabled = false;
    }
    else {
        headerButton.disabled = true;
        headerButton.style.backgroundColor = "#B8BDC9";

    }
}

const resButton = document.querySelector(".research_search-button");
const resSearch = document.querySelector(".resources_search");

resSearch.addEventListener("input", buttonVal);

resButton.disabled = true;
function buttonVal() {

    if (resSearch.value.length > 1) {
        resButton.style.backgroundColor = "var(--main-style-color)";
        resButton.disabled = false;
    }
    else {
        resButton.disabled = true;
        resButton.style.backgroundColor = "var(--secondary-style-color)";

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

new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1050: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    }

});






const modal = document.querySelector("#myModal");
const modalBut = document.querySelector("#myBut");
const captionText = document.querySelector("#caption");
const closeModal = document.getElementsByClassName("close")[0];

modalBut.onclick = function () {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}


modal.addEventListener("click", clickCheck);

function clickCheck(event) {
    if (event.target.classList.contains("modal") == true) {
        modal.style.display = "none";
        body.style.overflow = "visible";
    }
}


closeModal.addEventListener("click", closeM);
function closeM() {
    modal.style.display = "none";
    body.style.overflow = "visible";
}

const subRegBut = document.querySelector(".register_button");
console.log(subRegBut);

const regForm = document.querySelector(".modal-reg-form");

regForm.addEventListener("submit", firePop);
function firePop(e) {
    e.preventDefault();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thank you!',
        showConfirmButton: false,
        timer: 1500
    })
    // closeM();
    setTimeout(() => {
        regForm.submit();
    }, 1600);

}

const card1 = document.querySelector("#collapseOne");
const card2 = document.querySelector("#collapseTwo");
const card3 = document.querySelector("#collapseThree");

const closeBut = document.querySelector("#closeButton");
console.log(closeBut);

closeBut.addEventListener("click", butCloser);

function butCloser(e) {
    if (card1.classList.contains("show") && card2.classList.contains("show") && card3.classList.contains("show")) {
        card3.classList.remove("show");
        setTimeout(() => {
            card2.classList.remove("show");


        }, 100);
        setTimeout(() => {
            card1.classList.remove("show");


        }, 100);
    }
};


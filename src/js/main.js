// ----------------------hadnle ui-------------------------//
const Lang = document.querySelector('.header__lang')
const LangSelect = document.querySelector('.header__lang__select')
const opinion = document.getElementsByClassName('header__lang__opinion')
const LangValue = document.querySelector('#lang__value')


const toggle = document.querySelector('.header__toggle')
const listnav = document.querySelectorAll('.nav__item')

const submenu = document.querySelector('.header__menu')
// set toggel active
const removeActive = (ref) => {
    ref.classList.remove("active")
}
const addActive = (ref) => {
    ref.classList.add("active")
}

const hadnleToggle = (ref) => {
    ref.classList.toggle("active");
}

//--------------------------------


toggle.addEventListener('click', () => {
    hadnleToggle(toggle);
    hadnleToggle(submenu)
})

// select lang
Lang.addEventListener('click', () => {
    hadnleToggle(LangSelect);

})


const arrOpinion = [...opinion].forEach(item => {
    const current = item.innerHTML

    item.addEventListener('click', () => {
        LangValue.innerHTML = current;
        addActive(item)
    })

})
//--------------------scroll header
// Change style of navbar on scroll

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.pageYOffset || window.scrollY;
    if (scrollPosition > 100) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
//-----------------------slider----------------------//
const swiper__value = document.querySelector('.swiper__value')
const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        //   type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slideChange: index => { console.log(index.snapIndex); },
});

swiper.on('slideChange', function (index) {
    console.log(index.snapIndex);
    swiper__value.innerHTML = `0${index.snapIndex + 1}`
});


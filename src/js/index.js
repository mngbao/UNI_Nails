// import '../scss/style.scss'

function isHomePage() {
  if (document.location.pathname === '/' ||
    document.location.pathname.indexOf('index') > -1) {
    return true;
  }
}

const flickity = (item) => {
  $(item).flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    autoPlay: 4000,
    pauseAutoPlayOnHover: false,
    selectedAttraction: 0.01,
    friction: 0.15
  });

}
// function flickity() {
//   $('.hero__wrapper').flickity({
//     // options
//     cellAlign: 'left',
//     wrapAround: true,
//     contain: true,
//     autoPlay: 4000,
//     pauseAutoPlayOnHover: false,
//     selectedAttraction: 0.01,
//     friction: 0.15
//   });
// }



function ServiceCard() {
  const Icon = $(".Icon");

  Icon.each(function (index, element) {
    $(element).on("click", function (e) {
      $(".info").css({ "display": "none" })
      $(".info").eq(index).css({
        "display": "block"
      })

      $(".card p").removeClass("active")
      $(".card p").eq(index).addClass("active");


    })
  })
}



function scrollToWelcome() {
  const header = document.querySelector('header').offsetHeight;
  const button = document.querySelector('.hero__button a');
  const className = button.getAttribute('href').replace('#', '.');
  const welcome = document.querySelector(className);
  $('.hero__button a').on("click", (e) => {
    e.preventDefault();

    console.log("scrolled")
    window.scrollTo({
      top: welcome.offsetTop - header,
      behavior: "smooth"
    });

  })
}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});





$(function () {

  $("#nav-placeholder").load("../nav.html");
  $("#footer-placeholder").load("../footer.html");

  if (isHomePage()) {
    flickity('.hero__wrapper');

    ServiceCard();
    scrollToWelcome();
  }

});
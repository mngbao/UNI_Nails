// import '../scss/style.scss'
// import '../../index.html'
var Scrollbar = window.Scrollbar;

const scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
  damping: 0.07,
thum
  
});



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


function service() {
  const header = document.querySelector('header').offsetHeight;

  $('.services__button li').each(function (index, element) {
    $(element).on("click", function (e) {
      e.preventDefault();
      const serviceTab = $('.services__detail .item').eq(index).offset().top - header;
      scrollbar.scrollTo(0,serviceTab,1200)
      
    })
  })
}
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
  const header = document.querySelector('nav').offsetHeight;
  const button = document.querySelector('.hero__button a');
  const className = button.getAttribute('href').replace('#', '.');
  const welcome = document.querySelector(className).offsetTop - header;
  

  $('.hero__button a').on("click", (e) => {
    e.preventDefault();

    scrollbar.scrollTo(0,welcome,1200)

  })
}



window.addEventListener('load', (event) => {
  service();
})



$(function () {

  $("#nav-placeholder").load("../nav.html");
  $("#footer-placeholder").load("../footer.html");

  if (isHomePage()) {
    flickity('.hero__wrapper');
    window.addEventListener('load', (event) => {
      ServiceCard();
      scrollToWelcome();

    });
  }

});
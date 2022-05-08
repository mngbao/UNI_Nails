// import '../scss/style.scss'
// import '../../index.html'


class ModalPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'modal';

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

var Scrollbar = window.Scrollbar;
Scrollbar.use(ModalPlugin,);

const scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
  damping: 0.05,
  renderByPixels: true,
  syncCallbacks: true,

});

scrollbar.addListener(function (status) {
  var offset = status.offset;
  header = document.querySelector('header');
  nav = document.querySelector('.nav__mobile');
  nav.style.top = offset.y + 'px';
  header.style.top = offset.y + 'px';
  header.style.left = offset.x + 'px';
});


const flickity = (item) => {
  $(item).flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    autoPlay: 6000,
    pauseAutoPlayOnHover: false,
    selectedAttraction: 0.04,
    friction: 0.6,
  });

}

// Handle Hamburger button
function hamburger() {
  hamburger = document.querySelector('.nav__main .hamburger');
  nav_mobile = document.querySelector('.nav__mobile');
  header = document.querySelector('header');
  let scroll = true;
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('change')
    nav_mobile.classList.toggle('show')
    scrollbar.updatePluginOptions('modal', { open: scroll })
    scroll = !scroll


  })

}

function headerColor() {
  bright = document.querySelector('.bright').offsetTop;
  hamburger = document.querySelector('.hamburger');
  menu = document.querySelector('#color');
  scrollbar.addListener(function (e) {

    if (scrollbar.scrollTop >= bright) {
      if (hamburger.classList.contains("bg-dark")) {
        return;
      }
      else {
        hamburger.classList.add("bg-dark")

      }
      if (menu.classList.contains("dark")) {
        return;
      }
      else {
        menu.classList.add("dark")
      }

    }
    else {
      if (hamburger.classList.contains("bg-dark")) {
        hamburger.classList.remove("bg-dark")
      }
      else {
        return;

      }
      if (menu.classList.contains("dark")) {
        menu.classList.remove("dark")
      }
      else {
        return;
      }
    }
  })


}

// Handle Service Detail Menu
function service() {
  const nav = document.querySelector('header').offsetHeight;

  $('.services__button li').each(function (index, element) {
    $(element).on("click", function (e) {
      e.preventDefault();
      const serviceTab = $('.services__detail .item').eq(index).offset().top - nav;
      scrollbar.scrollTo(0, serviceTab, 1200)

    })
  })
}

//Handle Homepage Service Card
function ServiceCard() {
  $('.Icon').each(function (index, element) {
    $(element).on("click", function (e) {
      e.preventDefault();
      $(".info").css({ "display": "none" })
      $(".info").eq(index).css({
        "display": "block"
      })
      $(".card p").removeClass("active")
      $(".card p").eq(index).addClass("active");
    })
  })
}


//Handle scroll to section
function scrollToWelcome() {
  const nav = document.querySelector('header').offsetHeight;
  const button = document.querySelector('.hero__button a');
  const className = button.getAttribute('href').replace('#', '.');
  const welcome = document.querySelector(className).offsetTop - nav;


  $('.hero__button a').on("click", (e) => {
    e.preventDefault();

    scrollbar.scrollTo(0, welcome, 1200)

  })
}





$(function () {
  service();
  hamburger();
  if ($("body").data("title") === "home") {
    flickity('.hero__wrapper');
    window.addEventListener('load', (event) => {
      ServiceCard();
      scrollToWelcome();
    });
  }

});
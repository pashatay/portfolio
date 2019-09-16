const burger = $('.hamburger');
const nav = $('.navbar-links');
const links = $('.navbar-links li')

const navSlide = () =>{
    burger.on('click', () =>{
      nav.toggleClass('navbar-active');
      burger.toggleClass('toggle');
});
}

const clickMenu = () => {
    links.on('click', () => {
         console.log(links);
         nav.removeClass('navbar-active');
         burger.removeClass('toggle');
      });
}

const ready = () => {
  navSlide();
  clickMenu();
}

ready();


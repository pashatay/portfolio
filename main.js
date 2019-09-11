
const navSlide = () =>{
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar-links');
   console.log(nav);
    burger.addEventListener('click', () =>{
        console.log(nav);
        nav.classList.toggle('navbar-active');
    });
}

const clickMenu = () => {
    const links = document.querySelectorAll('.navbar-links li')
    console.log(links[0]);
    links.forEach(function(el,idx){
         el.style.animation = `navbar-links-fade 0.5s ease forwards ${idx/7 + 1}s`;
    //   el.addEventListener('click', () => {
    //      console.log(el);
    //      el.classList.remove('navbar-active');
    //   })
    });
}

navSlide();
clickMenu();
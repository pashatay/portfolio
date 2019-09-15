const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar-links');
    const links = document.querySelectorAll('.navbar-links li')

const navSlide = () =>{
    burger.addEventListener('click', () =>{
      if(nav.className === 'navbar-active'){
        nav.className = 'navbar-inactive'
     }
        nav.classList.toggle('navbar-active');

        links.forEach((el,idx)=>{
            if(el.style.animation){
               el.style.animation = '';
            }else{
              el.style.animation = `navbarLinksFade 0.5s ease forwards ${idx/ 7 + 1.5}s`;
              //console.log(idx/7+0.2);
            }
    });
    //burger animation
    burger.classList.toggle('toggle');
});
}

const clickMenu = () => {
    links.forEach(function(el,){
      el.addEventListener('click', () => {
         console.log(el);
         nav.classList.remove('navbar-active');
         burger.classList.remove('toggle');
      })
    });
}

navSlide();
clickMenu();

const navSlide = () =>{
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar-links');

    burger.addEventListener('click', () =>{
        console.log(nav);
        nav.classList.toggle('navbar-active');
    });
}

navSlide();
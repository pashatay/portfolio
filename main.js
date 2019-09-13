
const navSlide = () =>{
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar-links');
    const links = document.querySelectorAll('.navbar-links li')


    burger.addEventListener('click', () =>{
        nav.classList.toggle('navbar-active');

        links.forEach(function(el,idx){
            if(el.style.animation){
               el.style.animation = '';
            }else{
              el.style.animation = `navbar-links-fade 0.5s ease forwards ${idx/ 7 + 1.5}s`;
            }
    });
});
}

// const clickMenu = () => {
//     const links = document.querySelectorAll('.navbar-links li')

//     //links.forEach(function(el,){
//     //   el.addEventListener('click', () => {
//     //      console.log(el);
//     //      el.classList.remove('navbar-active');
//     //   })
//     //});
// }

navSlide();

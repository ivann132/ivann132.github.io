const navbar = document.querySelector('.navigasi-nav');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

const typed = new Typed(".auto-type",{
    strings: ["Programming", "Cloud Computing", "Designing", "Travelling"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});
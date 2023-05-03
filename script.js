const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide')
const icons = document.querySelectorAll('.social-icon .link i')


const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navbar-nav')
const navLinks = document.querySelectorAll('.navbar-nav a')


const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px 50px 0px'
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll)
{
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

icons.forEach(icon => {
    icon.onmouseenter = function() {icon.classList.add('fa-bounce')}
    icon.onmouseout = function () { icon.classList.remove('fa-bounce') }
}) 

toggler();

function toggler() {
    navToggler.addEventListener('click', function () {
        navToggler.classList.toggle('toggler-open')
        navMenu.classList.toggle('open')
    });

}
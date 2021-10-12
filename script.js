var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
    span.addEventListener('scroll', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1))
});


$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
});




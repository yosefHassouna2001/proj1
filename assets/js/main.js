(function () {
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }
    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");

        } else {
            header_navbar.classList.remove("sticky");
        }

        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollY > 200 || document.documentElement.scrollTop > 200) {
            backToTo.style.opacity = "1";
            backToTo.style.visibility = "visible";

        } else {
            backToTo.style.opacity = "0";
            backToTo.style.visibility = "hidden";
        }
    };

    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });




    new WOW().init();

})();








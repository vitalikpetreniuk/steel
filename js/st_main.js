$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        infinite: true,
        dots: true
    });
    $('.products.media-360').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        infinite: true,
        dots: false
    });

    $(function() {
        function init() {
            $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
            $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
            $('[data-behaviour="toggle-products-button"]').on('click', toggleProducts);
            $('[data-behaviour="toggle-price-table-button"]').on('click', togglePrice);
        };

        function toggleMenuIcon() {
            $(this).toggleClass('menu-icon--open');
            $('[data-element="toggle-nav"]').toggleClass('nav--active');
        };
        function toggleSubMenu() {
            $(this).toggleClass('nav__link--plus nav__link--minus');
            $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
        };
        function toggleProducts() {
            $(this).toggleClass('menu-icon--open');
            $('.products.media-360').toggleClass('off');
            $('[data-element="toggle-products"]').toggleClass('nav--active');
        };
        function togglePrice() {
            $(this).toggleClass('menu-icon--open');
            $('.products.media-360').toggleClass('off');
            $('[data-element="toggle-table"]').toggleClass('nav--active');
        };
        init()
    });
    $("#sticky-kit").stick_in_parent();





    // $("#dropdown-menu .arrow").on("click", function(){
    //     $("#dropdown-menu").toggleClass("active");
    // });
    // $('#dropdown-menu button.arrow-right').on('click', function() {
    //     $('.dd-menu ul').animate({'margin-left': "0"},800);
    //     $(this).attr("disabled","disabled");
    //     $(this).siblings('button').removeAttr("disabled");
    // });
    // $('#dropdown-menu button.arrow-left').on('click', function() {
    //     $('.dd-menu ul').animate({'margin-left': "-250px"}, 800);
    //     $(this).attr("disabled","disabled");
    //     $(this).siblings('button').removeAttr("disabled");
    // });


});

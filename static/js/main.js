$(document).ready(function () {
    svg4everybody({
      polyfill: true
    });

    productsMenu = ['Multitools', 'Pocket Knives & Folding Knives',
    'Fixed Blade Hunting Knives', 'Hunting & Tactical Knives & Tools',
    'Tactical Knives', 'Tools & Home Improvement', 'Sports & Fitness',
    'Kitchen & Dining'];

    activityMenu = ['Explore', 'Hunt', 'Everyday', 'Survive', 'Work', 'Defend'];

    $('.products-menu__image').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        customPaging : function(sliders, i) {
            return `<a class="products-slider__dots">${productsMenu[i]}</a>`;
        },
    });

    $('.activity-menu__image').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        customPaging : function(sliders, i) {
            return `<a class="activity-slider__dots">${activityMenu[i]}</a>`;
        },
    });

    // $('.js-main-slider').slick({
    //     arrows: false,
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     customPaging : function(sliders, i) {
    //         return `<a class="main-slider__dots">0${i+1}</a>`;
    //     },
    // });

    $('.js-main-slider').slick({
      arrows: false,
      infinite: true,
      speed: 1000,
      asNavFor: '.js-small-slider'
    });
    $('.js-small-slider').slick({
      vertical:true,
      speed: 1000,
      infinite: true,
      arrows: true,
      asNavFor: '.js-main-slider',
      dots: true,
      prevArrow: false,
      nextArrow: '.small-slider__controls--next',
      customPaging : function(sliders, i) {
          return `<a class="small-slider__dots">0${i+1}</a>`;
      },
    });

    $('.header-user__sandwich').click(function () {
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('active');
    });

    $('.header-menu__link--products').click(function () {
      $('.header-menu__list').addClass('active');
      $('.menu-products').addClass('active');
    });

    $('.menu-products__btn').click(function () {
      $('.menu-products').removeClass('active');
      $('.header-menu__list').removeClass('active');
    });

    $('.header-nav__link--products').click(function () {
      $('.activity-menu').removeClass('active');
      $('.header-nav__item--activity').removeClass('active');
      $('.header-nav__item--products').toggleClass('active');
      $('.products-menu').toggleClass('active');
    });

    $('.header-nav__link--activity').click(function () {
      $('.products-menu').removeClass('active');
      $('.header-nav__item--products').removeClass('active');
      $('.header-nav__item--activity').toggleClass('active');
      $('.activity-menu').toggleClass('active');
    });
});

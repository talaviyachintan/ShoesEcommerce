$(document).ready(function () {
    // header
     // header
    $(window).scroll(function () {
        var sticky = $('.sticky'),
             scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    
    // top_bottom arrows

    $('.bottom_top').click(function(){
        $('html, body').animate({
          scrollTop: '0px'
        },500);
        return false;
    })
  
    $('.bottom_top').hide();
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
        $('.bottom_top').fadeIn();
        }
        else{
        $('.bottom_top').fadeOut();
        }
    })

    // loader

    setTimeout(function(){
        $(".preloaders").fadeOut();
    },2000);

    // banner-slider

    $('#banner').owlCarousel({
        loop:true,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

        // brand
    $('#brand').owlCarousel({
        dots:false,
        margin:0,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 3000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            767:{
                items:3
            },
            991:{
                items:4
            },
            1024:{
                items:5
            },
            1400:{
                items:6
            }
        }
    });

    // latest-product
    $('#latest-product').owlCarousel({
        dots:false,
        margin:0,
        // autoplay: true,
        rewind: true,
        // autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });

    // featured-Product
    $('#featured-Pro').owlCarousel({
        dots:false,
        margin:0,
        // autoplay: true,
        rewind: true,
        // autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });

    // blog
    $('#blog').owlCarousel({
        dots:false,
        margin:0,
        // autoplay: true,
        rewind: true,
        // autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:2
            },
            1400:{
                items:2
            }
        }
    });

    // testimonial

    $('#testimonial').owlCarousel({
        loop:true,
        margin:0,
        rewind: true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // about pages
    $('#aboutpage').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 3000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        nav:true,
        navText: ["<i class='fa-solid fa-circle-arrow-left'></i>","<i class='fa-solid fa-circle-arrow-right'></i>"],
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    // team
    $('#about-team').owlCarousel({
        dots:false,
        margin:20,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 3000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
































    $('#categories').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            1024:{
                items:5
            },
            1400:{
                items:7
            }
        }
    });

    $('#trending').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1400:{
                items:5
            }
        }
    })

    $('#special').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })

    $('#bestsell').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:2
            }
        }
    })

    $('#Sma_Phones').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1400:{
                items:5
            }
        }
    })

    $('#Sma_watches').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1400:{
                items:5
            }
        }
    })

    $('#headphones').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1400:{
                items:5
            }
        }
    })

    $('#latest_blog').owlCarousel({
        loop:false,
        dots:false,
        margin:0,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    


    

    // slick-slider

    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     infinite: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     asNavFor: '.slider-for',
    //     focusOnSelect: true,
    //     slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	dots: false,
	// 	vertical: true,
	// 	verticalSwiping: true,
    //     margin: 10,
    // });

    

});
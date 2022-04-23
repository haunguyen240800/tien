import { Injectable } from '@angular/core';

declare var Swiper: any;
declare var noUiSlider: any;
declare var BVSelect: any;

interface Script {
    src: string;
    loaded: boolean;
}

@Injectable()
export class ScriptLoaderService {
    
    bannerSliderOne(){
        new Swiper('.banner-slider--one', {
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
            effect: 'fade',
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    }

    bannerSlider02(){
        new Swiper('.banner-slider--02', {
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
            effect: 'fade',
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    }


    bannerSlider03(){
        new Swiper('.banner-slider--03', {
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
            effect: 'fade',
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    }

    bannerSlider04(){
        new Swiper('.banner-slider--04', {
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
            effect: 'fade',
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: ' .swiper-button--next',
              prevEl: ' .swiper-button--prev',
            },
        });
    }

    bannerSlider05(){
        new Swiper('.banner-slider--05', {
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
            effect: 'fade',
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: ' .swiper-button--next',
              prevEl: ' .swiper-button--prev',
            },
        });
    }

    //Categories Slider

    popularCategoriesSlider(){
        new Swiper('.popular-categories--slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            loopFillGroupWithBlank: true,
          
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
          
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
            },
          });
    }

    categoryTopSliderTwo(){
        new Swiper('.category--top-slider--two', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
          
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
          
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            navigation: {
              nextEl: ' .swiper-button--next',
              prevEl: ' .swiper-button--prev',
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              575: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            },
        });
    }

    //Products Slider
    popularProductsSlider(){
        new Swiper('.popular-products--slider', {
            slidesPerView: 'auto',
            autoHeight: true,
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
          
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
          
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 2,
              },
            },
        });
    }

    newestProductsSliderOne(){
        new Swiper('.newest-products-slider--one', {
            spaceBetween: 22,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            },
        });
    }

    ourProductsContentSlider(){
        new Swiper('.our-products__content-slider', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 2,
              },
            },
        });
    }

    ourProductsContentSliderOne(){
        new Swiper('.our-products__content-slider-one', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 2,
              },
            },
          });
    }

    ourProductsContentSliderTwo(){
        new Swiper('.our-products__content-slider-two', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 2,
              },
            },
        });
    }

    ourProductsContentSliderThree(){
        new Swiper('.our-products__content-slider-three', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 2,
              },
            },
        });
    }

    ourProductsContentSliderFour(){
        new Swiper('.our-products__content-slider-four', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 2,
              },
            },
        });
    }

    galleryItemsSlide(){
        new Swiper('.gallery-items-slider', {
            centeredSlides: true,
            slidesPerView: 4,
            loop: true,
            autoHeight: false,
            direction: 'vertical',
            navigation: {
              nextEl: '.gallery-next-item',
              prevEl: '.gallery-prev-item',
            },
            breakpoints: {
              0: {
                slidesPerView: 2,
                centeredSlides: false,
                direction: 'horizontal',
              },
              570: {
                slidesPerView: 4,
                centeredSlides: false,
                direction: 'horizontal',
              },
              992: {
                slidesPerView: 4,
                centeredSlides: false,
              },
            },
          });
    }

    galleryThumbs: any = new Swiper('.gallery-thumbs', {
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 4,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        breakpoints: {
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
        },
      });

    galleryMain(){
        new Swiper('.gallery-main', {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            preventInteractionOnTransition: true,
            navigation: {
              nextEl: '.swiper-button-next-item',
              prevEl: '.swiper-button-prev-item',
            },
            effect: 'fade',
            fadeEffect: {
              crossFade: true,
            },
            thumbs: {
              swiper: this.galleryThumbs,
            },
        });
    }

    productViewThumbs: any = new Swiper('.gallery-thumbs-slider', {
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 4,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        breakpoints: {
          0: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        },
      });

    productViewGallery (){
        new Swiper('.gallery-main-slider', {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            preventInteractionOnTransition: true,
            navigation: {
              nextEl: '.swiper-button-next-item',
              prevEl: '.swiper-button-prev-item',
            },
            effect: 'fade',
            fadeEffect: {
              crossFade: true,
            },
            thumbs: {
              swiper: this.productViewThumbs,
            },
        });
    }

    //Deals Slider

    deals(){
        new Swiper('.deals-products--slider', {
            slidesPerView: 'auto',
            autoHeight: true,
            // centeredSlides: true,
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
          
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
          
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
            },
        });
    }

    featured(){
        new Swiper('.featured-slider--one', {
            spaceBetween: 0,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            },
        });  
    }

    featuredFive(){
        new Swiper('.featured-slider--five', {
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1201: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            },
        });
    }

    relatedSliderOne (){
        new Swiper('.related-slider--one', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            },
        });
    }

    ourFeatureSlider() {
        new Swiper('.our-feature--slider', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            // centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
            },
        });
    }

    //News Slider

    newsSliderOne(){
        new Swiper('.news-slider--one', {
            spaceBetween: 24,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            },
        });
    }

    //Testimonial Slider

    testimonialSliderOne(){
        new Swiper('.testimonial-slider--one', {
            loop: true,
            loopFillGroupWithBlank: true,
            autoHeight: true,
          
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            navigation: {
              nextEl: ' .swiper-button--next',
              prevEl: ' .swiper-button--prev',
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: true,
              },
            },
        });
    }

    testimonialSliderThree(){
        new Swiper('.testimonial-slider--three', {
            loop: true,
            loopFillGroupWithBlank: true,
            autoHeight: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            navigation: {
              nextEl: ' .swiper-button--next',
              prevEl: ' .swiper-button--prev',
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
        });
    }

    //Instagram Slider

    instagramSliderOne(){
        new Swiper('.instagram-slider--one', {
            slidesPerView: 6,
            loop: true,
            loopFillGroupWithBlank: true,
            autoHeight: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              575: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1201: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            },
          });
    }

    //Brands Slider
    brandNameSlideOne(){
        new Swiper('.brand-name-slide--one', {
            loop: true,
            loopFillGroupWithBlank: true,
            autoHeight: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              420: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
          
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            },
        });
    }

    //Member Slider
    membersSliderOne(){
        new Swiper('.members-slider--one', {
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            navigation: {
              nextEl: ' .arrows__btn-next ',
              prevEl: ' .arrows__btn-prev',
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
              },
              1201: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            },
          });  
    }

    // /Blog Post Slider

    blogListSlider(){
        new Swiper('.blog-list--slider', {
            spaceBetween: 15,
            loop: true,
            loopFillGroupWithBlank: true,
          
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
        });
    }

    loadJsFilter(){
        const filterToggle = document.querySelector('#filter');
        if (filterToggle) {
            filterToggle.addEventListener('click', function () {
            const sidebar: any = document.querySelector('.shop-content .col-lg-3');
            const productGallery: any = document.querySelector('.shop-content .col-lg-9');
            const productContent: any = document.querySelectorAll(
                '.shop__product-items .col-md-6'
            );

            sidebar.classList.toggle('d-none');
            productGallery.classList.toggle('col-lg-12');

            // it's will be on 4 column
            productContent.forEach((item: any) => {
                if (item.classList.contains('col-xl-4')) {
                    item.classList.add('col-xl-3');
                    item.classList.remove('col-xl-4');
                } else if (item.classList.contains('col-xl-3')) {
                    item.classList.add('col-xl-4');
                    item.classList.remove('col-xl-3');
                }
            });
        });
    }

    var range = document.getElementById('priceRangeSlider');

    if (range) {
        noUiSlider.create(range, {
            start: [20, 80],
            connect: true,
            range: {
                min: 0,
                max: 1500,
            },
            tooltips: true,
        });
        }    
    }

    loadJsPopopCart(){
        let cartBtn = document.querySelector('.cart-bag');
        let closeBtn = document.querySelector('.shopping-cart .close');
        const shoppingCart = document.querySelector('.shopping-cart');
    }
    
    loadJsSort(){
      if (document.getElementById('sort')) {
        var demo3 = new BVSelect({
          selector: '#sort',
          searchbox: false,
          offset: false,
          placeholder: 'Latest',
        });
      }
    }
}
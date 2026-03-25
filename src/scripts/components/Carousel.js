import Swiper from 'swiper/bundle';

/** Composante Carousel of Timtools */
export default class Carousel {
  /**
   * Contrutor method
   * @param {HTMLElement} element - Elements of the HTML wiche the components is instanced
   */
  constructor(element) {
    this.element = element;

    // Default option of the Swiper library https://swiperjs.com/get-started
    this.defaultOptions = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
      },
    };

    this.init();
  }

  /**
   * The initialized method
   */
  init() {
    let options = this.defaultOptions;

    // Parameters options if we want different style
    // 2 visible slides in the big screen and one for small screen
    if (this.element.dataset.carousel == 'split') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
          },
        },
      };
    }

    // Instantiating a new Swiper with the options
    new Swiper(this.element, options);
  }
}

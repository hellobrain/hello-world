function Slider(selector, options) {
    var __self = this;

    //DOM Nodes
    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider-images-wrap'),
        prevImageNode = sliderNode.querySelector('.slider-pager-prev'),
        nextImageNode = sliderNode.querySelector('.slider-pager-next'),
        paginationNode = sliderNode.querySelector('.slider-pagination');

    var currentSlideIndex = options.currentSlide || 0,
        imagesCount = sliderImagesNode.children.length,
        slideWidth = sliderImagesNode.offsetWidth,
        slideHeight = sliderImagesNode.offsetHeight,
        slideSize = options.direction === 'vertical' ? slideHeight : slideWidth;

    this.prevSlide = function() {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return;
        }
        currentSlideIndex--;
    };

    this.nextSlide = function() {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    this.__render = function() {
        var direction = options.direction === 'vertical' ? 'marginTop' : 'marginLeft';
        sliderImagesNode.style[direction] = -(currentSlideIndex * slideSize) + 'px';

        function addActive() {
            paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
        }

        var active = paginationNode.querySelector('.active');

        if (active) {
            active.classList.remove('active');
            addActive();
        } else {
            addActive();
        }
    };

    prevImageNode.onclick = function(e) {
        e.preventDefault();
        __self.prevSlide();
        __self.__render();
    };

    nextImageNode.onclick = function(e) {
        e.preventDefault();
        __self.nextSlide();
        __self.__render();
    };

    paginationNode.onclick = function(e) {
        e.preventDefault();
        var link = e.target;

        if (link.tagName !== 'A') {
            return;
        }

        currentSlideIndex = +link.dataset['sliderItem'];
        __self.__render();
    };

    this.paginationItems = function() {
        var tmpl = paginationNode.querySelector('.slider-pagination-item-tmpl');
        var items = document.createDocumentFragment();

        for (var i = 0; i < imagesCount; i++) {
            var itemClone = tmpl.cloneNode(true);
            itemClone.querySelector('a').dataset['sliderItem'] = i;

            items.appendChild(itemClone);
        }

        paginationNode.removeChild(tmpl);
        paginationNode.appendChild(items);

    };

    this.__init = function() {
        if (options.direction === 'vertical') {
            sliderImagesNode.style.whiteSpace = 'normal';
        }

        __self.paginationItems();

        __self.__render();

        sliderImagesNode.classList.add('slider-transition');

    };

    this.__init();
}

new Slider('.slider', {
    direction: 'horizontal',
    currentSlide: 2,
    slideInterval: 1500
});

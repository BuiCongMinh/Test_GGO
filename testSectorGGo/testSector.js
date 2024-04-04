const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;;
const carouselChildrens = [...carousel.children];
const indexItems = document.querySelectorAll('.index-item');


let isDragging = false, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

let current = 0;


carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML);
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);

}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging')
}

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);

}

autoPlay();

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove('no-transition')

    } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition')
    }

    let currentIndex = Math.round(carousel.scrollLeft / firstCardWidth);
    
    indexItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
wrapper.addEventListener('mouseleave', autoPlay);


indexItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        document.querySelector(`.active`).classList.remove('active');

        // Xác định vị trí cần di chuyển đến bằng cách tính toán dựa trên index của item được nhấp vào
        const newPosition = index * firstCardWidth;

        // Di chuyển carousel đến vị trí mới
        carousel.scrollLeft = newPosition;

        // Đảm bảo autoPlay không được kích hoạt trong khi hover
        clearTimeout(timeoutId);

        // Khởi động lại autoPlay sau khi nhấp vào item index
        autoPlay();

        //add className active cho the tuong ung
        document.querySelector(`.index-item-${index}`).classList.add('active');
    });
});


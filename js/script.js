const tablinkList = document.querySelectorAll('.tab__link');
const tabcontentList = document.querySelectorAll('.tab-content');
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');
const cross = '../img/close-btn.svg';
const hamb = '../img/menu-btn.svg';
const hambDark = '../img/menu-btn-dark.svg';
const slideshowItem = document.querySelectorAll('.slideshow__item');
const dots = document.querySelectorAll('.dots__item');
const dotsI = document.querySelectorAll('.dots__i');
const teamCard = document.querySelectorAll('.team__wrap');

function removeClassActive(i) {
    i.classList.remove('active');
}

function addClassActive(i) {
    i.classList.add('active');
}

for (let i = 0; i < tablinkList.length; i++) {
    let button = tablinkList[i];
    let content = tabcontentList[i];
    button.addEventListener('click', function () {
        tablinkList.forEach(item => removeClassActive(item));
        tabcontentList.forEach(item => removeClassActive(item));
        addClassActive(button);
        addClassActive(content);
    });
}

menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('menu__gamburger');
    if (menuList.classList.contains('menu__gamburger')) {
        menuBtn.style.backgroundImage = `url(${cross})`;
    } else if (menuBtn.classList.contains('menu-btn--dark')) {
        menuBtn.style.backgroundImage = `url(${hambDark})`;
    } else {
        menuBtn.style.backgroundImage = `url(${hamb})`;
    }
})

if (window.screen.width >= 768) {
    menuList.classList.remove('menu__gamburger');
}

function addFourSlides(firstSlide, lastSlide) {
    for (let i = firstSlide; i <= lastSlide; i++) {
        const slide = slideshowItem[i];
        addClassActive(slide);
    }
}

function removeClassInList (list) {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        removeClassActive(item);
    }
}

dotsI.forEach(function(item) {
    item.addEventListener('click', function() {
        const cardList = [...teamCard];
        const dotList = [...dotsI];
        const index = dotList.indexOf(item);
        removeClassInList(dotsI);
        removeClassInList(cardList);
        addClassActive(item);
        addClassActive(teamCard[index]);
    });
});

if (window.screen.width < 768) {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        dot.addEventListener('click', function () {
            removeClassInList(slideshowItem);
            dots.forEach(function (item) {
                if (item == dot) {
                    addClassActive(item);
                    addClassActive(slideshowItem[i]);
                } else {
                    removeClassActive(item);
                }
            });
        });
    }
} else {
    addFourSlides(0, 3);
    dots.forEach(function (item) {
        item.addEventListener('click', function () {
            const dotList = [...document.querySelectorAll('.dots__item')];
            switch (dotList.indexOf(item)) {
                case 0:
                    removeClassInList(dotList);
                    addClassActive(item);
                    slideshowItem.forEach(item => removeClassActive(item));
                    addFourSlides(0, 3);
                    break;
                case 1:
                    removeClassInList(dotList);
                    addClassActive(item);
                    slideshowItem.forEach(item => removeClassActive(item));
                    addFourSlides(1, 4);
                    break;
                case 2:
                    removeClassInList(dotList);
                    addClassActive(item);
                    slideshowItem.forEach(item => removeClassActive(item));
                    addFourSlides(2, 5);
                    break;
            }
        });
    });
}
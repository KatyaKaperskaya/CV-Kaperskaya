const ACTIVE_SLIDE_CLASSNAME = 'services__slide_active';

const slidesNodes = Array.from(document.querySelectorAll('.services__slide'));
console.log(slidesNodes);
const prevButtonNode = document.querySelector('.services__prev');
const nextButtonNode = document.querySelector('.services__next');
let activeId;

init();

function init() {
    activeId = 0;

    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });

    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}

function setActiveSlideById(id) {
    console.log('setActiveSlideById activeId', activeId, 'id', id);
    const currentId = activeId;
    activeId = id;

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0: activeId + 1;
}
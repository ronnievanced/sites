// Аккордеон
const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');

accordeonTitle.forEach(function (item) {
    item.addEventListener('click', showAccordeon);
});

function showAccordeon() {
    this.classList.toggle('show');
    let loock = this.nextElementSibling;
    if (loock.style.maxHeight){
    loock.style.maxHeight = null;
    } else {
        loock.style.maxHeight = loock.scrollHeight + "px";
    }
}

const ratingCard = document.querySelectorAll('.answer__item');
if(ratingCard) {
    for (let card of ratingCard) {
        const cardLearnMoreBtn = card.querySelector('.answer__item-header');
        const learnMoreImg = card.querySelector('.answer__item-icon');

        cardLearnMoreBtn.addEventListener('click', function(){
            learnMoreImg.classList.toggle('answer__item-icon--active');
        })
    }
}

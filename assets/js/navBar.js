const createThumb = (pages) => {

    if (!$('.container-thumbs').is(":visible")) {

        //Create struct to thumnails
        var div = $('<div />', { class: 'container-thumbs options' }).appendTo('body')
        var listThumbs = $('<div/>', { id: 'thumb', class: 'list-thumbs options' })

        for (let i = 1; i <= pages; i++) {

            if (i == 1 || i == pages) {
                listThumbs.append($('<div/>', { id: 'page-thumb', class: 'page-thumb single-page options' }).append($('<p/>', { class: 'options' }).html("" + i), $('<div/>', { class: 'page-img options', 'onclick': 'goPage(' + i + ')' }).append($('<img/>', { class: 'options' + i, src: './assets/pages/' + i + '.jpg' }))))
            } else if (i % 2 == 0) {
                listThumbs.append($('<div/>', { id: 'page-thumb', class: 'page-thumb left-page options' }).append($('<p/>', { class: 'options' }).html("" + i), $('<div/>', { class: 'page-img options', 'onclick': 'goPage(' + i + ')' }).append($('<img/>', { class: 'options' + i, src: './assets/pages/' + i + '.jpg' }))))
            } else {
                listThumbs.append($('<div/>', { id: 'page-thumb', class: 'page-thumb right-page options' }).append($('<p/>', { class: 'options' }).html("" + i), $('<div/>', { class: 'page-img options', 'onclick': 'goPage(' + i + ')' }).append($('<img/>', { class: 'options' + i, src: './assets/pages/' + i + '.jpg' }))))
            }
        }

        div.append($('<div/>', { id: 'carousel', class: 'container-carousel options' }).append($('<button/>', { id: 'previous', class: 'button-carousel prev-button options' }).append($('<img/>', { src: './assets/pics/icons/left.png', class: 'options' })), listThumbs, $('<button/>', { id: 'next', class: 'button-carousel next-button options' }).append($('<img/>', { src: './assets/pics/icons/right.png', class: 'options' }))))

        //Events to scroll carousel
        const buttonPrev = document.getElementById('previous')
        const buttonNext = document.getElementById('next')
        const containerCarousel = document.getElementById('carousel')

        //Event to next Button to scroll carousel
        buttonNext.addEventListener('click', () => { containerCarousel.scrollLeft += containerCarousel.offsetWidth })

        //Event to previous Button to scroll carousel
        buttonPrev.addEventListener('click', () => { containerCarousel.scrollLeft -= containerCarousel.offsetWidth })

        $('.container-language').removeClass("visible");
        $('.container-search').removeClass("visible");

    } else {
        $('.container-thumbs').remove()
    }
}


const createSearch = () => {
    hideOption('.container-search', '.container-thumbs', '.container-language')

}

const changeLanguage = () => {
    hideOption('.container-language', '.container-thumbs', '.container-search')
}

//Hide options when one specific option is visible
function hideOption(container, opt1, opt2) {
    $(container).toggleClass("visible");
    if ($(opt1).hasClass("visible") || $(opt2).hasClass("visible") || $('.container-thumbs').is(":visible")) {
        $(opt1).removeClass("visible");
        $(opt2).removeClass("visible");
        $('.container-thumbs').remove()
    }
}

//Hide carousel when click out of it
document.addEventListener('click', function(event) {
    var text = $(event.target).attr('class')
    if (text != 'options') {
        $('.container-language').removeClass("visible");
        $('.container-search').removeClass("visible");
        $('.container-thumbs').remove()
    }
});
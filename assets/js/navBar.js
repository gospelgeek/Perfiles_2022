const createThum = (pages) => {

    //Create struct to thumnails
    var div = $('<div />', { class: 'container-thumbs' }).appendTo('body')
    var listThumbs = $('<div/>', { id: 'thumb', class: 'list-thumbs' })

    for (let i = 1; i <= pages; i++) {

        if (i == 1 || i == pages) {
            listThumbs.append($('<div/>', { id: 'page-thumb', class: 'page-thumb single-page' }).append($('<p/>', {}).html("" + i), $('<div/>', { class: 'page-img', 'onclick': 'goPage(' + i + ')' }).append($('<img/>', { class: '' + i, src: './assets/pages/' + i + '.jpg' }))))
        } else if (i % 2 == 0) {
            listThumbs.append($('<div/>', { id: 'page-thumb', class: 'page-thumb left-page' }).append($('<p/>', {}).html("" + i), $('<div/>', { class: 'page-img', 'onclick': 'goPage(' + i + ')' }).append($('<img/>', { class: '' + i, src: './assets/pages/' + i + '.jpg' }))))
        } else {
            listThumbs.append($('<div/>', { id: 'page-thumb', class: 'page-thumb right-page' }).append($('<p/>', {}).html("" + i), $('<div/>', { class: 'page-img', 'onclick': 'goPage(' + i + ')' }).append($('<img/>', { class: '' + i, src: './assets/pages/' + i + '.jpg' }))))
        }
    }

    div.append($('<div/>', { id: 'carousel', class: 'container-carousel' }).append($('<button/>', { id: 'previous', class: 'button-carousel prev-button' }).append($('<li/>', { class: 'bx bx-chevron-left' })), listThumbs, $('<button/>', { id: 'next', class: 'button-carousel next-button' }).append($('<li/>', { class: 'bx bx-chevron-right' }))))

    //Events to scroll carousel
    const buttonPrev = document.getElementById('previous')
    const buttonNext = document.getElementById('next')
    const containerCarousel = document.getElementById('carousel')

    //Event to next Button to scroll carousel
    buttonNext.addEventListener('click', () => { containerCarousel.scrollLeft += containerCarousel.offsetWidth })

    //Event to previous Button to scroll carousel
    buttonPrev.addEventListener('click', () => { containerCarousel.scrollLeft -= containerCarousel.offsetWidth })

}

//Hide carousel when click out of it
// document.addEventListener('click', function(event) {
//     var text = $(event.target).attr('class')
//     if (text != 'thumb' && text != 'bx bxs-grid' && text != 'container-thumbs' && text != 'container-carousel' && text != undefined) { $('.container-thumbs').remove() }
//     console.log(text);
// });

const createSearch = () => {}

const changeLanguage = () => {}

var pages;
$('.navigation li').click(function(event) {

    pages = $('.magazine').turn('pages')
    var option = $(event.target).closest('li').attr('class')

    switch (option) {
        case 'thumb':
            if (!$('.container-thumbs').is(":visible")) {
                createThum(pages)
            } else {
                $('.container-thumbs').remove()
            }
            break;
        case 'search':
            console.log('search');
            break;
        case 'language':
            console.log('language');
            break;
    }
});
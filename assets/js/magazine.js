//Función detectar el tamaño del dispostivo en que se abra la revista
function checkMobile() { return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); }

function addPage(page, book, lang) {

    var pages = book.turn('pages')
        // Create a new element for this page
    if (checkMobile()) {
        var element = $('<div />', { class: '' });
    } else {
        var element = $('<div />', {});

    }

    if (page % 2 == 0) {
        element.addClass('even')
    } else {
        element.addClass('odd')
    }


    // Add the page to the flipbook
    if (book.turn('addPage', element, page)) {
        // Add the initial HTML
        // It will contain a loader indicator and a gradient

        if (page !== 1 && page !== pages) {
            if (lang == 'es') {
                element.html('<div class="gradient"></div><div class="number-page" onclick=goPage(2)>' + page + ' | Edición 16 - 2022</div>');
            } else {
                element.html('<div class="gradient"></div><div class="number-page" onclick=goPage(2)>' + page + ' | Edition 16 - 2022</div>');
            }
        } else {
            element.html('<div class="gradient"></div>');
        }

        // Load the page
        loadPage(page, element, lang);
    }

    if (page == 42) {
        setTimeout(function() {
            crosswordGame()
        }, 1000);
    }

}


function loadPage(page, pageElement, lang) {

    // Create an image element

    var img = $('<img />', { class: 'backPage' + page , id: `background-page-${page}` });

    img.mousedown(function(e) {
        e.preventDefault();
    });

    img.load(function() {

        // Set the size
        $(this).css({ width: '100%', height: '100%' });

        // Add the image to the page after loaded

        $(this).appendTo(pageElement);

        // Remove the loader indicator

        pageElement.find('.loader').remove();
    });

    let background_diferent = [1]
    let background_normal_impar = [49, 27, 5, 21, 43, 53]

    // Load the page
    if (page % 2 !== 0) {

        if (background_normal_impar.includes(page)) {

            checkImage(`../assets/pics/backgrounds/${page}${(background_diferent.includes(page)) ? '.gif' : '.jpg'}`, img, pageElement, page)

        } else if (page == 31) {

            video = $('<div/>', { 'class': 'videoPages' }).append($('<video />', { muted: "muted", id: "page-31-video", src: '../assets/pics/videos/' + page + '.mp4', 'class': 'backVideo' + page }));
            video.appendTo(pageElement)

        } else {
            checkImage(`../assets/pics/backgrounds/${(page - 1)}${(background_diferent.includes(page)) ? '.gif' : '.jpg'}`, img, pageElement, page)
        }

    } else {
        checkImage(`../assets/pics/backgrounds/${page}${(background_diferent.includes(page)) ? '.gif' : '.jpg'}`, img, pageElement, page)
    }

    loadRegions(page, pageElement, lang);

}

function checkImage(url, img, element, page) {
    var request = new XMLHttpRequest();
    var video;
    request.open("GET", url, true);
    request.send();
    request.onload = function() {
        status = request.status;
        if (request.status == 200) //if(statusText == OK)
        {
            img.attr('src', url);
        } else {
            if (page == 26) {
                img.attr('src', '../assets/pics/videos/' + page + '.gif');
            } else {
                if (page % 2 !== 0) {
                    video = $('<div/>', { 'class': 'videoPages' }).append($('<video/>', { muted: true, playsinline: true, autoplay: true, src: '../assets/pics/videos/' + (page - 1) + '.mp4', loop: true, 'class': 'backVideo' + page }));

                } else {
                    video = $('<div/>', { 'class': 'videoPages' }).append($('<video/>', { muted: true, playsinline: true, autoplay: true, src: '../assets/pics/videos/' + page + '.mp4', loop: true, 'class': 'backVideo' + page }));
                }
                video.appendTo(element)
            }

        }
    }
}


// Load regions

function loadRegions(page, element, lang) {
    $.getJSON('./assets/pages-' + lang + '/' + page + '-page.json').
    done(function(data) {
        $.each(data, function(key, region) {
            addRegion(region, element, lang, page);
        });
    });
}

// Add region

function addRegion(region, pageElement, lang, page) {

    var reg = $('<div />', { id: region.id_unique, 'class': 'region ' + region['class'] }).append(addComponents(region, lang))


    reg.css({
        top: region.y,
        left: region.x,
        width: region.width,
        zIndex: region.zIndex
    }).attr('region-data', $.param(region.data || ''));

    reg.appendTo(pageElement);

}

// Process click on a region

function regionClick(event) {

    var region = $(event.target).closest('div');

    if (region.hasClass('region')) {

        $('.magazine-viewport').data().regionClicked = true;

        setTimeout(function() {
            $('.magazine-viewport').data().regionClicked = false;
        }, 100);

        var regionType = $.trim(region.attr('class').replace('region', ''));

        return processRegion(region, regionType);

    }

}

// Process the data of every region

function processRegion(region, regionType) {

    data = decodeParams(region.attr('region-data'));

    switch (regionType) {
        case 'link':
            window.open(data.url);
            break;

        case 'to-page':
            $('.magazine').turn('page', data.page);
            break;
    }

}


// http://code.google.com/p/chromium/issues/detail?id=128488

function isChrome() {

    return navigator.userAgent.indexOf('Chrome') != -1;

}

function disableControls(page) {
    if (page == 1)
        $('.previous-button').hide();
    else {
        $('.previous-button').show();
        setValueInputs()
    }

    if (page == $('.magazine').turn('pages'))
        $('.next-button').hide();
    else {
        $('.next-button').show();
        setValueInputs()
    }
}

// Set the width and height for the viewport


function resizeViewport() {

    var width = $(window).width(),
        height = $(window).height(),
        options = $('.magazine').turn('options');

    $('.magazine').removeClass('animated');

    $('.magazine-viewport').css({
        width: width,
        height: height
    })

    if ($('.magazine').turn('zoom') == 1) {
        var bound = calculateBound({
            width: options.width,
            height: options.height,
            boundWidth: Math.min(options.width, width),
            boundHeight: Math.min(options.height, height)
        });

        if (bound.width % 2 !== 0)
            bound.width -= 1;

        $('.magazine').css({ left: -bound.width / 2 });

        if (bound.width != $('.magazine').width() || bound.height != $('.magazine').height()) {

            if ($('.magazine').turn('page') == 1)
                $('.magazine').turn('peel', 'br');
        }

        if (window.matchMedia("(max-width: 468px)").matches) {
            $('.magazine').turn('display', 'single');
            $('.magazine').turn('size', bound.width, height * 0.7);
            $('.magazine').css({ left: -bound.width / 2 });

        } else if (window.matchMedia("(max-width: 720px)").matches) {
            $('.magazine').turn('display', 'single');
            $('.magazine').turn('size', bound.width * 0.8, height);
            $('.magazine').css({ left: -bound.width / 2.5 });
        } else {
            $('.magazine').turn('display', 'double');
            $('.magazine').turn('size', width * 0.72, height);
            $('.magazine').css({ left: -width / 2.77 });
        }

    }
}

//Go to the page
function goPage(page) {
    $('.magazine').turn('page', page);
    $('.container-thumbs').remove()
}

function playVideoPage() {
    let background_video = [16, 17, 20, 21, 22, 23, 24, 25, 32, 33, 40, 41, 1]

    if (background_video.includes($('.magazine').turn("page"))) {
        $(`.p${$('.magazine').turn("page")} video`)[0].play()
            //iniciar los videos desde el minuto 0
        $(`.p${$('.magazine').turn("page")} video`)[0].currentTime = 0
        $(`.p${$('.magazine').turn("page") + (($('.magazine').turn("page") % 2 == 0) ? 1 : -1)} video`)[0].play()
            //iniciar los videos desde el minuto 0
        $(`.p${$('.magazine').turn("page") + (($('.magazine').turn("page") % 2 == 0) ? 1 : -1)} video`)[0].currentTime = 0
    }

}
// Number of views in a flipbook

function numberOfViews(book) {
    return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook

function getViewNumber(book, page) {
    return parseInt((page || book.turn('page')) / 2 + 1, 10);
}

function moveBar(yes) {
    if (Modernizr && Modernizr.csstransforms) {
        $('#slider .ui-slider-handle').css({ zIndex: yes ? -1 : 10000 });
    }
}

// decode URL Parameters

function decodeParams(data) {

    var parts = data.split('&'),
        d, obj = {};

    for (var i = 0; i < parts.length; i++) {
        d = parts[i].split('=');
        obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
    }

    return obj;
}

// Calculate the width and height of a square within another square

function calculateBound(d) {

    var bound = { width: d.width, height: d.height };

    if (bound.width > d.boundWidth || bound.height > d.boundHeight) {

        var rel = bound.width / bound.height;

        if (d.boundWidth / rel > d.boundHeight && d.boundHeight * rel <= d.boundWidth) {

            bound.width = Math.round(d.boundHeight * rel);
            bound.height = d.boundHeight;

        } else {

            bound.width = d.boundWidth;
            bound.height = Math.round(d.boundWidth / rel);

        }
    }

    return bound;
}

// Detener audios
$('.magazine').bind("turning", function(event, page, view) {

    jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");
    $('.youtube-iframe').each(function(index) {

        $(this).attr('src', $(this).attr('src'));
        return false;
    });

    if (page == 30 || page == 31) {
        console.log('reproduce' + page);
        $('.backVideo31').trigger('play')
    } else {
        console.log('pausa' + page);
        $('.backVideo31').trigger('pause')
    }

    var fb = 0;
    var ins = 0;
    var rd = 0;
    var count_perfil = 0;
    var count_web = 0;

    var timerFacebook = setInterval(function() {
        fb = fb + 600;
        $('#facebook-animate').html(fb);
        if (fb >= 24000) {
            clearInterval(timerFacebook);
        }
    }, 150);

    var timerInstagram = setInterval(function() {
        ins = ins + 70;
        $('#instagram-counter').html(ins);
        if (ins >= 3300) {
            clearInterval(timerInstagram);
        }
    }, 100);

    var timerPerfiles = setInterval(function() {
        count_perfil += 120;
        $('#perfiles-animate').html(count_perfil);
        if (count_perfil >= 12000) {
            clearInterval(timerPerfiles);
        }
    }, 150);

    var timerWeb = setInterval(function() {
        count_web += 1200;
        $('#web-animate').html(count_web);
        if (count_web >= 99600) {
            clearInterval(timerWeb);
        }
    }, 150);

    var timerRadio = setInterval(function() {
        rd = rd + 28;
        $('#radio-counter').html(rd);
        if (rd >= 980) {
            clearInterval(timerRadio);
        }
    }, 300);
});

function reloadCrucigrama() {

    console.log($('.magazine').turn("page"));
    if (($('.magazine').turn("page") == 42 || $('.magazine').turn("page") == 43) && checkMobile()) {

        $(function() {
            if ($('#puzzle').html()) {
                $('#puzzle').remove();
                $('#puzzle-btn').remove();
                $('#puzzle-clues').remove();
                setTimeout(function() { crosswordGame(); }, 400);
                setTimeout(function() { stylesMobile(); }, 500);
            }
        });
    } else if ($('.magazine').turn("page") == 42 || $('.magazine').turn("page") == 43) {
        console.log('reload if 2');

        $(function() {
            if ($('#puzzle').html()) {
                $('#puzzle').remove();
                $('#puzzle-btn').remove();
                $('#puzzle-clues').remove();
                setTimeout(function() { crosswordGame(); }, 400);
            }
        });

    }
}
const addComponents = (region, lang) => {

    var element;

    switch (region.tag) {
        case 'p':
            element = addSVG('<p style="font-size:' + region.fontSize + '" xmlns="http://www.w3.org/1999/xhtml">' + region.data.content + '</p>', region)
            break;

        case 'h1':
            element = addSVG('<h1 style="font-size:' + region.fontSize + '" xmlns="http://www.w3.org/1999/xhtml">' + region.data.content + '</h1>', region)
            break;

        case 'img':
            element = '<img src=' + region.data.src + '>'
            break;

        case 'div':
            element = addSVG('<div class="' + region.class + '">' + region.data.content + '</div>', region)
            break;

        case 'a':
            element = addSVG('<a class="' + region.class + '" href="' + region.data.href + '" target="blank_">' + region.data.content + '</div>', region)
            break;

        case 'inputs':
            element = addSVG('<div class="">' + region.data.content + '</div>', region)
            break;

        case 'section':
            element = addSVG('<div><img src=' + region.data.src + '><p style="font-size:' + region.fontSize + '" xmlns="http://www.w3.org/1999/xhtml">' + region.data.content + '</p></div>', region)
            break;

        case 'modal':
            element = $('<div/>', { class: 'content-modal' }).append(
                $('<div/>', { id: region.id, class: 'modal' }).append(
                    $('<div/>', { class: 'print-modal' }).html(region.data.print),
                    $('<div/>', { class: 'header-modal' }).append($('<h1/>', {}).html(region.data.title)),
                    $('<img>', { src: region.data.src, class: 'title-modal' }),
                    $('<div/>', { class: 'body-modal' }).append($('<p/>', { class: region.class }).html(region.data.content))),
                addSVG('<a href="#' + region.id + '" rel="modal:open" class="button-magazine" xmlns="http://www.w3.org/1999/xhtml"><p style="font-size:' + region.fontSize + '">' + region.text + '</p><img src="' + region.icon + '"><a/>', region))

            break;

        case 'audio':
            element = $('<div/>', { class: 'content-audio' }).append(
                addSVG('<a class="button-magazine button-audio" id="button-' + region.id + '" xmlns="http://www.w3.org/1999/xhtml" onclick="showAudio(' + region.id + ')"><p style="font-size:' + region.fontSize + '">' + region.text + '</p><img src="' + region.icon + '"><a/>', region),
                '<audio id="' + region.id + '" class="audioPage" controls = true src="' + region.data.src + '"></audio>')
            break;

        case 'print':
            element = addSVG('<a href="' + region.data.url + '" class="button-magazine" target=1 xmlns="http://www.w3.org/1999/xhtml"><p style="font-size:' + region.fontSize + '">' + region.text + '</p><img src="' + region.icon + '"><a/>', region)
            break;

        case 'share':
            element = '<a href="' + region.data.url + "" + doClick(region.data.page, lang) + '" target="blank" class="button-magazine" id="' + region.id + '" xmlns="http://www.w3.org/1999/xhtml"><div id="' + region.id + '"><img src="' + region.icon + '"></div></a>'
            break;

        case 'tooltip':
            element = $('<a/>', {}).append(
                addSVG('<p class="main-text" style="font-size:' + region.fontSize + '" xmlns="http://www.w3.org/1999/xhtml"><em>' + region.data.author + '</em><img class="main-img" src=' + region.data.src + '></p>', region),
                addSVG('<div class="content-tooltip"><span id=' + region.id + ' class="span-content"><div class="content-img"><img src=' + region.data.src + ' class="img-content"></div><p style="font-size:' + region.fontSize + '" class="text-content">' + region.data.author + '<br>' + region.data.position + '<br>' + region.data.year + '</p></span></div>', region))
            break;

        case 'tooltip-tag':
            element = $('<a/>', {}).append(
                addSVG('<p class="main-text" xmlns="http://www.w3.org/1999/xhtml"><img class="main-img ' + region.classImg + '" src=' + region.data.src + '></p>', region),
                addSVG('<div class="content-tooltip" id=' + region.id + '><span class="span-content"><p style="font-size:' + region.fontSize + '" class="text-content">' + region.data.text + '</p></span></div>', region))
            break;

        case 'video':
            element = $('<iframe/>', { src: region.data.src, title: '', frameborder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen: true })
            break;

        case 'video-box':
            element = $('<div>', { id: region.id }).append($('<img/>', { src: region.data.img }), $('<iframe/>', { src: region.data.src, title: '', frameborder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen: true }))
            break;

        case 'crossword':
            element = addSVG('<div id="puzzle-wrapper"></div>', region);
            break;
        case 'all-component':
            element = `${region.components}`;
            break;
        case 'content-text':
            element = (`<div class="div-center-ubication-responsive">
                                 <div class='aux-class-content' style="width: 80%; heiht: 80%; ${region.styleBox}"> 
                                        <span class="responsive-font-content" style="${region.style}" >
                                        ${(region.data).text}
                                        </span> 
                                 </div> 
                            </div>`)
            break
        case 'img-content':
                element = (`<div class="div-center-ubication-responsive"> <img src="${region.data.src}" class='aux-img-class' style="width: 70%; height: 100%; object-fit: cover; ${region.style}"> </div>`)
            break;

        default:
            break;
    }

    return element
}

const addSVG = (content, region) => {
    return "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 " + region.viewX + " " + region.viewY + "' style='overflow: visible;' xml:space=''><foreignObject  width='100%' height='100%' style='overflow:visible;'>" + content + "</foreignObject></svg>"
}
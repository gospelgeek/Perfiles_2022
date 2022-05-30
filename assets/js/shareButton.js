//Function to replace # -> %23 to share the link
function doClick(page) {
    var urlLanguage = window.location.href
    console.log(urlLanguage);
    var url = ''
    if (urlLanguage.includes('pagina')) {
        url = 'https://perfiles-2022.netlify.app/#pagina/' + page;
    } else {
        url = 'https://perfiles-2022.netlify.app/#page/' + page;
    }

    url = url.replace('#', '%23')
    return url
}
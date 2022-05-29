//Function to replace # -> %23 to share the link
function doClick(page) {
    var urlLanguage = window.location.hash
    var url = ''
    if (urlLanguage.includes('pagina')) {
        url = 'https://perfiles-2022.netlify.app/index.html/#pagina/' + page;
        url = url.replace('#', '%23')
    } else {
        url = 'https://perfiles-2022.netlify.app/index-en.html#page/' + page;
        url = url.replace('#', '%23')
    }
    return url
}
var buttonWpp = document.getElementById('button-wpp')

function doClick(page) {
    var url = 'https://perfiles-2022.netlify.app/#pagina/' + page;
    url = url.replace('#', '%23')
    return url
}
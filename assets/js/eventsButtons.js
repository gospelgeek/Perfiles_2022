//Function to replace # -> %23 to share the link
const doClick = (page, lang) => {
    var url = ''
    if (lang == 'es') {
        url = 'https://perfiles-2022.netlify.app/#pagina/' + page;
    } else {
        url = 'https://perfiles-2022.netlify.app/#page/' + page;
    }

    url = url.replace('#', '%23')
    return url
}

let bandera = false

//Functions to show audio
const showAudio = (audio) => {
    $('#button-' + audio.id).parent().parent().css({ display: 'none' })
    $('#button-' + audio.id).css({ display: 'none' })
    $('#' + audio.id).css({ display: 'flex' })
    $('#' + audio.id)[0].play();
    bandera = true
}

const hideAudio = () => {
    if (!bandera) {
        $('.button-audio').parent().parent().css({ display: 'flex' })
        $('.button-audio').css({ display: 'flex' })
        $('.audioPage').css({ display: 'none' })

        setTimeout(() => {
            $('audio').each(function () {
                this.pause();
                this.currentTime = 0;
            });
        }, 400);

    }
    bandera = false
}


//Function to show menu

var btnNav = document.querySelector('.show-menu'),
    menu = document.querySelector('.menu');

btnNav.addEventListener('click', () => {
    btnNav.classList.toggle('active-menu');
    menu.classList.toggle('active-menu');
    $('.container-language').removeClass("visible");
    $('.container-search').removeClass("visible");
    $('.container-thumbs').remove()
});

//event click arrow left
$('#arrow-left').on('click', () => {
    carrusel_logic_click('left')
})

//event click arrow right
$('#arrow-right').on('click', () => {
    carrusel_logic_click('right')
})

//event click arrow right
$('.background-out-carrusel').on('click', () => {
    $('.carrusel-img-box').addClass('display-none')
})

let array_text = {
    '1': [
        'Distrito 35',
        'Distrito 34',
        'Distrito 32',
        'Distrito 31',
        'Distrito 30',
        'Distrito 29',
        'Distrito 28',
        'Distrito 27',
        'Distrito 26',
        'Distrito 25',
        'Distrito 22',
        'Distrito 21',
        'Distrito 16',
        'Distrito 15',
        'Distrito 14',
        'Distrito 12',
        'Distrito 9',
        'Distrito 5',
        'Distrito 5'
    ],
    '2': [
        'Distrito 24 Octubre 28-29 Campamento de esposas de pastores. Asistencia 71Hermanas',
        'Distrito 24 Octubre 28-29 Campamento de esposas de pastores.  Asistencia 71 Hermanas',
        'Distrito 18 Septiembre 9-11 Campamento de esposa de pastor en Riohacha, asistencia65 hermanas',
        'Distrito 18 Septiembre 9-11 Campamento de esposa de pastor en Riohacha, asistencia 65hermanas',
        'Distrito 6 Junio 24-26 Campamento de Damas en Ginebra, Valle.  Asistencia1.020',
        'Distrito 6 Junio 24-26 Campamento de Damas en Ginebra, Valle.  Asistencia 1.020',
        'Distrito 2 Abril 30-Mayo 1 Campamento de Damas. Asistencia320',
        'Distrito 2 Abril 30-Mayo 1 Campamento de Damas. Asistencia 320',
        'Distrito 2 Abril 30-Mayo 1 Campamento de Damas. Asistencia 320'
    ],
    '3': [
        'Mayo 12  Encuentro de hijas de pastores, Asistencia 50 Jovencitas',
        'Mayo 12  Encuentro de hijas de pastores, Asistencia 50 Jovencitas',
        'Distrito 35 Julio 14 Vigilia para esposas de pastores, Asistencia: 120',
        'Vigilia de Esposas de Pastores - Dto 35',
        'Vigilia de Esposas de Pastores - Dto 35'
    ],
    '4': [
        'Distrito 13 13 Agosto, 2sedes simultáneas en Cúcuta Asistencia 1.600',
        'Distrito 12 Octubre 8 y 9 Encuentro femenil en Carepa (410 Damas) y Currulao, Antioquia (500 Damas)',
        'Distrito 12 Octubre 8 y 9 Encuentro femenil en Carepa (410 Damas) y Currulao, Antioquia(500 Damas)',
        'Distrito 10 Junio 20 Encuentro femenil en Ibagué, Asistencia 600Damas',
        'Distrito 13 6 Agosto, Congreso en Saravena Arauca, Asistencia1050',
        'Distrito 8 Nov 5.  Congreso de Damas en Barranquilla Asistencia 710',
        'Distrito 13 13 Agosto, 2 sedes simultáneas en Cúcuta Asistencia 1.600 Damas Damas',
        'Distrito 13 6 Agosto, Congreso en Saravena Arauca, Asistencia1050 Damas',
        'Distrito 12 Octubre 8 y 9 Encuentro femenil en Carepa (410 Damas) y Currulao, Antioquia (500Damas)',
        'Distrito 13 13 Agosto, 2 sedes simultáneas en Cúcuta Asistencia1.600',
        'Distrito 13 6 Agosto, Congreso en Saravena Arauca, Asistencia 1050 Damas',
        'Distrito 10 Junio 20 Encuentro femenil en Ibagué, Asistencia 600 Damas',
        'Distrito 13 13 Agosto, 2 sedes simultáneas en Cúcuta Asistencia 1.600',
        'Distrito 13 13 Agosto, 2 sedes simultáneas en Cúcuta Asistencia 1.600'
    ],
    '5': [
        'Amazonas, Con la familia Misionera',
        'WhatsApp Image 2022-12-04 at 5.37.30 PM',
        'Amazonas, Santa Sofia',
        'WhatsApp Image 2022-12-04 at 5.37.29 PM',
        'IMG_3547',
        'Amazonas, Caballo Cocha, Perú ',
        'Amazonas, Grupo de esposas de pastores',
        'Amazonas, Islandia',
        'Amazonas, Culto en Puerto Nariño',
        'Amazonas, Sede central Encuentro femenil',
        'Amazonas, Hijas de pastores',
        'WhatsApp Image 2022-12-04 at 5.37.29 PM',
        'Amazonas sede3',
        'Amazonas 2da sede',
        'Amazonas Santa Sofia',
        'Damas ...',
        'Con la Hna Yorcelis, Lider Damas, Amazonas',
        'Evangelismo con Damas en Vista Alegre, Perú',
        'Amazonas Vistea alegre, Perú',
        'Amazonas, Capacitación a servidoras. Caballo Cocha, Perú',
        'Amazonas, Capacitación a servidoras. Caballo Cocha, Perú'
    ],
    '6': [
        'Distrito 35 Febrero 2 ESCALID, escuela de capacitación para lideres locales de Damas Dorcas.  Asistencia 300',
        'Distrito 35 Febrero 2 ESCALID, escuela de capacitación para lideres locales de Damas Dorcas.  Asistencia 300',
        '2do.Encuentro Nacional de Comités Distritales "Hacedoras de tu Palabra"',
        '1er Encuentro Nacional de Comités Distritales "Preparadas para toda buena obra"',
        '2do.Encuentro Nacional de Comités Distritales "Hacedoras de tu Palabra"',
        '2do.Encuentro Nacional de Comités Distritales "Hacedoras de tu Palabra"'

    ],
    '7': [
        'Grupo de niñas participando en el congreso',
        'Curazao, Congreso Damas',
        'FB_IMG_1657324082148',
        'Curazao, Amigas asistentes al congreso',
        'Curazao, Congreso Damas',
        'Curazao, Congreso de Damas',
        'Con los misioneros: Hno Carlos Pérez y Hna Mary Aneth Álvarez y comité local de Damas',
        'Con los misioneros: Hno Carlos Pérez y Hna Mary Aneth Álvarez y comité local de Damas'
    ]
}

function carrusel_logic_click(arrow) {
    //variables
    let max_img = $('.imagen-carrusel').find('img').length
    let id = $('.imagen-carrusel').find('.active-img').attr('id')
     console.log(id)

    //sacar del localstore
    let array_text_index = JSON.parse(localStorage.getItem('array_src'))

    //logic
    if (arrow == 'right') {
        if (Number(id.split('-')[1]) < max_img) {
            $(`#${id}`).removeClass('active-img')
            $(`#${id}`).addClass('display-none')
            $(`#img-${(Number(id.split('-')[1]) + 1)}`).addClass('active-img')
            $('.Text-slider-img').html(`${array_text[array_text_index][( Number(id.split('-')[1]) + 1 )]}`)
        }
    }
    else {
        if (Number(id.split('-')[1]) > 1) {
            $(`#${id}`).removeClass('active-img')
            $(`#img-${(Number(id.split('-')[1]) - 1)}`).addClass('active-img')
            $(`#img-${(Number(id.split('-')[1]) - 1)}`).removeClass('display-none')
            $('.Text-slider-img').html(`${array_text[array_text_index][(Number(id.split('-')[1]) - 1)]}`)
        }
    }

}

//Function to show carrusel
function click_boton_a_carrusel(e) {

    let array_src = {
        '1': [
            '16MsFBAb4GkhMFD4-libwM2yZ_UUETRG4',
            '1BM1OycvPES9rfHddhUddcX6FToUyttAm',
            '1KbZfmt5BBYtrUNZdPav9lFtlv8BHruAE',
            '1viZ--xZtYDEJg1Pj95_OK7gdtLbaYxfp',
            '13ghMJQvSdEOAaYENYUTZOrVeEW5NApEg',
            '1VpZQXVKd0U6XrC85FvtZCZHRE3jwU3qv',
            '19ANY1HiB8YMxeodWJGHoV5U8JuYPLCv0',
            '17FpThAcmCEO81igdyPaGUTJ07LL8vbzQ',
            '1W3PCyWsI0ZY4YRjG6kK45plNbWyU2wx-',
            '15_j562Gesbb4qJVIPpunKnFMQFL75Zep',
            '1_bHT9oZSmFkiFzjzjjddfq329XCGft7s',
            '16OBrYSP9eWVYC2M4pD7FugviIIvtgXon',
            '1aiZ2CS6woOG-mNnNwUUjf7R8171rGL40',
            '1lWl7olJYtKqo650lj4avjUJ9Jr55MT-g',
            '1hH9hz7uMBMlsyu3lNc1z0pBtKCD8IVBW',
            '15t5_fBv6PqokmaA938PGNHegmeoeWjVl',
            '1xIDcPGDHZU6NFLLBB7vO-60iMRPfPe9P',
        ],
        '2': [
            '1wVee52y3YGxmIQKmXufFajFYh6RWCIlU',
            '1X0wwM_QEC0gr27su5Uc38spp7lZtC8ro',
            '1eYStHaq15V9ymAj3ydPdqap8ayl0ZcEY',
            '1UReU3ErnudzFm8ED-i99fO3jsES4V90x',
            '111BqVUO-HsNeelQQS9Z9ORqF75N-nj88',
            '12VK0eMZCDmb2D9eIitNrejL6els0DkVx',
            '1IBISUH-A5jThRyP6zG5UJ9FsEgpqYonE',
            '1VScZ5IuSKBDwkjqjshQVEMIU4EKhOZQi'
        ],
        '3': [
            '1kt7ThRnZwJHruzKS0FyNTiG6X9yPNGG2',
            '1SWjtCff7bqdrafcG2O5MddmkHcOxMDJV',
            '1PThK6zyGgE7PYxOMqRHK9f-2pYO-Qarj',
            '1LLad2dZTlSakolb603-C3PdUo8b8cE3D'
        ],
        '4': [
            '14kZOjMMSmcsDXNPMsrST5CvqiaEZi7wP',
            '17vmiGAJAlR444oiXDAZZbGu15neuTqUS',
            '1JkYppDTlG2K4BHj5NrUPG5CX8pmAhp2Z',
            '1Mw1zk8hKcyRstPygj_AZg8MMCQksPRKP',
            '1NyDcvAzo_ays5xqn9fFhlSm2dNYqEWUF',
            '1PBLOMQnJsHWyND6RRnYzBDaxtE7Uv_CR',
            '1cnEvbSHOSu3v6VMUlE5IYjjHk8sad0a3',
            '1T4Em0K7u5T6XMcFDSRfKiuMpS0LjlcmS',
            '1_X1s94YGHPfwLOhEhMlm1uv7nmwVsIT6',
            '1tY1yHRtILdV6MEEk-N_iwb3MlKIQc9yk',
            '1saOrVM4m1In6bbU1LWyLfrfOSQLPQRKu',
            '1tTuS1ItZscCzz6NHWwQxPDVnc5lm9l9r',
            '1vdR5Bif4V76h_BAOYlLjqw7tnGgD4PTA'
        ],
        '5': [
            '1-tLah2adiXgljEkHpTTjr5iDvo7B4x_t',
            '12ykt5Zdn6pmOvn7zV46pW8d9wxH8hd6e',
            '1872k5ImYURyJxfZQX67A_ct2Ewez3vIv',
            '1AkfLMc625UEQffdY7Ii-wJ8DE8ibh-ze',
            '1BsRy_0q1KjF5EsCtuFtglYiWhI71sC1u',
            '1D9Jcx8cTT24ipwCFWwXiYNVWJL-4ZFCY',
            '1IIftSG4tll6KMLx5Y6wYagrq-hQYWgJi',
            '1OLXxK-_arathQGgLM9ET-rywo-_6dZeR',
            '1ZlqDm1-PY1O4IuL2gR5T7rMZI9Qs2brd',
            '1bHKEbBqRocvfYBO5cP-kgRt7p2x6Jvw1',
            '1bXTQyC4iAPVVdby9SEddWBTYguKqJsiV',
            '1cdiJOhNxay8lucVUrbDMLUPczSvJF4Ha',
            '1gxtV6cROVsGH5gzZ-CHtfAOp_x1p4Xnu',
            '1jScoTAGzhMMbgHldGkD9kN7eQAaZgY1S',
            '1lA6-q7d44HNiRKLSxG84aG-Hr--z7zWo',
            '1mmsZgiDYTaT7dkCuKEUBiw3M85ZkpUDr',
            '1nFz6DAcSvwHyk-9hbsinDIUWvKUNBsdr',
            '1nXYsELl--WAsle_KfoeEVgwS5Yg2OR9v',
            '1o9PeJje-zoRWLhHjqgAbxyLf7tcxfqAU',
            '1yXxMJnZcnRe1dQEPFK_QqZSYP75Wqmeg'
        ],
        '6': [
            '1HndZU5DX0eBL_es2-tBhwWBEWCoYAay6',
            '1K9kqVa2AijuCwaDPUre-t_uAwtccuN6P',
            '1jh0krFo3skvk_WgHKBOlTk9RETcdTCyS',
            '1t4_piEs2iBya-mo9sn7wGV6my1Ox-Qxx',
            '1vMVkmKUL-Z8m4EFgLWG3RZjpZxr7vJNt'
        ],
        '7': [
            '16yxPnsaR2GSuvW1utZgKOqONpxKIP80q',
            '17wD6ovJp6zJbd3lNV6lYHzCMKdeOHBnE',
            '1Nf0zEvTXMjhS5pJ9S4PRAwCel_nqOvai',
            '1SLiaz1CUttMZNZkpyCa0ccKLEw1eGynV',
            '1WKAbghm3rjKMa53uXFs7wNO1KUK6Db1j',
            '1aPUB4h40ScU5vsXIu4l6MzKNJH2BxTs1',
            '1uciUy6KlF43kWEFLpTZm_XXEoFQc6iQY'
        ]
    }



    
    $('.imagen-carrusel').empty()
    array_src[e].map((src, index) => {
        if (index == 0) {
            $('.Text-slider-img').html(`${array_text[e][0]}`)
            $('.imagen-carrusel').append(`<img id="img-${index + 1}" class="active-img" src="http://drive.google.com/uc?export=view&id=${src}">`)
        }
        else {
            $('.imagen-carrusel').append(`<img id="img-${index + 1}"  src="http://drive.google.com/uc?export=view&id=${src}">`)
        }
    })
     
    //guardar en el localstore la informacion
    localStorage.setItem('array_src', JSON.stringify(e))

    $('.carrusel-img-box').removeClass('display-none')

}
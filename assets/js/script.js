// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
function crosswordGame(prueba) {

    console.log('funcion cruci');

    (function($) {
        $(function() {
            // provide crossword entries in an array of objects like the following example
            // Position refers to the numerical order of an entry. Each position can have 
            // two entries: an across entry and a down entry
            var puzzleData = [{
                    clue: "<span>Horizontal</span><br>Capital del reino que gobernaba Asuero",
                    answer: "hegai",
                    position: 1,
                    orientation: "across",
                    startx: 3,
                    starty: 9
                },
                {
                    clue: "<span>Horizontal</span><br>Otro nombre de Ester",
                    answer: "mardoqueo",
                    position: 2,
                    orientation: "across",
                    startx: 10,
                    starty: 8
                },
                {
                    clue: "<span>Horizontal</span><br>Parentesco del hombre que crió a Ester",
                    answer: "saasgaz",
                    position: 3,
                    orientation: "across",
                    startx: 6,
                    starty: 6
                },
                {
                    clue: "<span>Horizontal</span><br>Nombre del príncipe que quiso exterminar al pueblo de Ester",
                    answer: "horca",
                    position: 4,
                    orientation: "across",
                    startx: 4,
                    starty: 4
                }, {
                    clue: "<span>Horizontal</span><br>Pueblo al que pertenecía Ester",
                    answer: "zeres",
                    position: 5,
                    orientation: "across",
                    startx: 16,
                    starty: 5
                }, {
                    clue: "<span>Horizontal</span><br>Padre de Ester",
                    answer: "gracia",
                    position: 6,
                    orientation: "across",
                    startx: 12,
                    starty: 10
                }, {
                    clue: "<span>Horizontal</span><br>Ester mandó al pueblo y sus doncellas que lo hicieran",
                    answer: "banquete",
                    position: 7,
                    orientation: "across",
                    startx: 1,
                    starty: 1
                }, {
                    clue: "<span>Horizontal</span><br>Reina insensata que antecedió a Ester",
                    answer: "sabia",
                    position: 8,
                    orientation: "across",
                    startx: 8,
                    starty: 2
                },

                {
                    clue: "<span>Vertical</span><br>Eunuco del rey, guarda de las mujeres",
                    answer: "susa",
                    position: 1,
                    orientation: "down",
                    startx: 6,
                    starty: 6
                },
                {
                    clue: "<span>Vertical</span><br>Familiar de Ester",
                    answer: "easadah",
                    position: 2,
                    orientation: "down",
                    startx: 8,
                    starty: 1
                },
                {
                    clue: "<span>Vertical</span><br>Eunuco del rey, guarda de las concubinas",
                    answer: "primo",
                    position: 3,
                    orientation: "down",
                    startx: 18,
                    starty: 4
                },
                {
                    clue: "<span>Vertical</span><br>Lo que preparo Amán para Mardoqueo",
                    answer: "aman",
                    position: 4,
                    orientation: "down",
                    startx: 11,
                    starty: 6
                },
                {
                    clue: "<span>Vertical</span><br>Mujer de Amán",
                    answer: "judio",
                    position: 5,
                    orientation: "down",
                    startx: 16,
                    starty: 7
                },
                {
                    clue: "<span>Vertical</span><br>La poesía Ester y con ella enamoró al rey Asuero",
                    answer: "abihail",
                    position: 6,
                    orientation: "down",
                    startx: 2,
                    starty: 1
                },
                {
                    clue: "<span>Vertical</span><br>Presente de Ester para el rey, cuando hizo su petición",
                    answer: "ayuno",
                    position: 7,
                    orientation: "down",
                    startx: 14,
                    starty: 4
                },
                {
                    clue: "<span>Vertical</span><br>Cualidad de Esther",
                    answer: "vasti",
                    position: 8,
                    orientation: "down",
                    startx: 20,
                    starty: 3
                }
            ]

            $('#puzzle-wrapper').crossword(puzzleData);


        })

    })(jQuery)

}
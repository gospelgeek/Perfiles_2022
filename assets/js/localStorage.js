//Guardar en el local storage los valores de los diferentes inputs de la revista
function getValueInputs(pag) {

    switch (pag) {
        case 8:
            let page_8 = {
                page: pag,
                cbox8_1: $('#cbox8_1').is(":checked"),
                cbox8_2: $('#cbox8_2').is(":checked"),
                cbox8_3: $('#cbox8_3').is(":checked"),
                cbox8_4: $('#cbox8_4').is(":checked"),
                cbox8_5: $('#cbox8_5').is(":checked"),
                cbox8_6: $('#cbox8_6').is(":checked"),
                input8_1: $('#input8_1').val(),
                input8_2: $('#input8_2').val(),
                input8_3: $('#input8_3').val(),
                input8_4: $('#input8_4').val(),
                input8_5: $('#input8_5').val(),
                input8_6: $('#input8_6').val()
            }
            localStorage.setItem('data8', JSON.stringify(page_8))
            break;

        case 10:
            let page_10 = {
                page: pag,
                input11_1: $('#input11_1').val(),
                input11_2: $('#input11_2').val(),
                input11_3: $('#input11_3').val(),
                input11_4: $('#input11_4').val(),
                input11_5: $('#input11_5').val(),
                input11_6: $('#input11_6').val()
            }
            localStorage.setItem('data10', JSON.stringify(page_10))
            break;

        case 14:
            let page_14 = {
                page: pag,
                input14_1: $('#input14_1').val(),
                input14_2: $('#input14_2').val(),
                input14_3: $('#input14_3').val()
            }
            localStorage.setItem('data14', JSON.stringify(page_14))
            break;

        case 16:
            let page_16 = {
                page: pag,
                cbox17_1: $('#cbox17_1').is(":checked"),
                cbox17_2: $('#cbox17_2').is(":checked"),
                cbox17_3: $('#cbox17_3').is(":checked"),
                cbox17_4: $('#cbox17_4').is(":checked"),
                input17_1: $('#input17_1').val(),
                input17_2: $('#input17_2').val(),
                input17_3: $('#input17_3').val(),
                input17_4: $('#input17_4').val(),
                input17_5: $('#input17_5').val(),
                input17_6: $('#input17_6').val(),
                input17_7: $('#input17_7').val(),
                input17_8: $('#input17_8').val(),
                input17_9: $('#input17_9').val(),
            }
            localStorage.setItem('data16', JSON.stringify(page_16))
            break;

        case 18:
            let page_18 = {
                page: pag,
                input19_1: $('#input19_1').val(),
                input19_2: $('#input19_2').val(),
                input19_3: $('#input19_3').val(),
                input19_4: $('#input19_4').val()
            }
            localStorage.setItem('data18', JSON.stringify(page_18))
            break;

        case 20:
            let page_20 = {
                page: pag,
                cbox21_1: $('#cbox21_1').is(":checked"),
                cbox21_2: $('#cbox21_2').is(":checked"),
                cbox21_3: $('#cbox21_3').is(":checked"),
                cbox21_4: $('#cbox21_4').is(":checked"),
                cbox21_5: $('#cbox21_5').is(":checked"),
                cbox21_6: $('#cbox21_6').is(":checked")
            }
            localStorage.setItem('data20', JSON.stringify(page_20))
            break;

        case 22:
            let page_22 = {
                page: pag,
                input22_1: $('#input22_1').val(),
                input22_2: $('#input22_2').val(),
                input22_3: $('#input22_3').val(),
                input22_4: $('#input22_4').val(),
                input22_5: $('#input22_5').val(),
                input22_6: $('#input22_6').val()
            }
            localStorage.setItem('data22', JSON.stringify(page_22))
            break;

        case 24:
            let page_24 = {
                page: pag,
                input24_1: $('#input24_1').val(),
                input24_2: $('#input24_2').val(),
                input24_3: $('#input24_3').val()
            }
            localStorage.setItem('data24', JSON.stringify(page_24))
            break;

        case 26:
            let page_26 = {
                page: pag,
                cbox27_1: $('#cbox27_1').is(":checked"),
                cbox27_2: $('#cbox27_2').is(":checked"),
                cbox27_3: $('#cbox27_3').is(":checked"),
                cbox27_4: $('#cbox27_4').is(":checked"),
                cbox27_5: $('#cbox27_5').is(":checked"),
                cbox27_6: $('#cbox27_6').is(":checked"),
                cbox27_7: $('#cbox27_7').is(":checked"),
                cbox27_8: $('#cbox27_8').is(":checked"),
                cbox27_9: $('#cbox27_9').is(":checked"),
                cbox27_10: $('#cbox27_10').is(":checked"),
                cbox27_11: $('#cbox27_11').is(":checked"),
                cbox27_12: $('#cbox27_12').is(":checked"),
                cbox27_13: $('#cbox27_13').is(":checked"),
                cbox27_14: $('#cbox27_14').is(":checked"),
                cbox27_15: $('#cbox27_15').is(":checked"),
                cbox27_16: $('#cbox27_16').is(":checked"),
                cbox27_17: $('#cbox27_17').is(":checked"),
                cbox27_18: $('#cbox27_18').is(":checked"),
                cbox27_19: $('#cbox27_19').is(":checked"),
                cbox27_20: $('#cbox27_20').is(":checked"),
                cbox27_21: $('#cbox27_21').is(":checked"),
                cbox27_22: $('#cbox27_22').is(":checked"),
            }
            localStorage.setItem('data26', JSON.stringify(page_26))
            break;

        case 30:
            let page_30 = {
                page: pag,
                select30_1: $('#select30_1').val().normalize("NFD").replace(/[\u0300-\u036f]/g, " ").toLowerCase(),
                input30_1: $('#input30_1').val(),
                input30_2: $('#input30_2').val(),
                input30_3: $('#input30_3').val(),
                input30_4: $('#input30_4').val(),
                input30_5: $('#input30_5').val(),
                input30_6: $('#input30_6').val(),
                input30_7: $('#input30_7').val(),
                input30_8: $('#input30_8').val(),
                input30_9: $('#input30_9').val(),
                input30_10: $('#input30_10').val(),
                input30_11: $('#input30_11').val(),
                input30_12: $('#input30_12').val(),
                input30_13: $('#input30_13').val(),
                input30_14: $('#input30_14').val(),
                input30_15: $('#input30_15').val(),
                input30_16: $('#input30_16').val(),
                input30_17: $('#input30_17').val(),
            }
            localStorage.setItem('data30', JSON.stringify(page_30))
            break;

        case 36:
            let page_36 = {
                page: pag,
                select37_1: $('#select37_1').val(),
                select37_2: $('#select37_2').val(),
                select37_3: $('#select37_3').val(),
                select37_4: $('#select37_4').val(),
                input37_1: $('#input37_1').val(),
                input37_2: $('#input37_2').val(),
                input37_3: $('#input37_3').val(),
            }
            localStorage.setItem('data36', JSON.stringify(page_36))
            break;
        case 38:
            let page_38 = {
                page: pag,
                select38_1: $('#select38_1').val(),
                select38_2: $('#select38_2').val(),
                select38_3: $('#select38_3').val(),
                select38_4: $('#select38_4').val(),
                select38_5: $('#select38_5').val(),
                select38_6: $('#select38_6').val(),
                select38_7: $('#select38_7').val(),
                select38_8: $('#select38_8').val(),
            }
            localStorage.setItem('data38', JSON.stringify(page_38))
            break;

        case 40:
            let page_40 = {
                page: pag,
                select41_1: $('#select41_1').val(),
                select41_2: $('#select41_2').val(),
                select41_3: $('#select41_3').val(),
                select41_4: $('#select41_4').val(),
                select41_5: $('#select41_5').val(),
                select41_6: $('#select41_6').val(),
                select41_7: $('#select41_7').val(),
                select41_8: $('#select41_8').val(),
            }
            localStorage.setItem('data40', JSON.stringify(page_40))
            break;

        case 48:
            let page_48 = {
                page: pag,
                select49_1: $('#select49_1').val(),
                select49_2: $('#select49_2').val(),
                select49_3: $('#select49_3').val(),
                select49_4: $('#select49_4').val(),
                select49_5: $('#select49_5').val(),
                select49_6: $('#select49_6').val()
            }
            localStorage.setItem('data48', JSON.stringify(page_48))
            break;
    }

    setValueInputs()
}

//Función setea los inputs con los valores guardados en el local storage cada que se recarga la revista
function setValueInputs() {
    var currentPage = $('.magazine').turn('page');
    var data;

    if (currentPage % 2 !== 0) {
        currentPage -= 1;
        data = JSON.parse(localStorage.getItem('data' + currentPage));
    } else
        data = JSON.parse(localStorage.getItem('data' + currentPage));

    if (data && data.page == currentPage) {

        Object.entries(data).forEach(([id, value]) => {
            if (value == true || value == false) {
                $("#" + id).prop('checked', value);
            } else {
                $('#' + id).val(value)

                if (data.page == 30) {
                    setBackInputs(id, value)
                } else if (data.page == 38) {
                    gsetBackSelect(id, value)
                } else if (data.page == 40) {
                    gsetBackSelectp41(id, value)
                }
            }
        });
    }
}


document.body.onload = setTimeout(setValueInputs, 2000);

$('body').on('click', '.btn_p1', function() {

    $('.btn_p1').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn1':
            let btn1 = {
                btn1: '#c5889e'
            }
            removeItemsStorage(["btn2", "btn3", "btn4", "btn5"]);
            localStorage.setItem('btn1', JSON.stringify(btn1))
            getScore($('#btn1').val(), 'btn_p1')
            break;
        case 'btn2':
            let btn2 = {
                btn2: '#c5889e'
            }
            removeItemsStorage(["btn1", "btn3", "btn4", "btn5"]);
            localStorage.setItem('btn2', JSON.stringify(btn2))
            getScore($('#btn2').val(), 'btn_p1')
            break;
        case 'btn3':
            let btn3 = {
                btn3: '#c5889e'
            }
            localStorage.clear();
            removeItemsStorage(["btn1", "btn2", "btn4", "btn5"]);
            localStorage.setItem('btn3', JSON.stringify(btn3))
            getScore($('#btn3').val(), 'btn_p1')
            break;
        case 'btn4':
            let btn4 = {
                btn4: '#c5889e'
            }
            localStorage.clear();
            removeItemsStorage(["btn1", "btn2", "btn3", "btn5"]);
            localStorage.setItem('btn4', JSON.stringify(btn4))
            getScore($('#btn4').val(), 'btn_p1')
            break;
        case 'btn5':
            let btn5 = {
                btn5: '#c5889e'
            }
            localStorage.clear();
            removeItemsStorage(["btn1", "btn2", "btn3", "btn4"]);
            localStorage.setItem('btn5', JSON.stringify(btn5))
            getScore($('#btn5').val(), 'btn_p1')
            break;
    }

    setValueButton()
})

$('body').on('click', '.btn_p2', function() {

    $('.btn_p2').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn6':
            let btn6 = {
                btn6: '#c5889e'
            }
            removeItemsStorage(["btn7", "btn8", "btn9", "btn10"]);
            localStorage.setItem('btn6', JSON.stringify(btn6))
            getScore($('#btn6').val(), 'btn_p2')
            break;
        case 'btn7':
            let btn7 = {
                btn7: '#c5889e'
            }
            removeItemsStorage(["btn6", "btn8", "btn9", "btn10"]);
            localStorage.setItem('btn7', JSON.stringify(btn7))
            getScore($('#btn7').val(), 'btn_p2')
            break;
        case 'btn8':
            let btn8 = {
                btn8: '#c5889e'
            }
            removeItemsStorage(["btn6", "btn7", "btn9", "btn10"]);
            localStorage.setItem('btn8', JSON.stringify(btn8))
            getScore($('#btn8').val(), 'btn_p2')
            break;
        case 'btn9':
            let btn9 = {
                btn9: '#c5889e'
            }
            removeItemsStorage(["btn6", "btn7", "btn8", "btn10"]);
            localStorage.setItem('btn9', JSON.stringify(btn9))
            getScore($('#btn9').val(), 'btn_p2')
            break;
        case 'btn10':
            let btn10 = {
                btn10: '#c5889e'
            }
            removeItemsStorage(["btn6", "btn7", "btn8", "btn9"]);
            localStorage.setItem('btn10', JSON.stringify(btn10))
            getScore($('#btn10').val(), 'btn_p2')
            break;
    }

    setValueButton()
})

$('body').on('click', '.btn_p3', function() {

    $('.btn_p3').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn11':
            let btn11 = {
                btn11: '#c5889e'
            }
            removeItemsStorage(["btn12", "btn13", "btn14", "btn15"]);
            localStorage.setItem('btn11', JSON.stringify(btn11))
            getScore($('#btn11').val(), 'btn_p3')
            break;
        case 'btn12':
            let btn12 = {
                btn12: '#c5889e'
            }
            removeItemsStorage(["btn11", "btn13", "btn14", "btn15"]);
            localStorage.setItem('btn12', JSON.stringify(btn12))
            getScore($('#btn12').val(), 'btn_p3')
            break;
        case 'btn13':
            let btn13 = {
                btn13: '#c5889e'
            }
            removeItemsStorage(["btn11", "btn12", "btn14", "btn15"]);
            localStorage.setItem('btn13', JSON.stringify(btn13))
            getScore($('#btn13').val(), 'btn_p3')
            break;
        case 'btn14':
            let btn14 = {
                btn14: '#c5889e'
            }
            removeItemsStorage(["btn11", "btn12", "btn13", "btn15"]);
            localStorage.setItem('btn14', JSON.stringify(btn14))
            getScore($('#btn14').val(), 'btn_p3')
            break;
        case 'btn15':
            let btn15 = {
                btn15: '#c5889e'
            }
            removeItemsStorage(["btn11", "btn12", "btn13", "btn14"]);
            localStorage.setItem('btn15', JSON.stringify(btn15))
            getScore($('#btn15').val(), 'btn_p3')
            break;
    }

    setValueButton()
})

$('body').on('click', '.btn_p4', function() {

    $('.btn_p4').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn16':
            let btn16 = {
                btn16: '#c5889e'
            }
            removeItemsStorage(["btn17", "btn18", "btn19", "btn20"]);
            localStorage.setItem('btn16', JSON.stringify(btn16))
            getScore($('#btn16').val(), 'btn_p4')
            break;
        case 'btn17':
            let btn17 = {
                btn17: '#c5889e'
            }
            removeItemsStorage(["btn16", "btn18", "btn19", "btn20"]);
            localStorage.setItem('btn17', JSON.stringify(btn17))
            getScore($('#btn17').val(), 'btn_p4')
            break;
        case 'btn18':
            let btn18 = {
                btn18: '#c5889e'
            }
            removeItemsStorage(["btn16", "btn17", "btn19", "btn20"]);
            localStorage.setItem('btn18', JSON.stringify(btn18))
            getScore($('#btn18').val(), 'btn_p4')
            break;
        case 'btn19':
            let btn19 = {
                btn19: '#c5889e'
            }
            removeItemsStorage(["btn16", "btn17", "btn18", "btn20"]);
            localStorage.setItem('btn19', JSON.stringify(btn19))
            getScore($('#btn19').val(), 'btn_p4')
            break;
        case 'btn20':
            let btn20 = {
                btn20: '#c5889e'
            }
            removeItemsStorage(["btn16", "btn17", "btn18", "btn19"]);
            localStorage.setItem('btn20', JSON.stringify(btn20))
            getScore($('#btn20').val(), 'btn_p4')
            break;
    }

    setValueButton()
})
$('body').on('click', '.btn_p5', function() {

    $('.btn_p5').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn21':
            let btn21 = {
                btn21: '#c5889e'
            }
            removeItemsStorage(["btn22", "btn23", "btn24", "btn25"]);
            localStorage.setItem('btn21', JSON.stringify(btn21))
            getScore($('#btn21').val(), 'btn_p5')
            break;
        case 'btn22':
            let btn22 = {
                btn22: '#c5889e'
            }
            removeItemsStorage(["btn21", "btn23", "btn24", "btn25"]);
            localStorage.setItem('btn22', JSON.stringify(btn22))
            getScore($('#btn22').val(), 'btn_p5')
            break;
        case 'btn23':
            let btn23 = {
                btn23: '#c5889e'
            }
            removeItemsStorage(["btn21", "btn22", "btn24", "btn25"]);
            localStorage.setItem('btn23', JSON.stringify(btn23))
            getScore($('#btn23').val(), 'btn_p5')
            break;
        case 'btn24':
            let btn24 = {
                btn24: '#c5889e'
            }
            removeItemsStorage(["btn21", "btn22", "btn23", "btn25"]);
            localStorage.setItem('btn24', JSON.stringify(btn24))
            getScore($('#btn24').val(), 'btn_p5')
            break;
        case 'btn25':
            let btn25 = {
                btn25: '#c5889e'
            }
            removeItemsStorage(["btn21", "btn22", "btn23", "btn24"]);
            localStorage.setItem('btn25', JSON.stringify(btn25))
            getScore($('#btn25').val(), 'btn_p5')
            break;
    }

    setValueButton()
})
$('body').on('click', '.btn_p6', function() {

    $('.btn_p6').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn26':
            let btn26 = {
                btn26: '#c5889e'
            }
            removeItemsStorage(["btn27", "btn28", "btn29", "btn30"]);
            localStorage.setItem('btn26', JSON.stringify(btn26))
            getScore($('#btn26').val(), 'btn_p6')
            break;
        case 'btn27':
            let btn27 = {
                btn27: '#c5889e'
            }
            removeItemsStorage(["btn26", "btn28", "btn29", "btn30"]);
            localStorage.setItem('btn27', JSON.stringify(btn27))
            getScore($('#btn27').val(), 'btn_p6')
            break;
        case 'btn28':
            let btn28 = {
                btn28: '#c5889e'
            }
            removeItemsStorage(["btn26", "btn27", "btn29", "btn30"]);
            localStorage.setItem('btn28', JSON.stringify(btn28))
            getScore($('#btn28').val(), 'btn_p6')
            break;
        case 'btn29':
            let btn29 = {
                btn29: '#c5889e'
            }
            removeItemsStorage(["btn26", "btn27", "btn28", "btn30"]);
            localStorage.setItem('btn29', JSON.stringify(btn29))
            getScore($('#btn29').val(), 'btn_p6')
            break;
        case 'btn30':
            let btn30 = {
                btn30: '#c5889e'
            }
            removeItemsStorage(["btn26", "btn27", "btn28", "btn29"]);
            localStorage.setItem('btn30', JSON.stringify(btn30))
            getScore($('#btn30').val(), 'btn_p6')
            break;
    }

    setValueButton()
})

$('body').on('click', '.btn_p7', function() {

    $('.btn_p7').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn31':
            let btn31 = {
                btn31: '#c5889e'
            }
            removeItemsStorage(["btn32", "btn33", "btn34", "btn35"]);
            localStorage.setItem('btn31', JSON.stringify(btn31));
            getScore($('#btn31').val(), 'btn_p7')
            break;
        case 'btn32':
            let btn32 = {
                btn32: '#c5889e'
            }
            removeItemsStorage(["btn31", "btn33", "btn34", "btn35"]);
            localStorage.setItem('btn32', JSON.stringify(btn32));
            getScore($('#btn32').val(), 'btn_p7')
            break;
        case 'btn33':
            let btn33 = {
                btn33: '#c5889e'
            }
            removeItemsStorage(["btn31", "btn32", "btn34", "btn35"]);
            localStorage.setItem('btn33', JSON.stringify(btn33))
            getScore($('#btn33').val(), 'btn_p7')

            break;
        case 'btn34':
            let btn34 = {
                btn34: '#c5889e'
            }
            removeItemsStorage(["btn31", "btn32", "btn33", "btn35"]);
            localStorage.setItem('btn34', JSON.stringify(btn34))
            getScore($('#btn34').val(), 'btn_p7')
            break;
        case 'btn35':
            let btn35 = {
                btn35: '#c5889e'
            }
            removeItemsStorage(["btn31", "btn32", "btn33", "btn34"]);
            localStorage.setItem('btn35', JSON.stringify(btn35))
            getScore($('#btn35').val(), 'btn_p7')
            break;
    }

    setValueButton()
})

$('body').on('click', '.btn_p8', function() {

    $('.btn_p8').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn36':
            let btn36 = {
                btn36: '#c5889e'
            }
            removeItemsStorage(["btn37", "btn38", "btn39", "btn40"]);
            localStorage.setItem('btn36', JSON.stringify(btn36));
            getScore($('#btn36').val(), 'btn_p8')
            break;
        case 'btn37':
            let btn37 = {
                btn37: '#c5889e'
            }
            removeItemsStorage(["btn36", "btn38", "btn39", "btn40"]);
            localStorage.setItem('btn37', JSON.stringify(btn37));
            getScore($('#btn37').val(), 'btn_p8')
            break;
        case 'btn38':
            let btn38 = {
                btn38: '#c5889e'
            }
            removeItemsStorage(["btn36", "btn37", "btn39", "btn40"]);
            localStorage.setItem('btn38', JSON.stringify(btn38));
            getScore($('#btn38').val(), 'btn_p8')
            break;
        case 'btn39':
            let btn39 = {
                btn39: '#c5889e'
            }
            removeItemsStorage(["btn36", "btn37", "btn38", "btn40"]);
            localStorage.setItem('btn39', JSON.stringify(btn39));
            getScore($('#btn39').val(), 'btn_p8')
            break;
        case 'btn40':
            let btn40 = {
                btn40: '#c5889e'
            }
            removeItemsStorage(["btn36", "btn37", "btn38", "btn39"]);
            localStorage.setItem('btn40', JSON.stringify(btn40));
            getScore($('#btn40').val(), 'btn_p8')
            break;
    }
    setValueButton()
})

$('body').on('click', '.btn_p9', function() {

    $('.btn_p9').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');

    switch ($(this).attr('id')) {
        case 'btn41':
            let btn41 = {
                btn41: '#c5889e'
            }
            removeItemsStorage(["btn42", "btn43", "btn44", "btn45"]);
            localStorage.setItem('btn41', JSON.stringify(btn41))
            getScore($('#btn41').val(), 'btn_p9')
            break;
        case 'btn42':
            let btn42 = {
                btn42: '#c5889e'
            }
            removeItemsStorage(["btn41", "btn43", "btn44", "btn45"]);
            localStorage.setItem('btn42', JSON.stringify(btn42))
            getScore($('#btn42').val(), 'btn_p9')
            break;
        case 'btn43':
            let btn43 = {
                btn43: '#c5889e'
            }
            removeItemsStorage(["btn41", "btn42", "btn44", "btn45"]);
            localStorage.setItem('btn43', JSON.stringify(btn43))
            getScore($('#btn43').val(), 'btn_p9')
            break;
        case 'btn44':
            let btn44 = {
                btn44: '#c5889e'
            }
            removeItemsStorage(["btn41", "btn42", "btn43", "btn45"]);
            localStorage.setItem('btn44', JSON.stringify(btn44))
            getScore($('#btn44').val(), 'btn_p9')
            break;
        case 'btn45':
            let btn45 = {
                btn45: '#c5889e'
            }
            removeItemsStorage(["btn41", "btn42", "btn43", "btn44"]);
            localStorage.setItem('btn45', JSON.stringify(btn45))
            getScore($('#btn45').val(), 'btn_p9')
            break;
    }

    setValueButton()
})
$('body').on('click', '.btn_p10', function() {

    $('.btn_p10').css({ 'background-color': '#ffffff', 'border': '1px solid gray' });
    $('#' + $(this).attr('id')).css('border', '#c5889e');


    switch ($(this).attr('id')) {
        case 'btn46':
            let btn46 = {
                btn46: '#c5889e'
            }
            removeItemsStorage(["btn47", "btn48", "btn49", "btn50"]);
            localStorage.setItem('btn46', JSON.stringify(btn46))
            getScore($('#btn46').val(), 'btn_p10')
            break;
        case 'btn47':
            let btn47 = {
                btn47: '#c5889e'
            }
            removeItemsStorage(["btn46", "btn48", "btn49", "btn50"]);
            localStorage.setItem('btn47', JSON.stringify(btn47))
            getScore($('#btn47').val(), 'btn_p10')
            break;
        case 'btn48':
            let btn48 = {
                btn48: '#c5889e'
            }
            removeItemsStorage(["btn46", "btn47", "btn49", "btn50"]);
            localStorage.setItem('btn48', JSON.stringify(btn48))
            getScore($('#btn48').val(), 'btn_p10')
            break;
        case 'btn49':
            let btn49 = {
                btn49: '#c5889e'
            }
            removeItemsStorage(["btn46", "btn47", "btn48", "btn50"]);
            localStorage.setItem('btn49', JSON.stringify(btn49))
            getScore($('#btn49').val(), 'btn_p10')
            break;
        case 'btn50':
            let btn50 = {
                btn50: '#c5889e'
            }
            removeItemsStorage(["btn46", "btn47", "btn48", "btn49"]);
            localStorage.setItem('btn50', JSON.stringify(btn50))
            getScore($('#btn50').val(), 'btn_p10')
            break;
    }

    setValueButton()
})

function setValueButton() {

    for (let index = 1; index <= 50; index++) {

        let data = JSON.parse(localStorage.getItem('btn' + index));

        if (data) {
            Object.entries(data).forEach(([id, value]) => {
                $('#' + id).css('background-color', value)
            });
        }
    }
}

function removeItemsStorage(keysToRemove) {
    for (key of keysToRemove) {
        localStorage.removeItem(key);
    }
}

document.body.onload = setTimeout(setValueButton, 2000);

let scoreArray = []

function getScore(score, question) {

    let repeat = false

    scoreObj = {
        question: question,
        score: score
    }
    if (scoreArray.length == 0) {
        scoreArray.push(scoreObj)
        repeat = true
    } else {
        for (let i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i].question == scoreObj.question) {
                repeat = true
            }
        }
    }

    if (repeat) {
        for (let i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i].question == scoreObj.question) {
                scoreArray[i] = scoreObj
            }
        }
    } else {
        scoreArray.push(scoreObj)
    }

    if (scoreArray.length == 10) {
        calculatedScore(scoreArray)
    }
}

function calculatedScore(scores) {

    let totalScore = 0;
    scores.forEach(score => {
        totalScore += parseInt(score.score)
    });

    getResult(totalScore)

    localStorage.setItem('totalScore', totalScore)

    score()
}

function getResult(totalScore) {

    var tag = document.createElement("p");
    tag.setAttribute('id', 'text_score13');

    var title = document.createElement("h3");
    title.setAttribute('id', 'text_title13');
    var titleText = document.createTextNode("PUNTAJE OBTENIDO:")

    if (totalScore == null) {
        var text = document.createTextNode("Para ver tu puntaje debes responder todas las preguntas.");
    } else if (totalScore <= 16) {
        var text = document.createTextNode("Has obtenido una puntuación BAJA está relacionada con un bajo nivel de felicidad. Esta puntuación puede ser un indicador de que algo no va bien en tu vida. Por ello, es importante encontrar aquello que te esté generando malestar.  Intenta acercarte más a Dios, recuerda que Él es la fuente del gozo y la felicidad. Si sientes que necesitas ayuda profesional no dudes en buscarla.");
    } else if (totalScore > 16 && totalScore <= 33) {

        var text = document.createTextNode("Has obtenido una puntuación MEDIA implica una capacidad moderada para experimentar alegría y sensaciones placenteras. A pesar de que no parece que presentes ningún tipo de trastorno o síntomas propios de la depresión, es importante que intentes trabajar en tus habilidades personales para poder llegar a ser una persona completamente feliz. ¿Qué cambios necesitas en tu vida para ser feliz?");

    } else if (totalScore > 33 && totalScore <= 50) {
        var text = document.createTextNode("Has obtenido una puntuación ALTO en esta escala, ¡Te felicito! Las puntuaciones altas en esta escala se relacionan con personas que hacen suya la alegría de los demás. Una actitud positiva es muy importante para fortalecer nuestra salud mental, puntuar alto significa que eres una persona feliz y que sueles tener facilidad para experimentar este tipo de emociones de manera regular. Aun así, recuerda que para mantener este estado debes fortalecer cada día tu vida espiritual.");
    }

    tag.appendChild(text);
    title.appendChild(titleText)
    var element = document.getElementById("modalReflexion-p13");
    if (document.body.contains(document.getElementById('text_score13')) || document.body.contains(document.getElementById('text_title13'))) {
        let tagPrevious = document.getElementById('text_score13')
        let tagTitle = document.getElementById('text_title13')
        element.removeChild(tagPrevious)
        element.removeChild(tagTitle)
    }
    element.appendChild(title);
    element.appendChild(tag);


}

function score() {

    let data = localStorage.getItem('totalScore');
    getResult(data)

}

document.body.onload = setTimeout(score, 2000);


function getAnswerSelect(element) {

    let audio = new Audio('assets/audios/correct.wav');
    let audioIncorrect = new Audio('assets/audios/incorrecto.wav');

    switch (element.id) {
        case 'select38_1':
            if (element.value == 'value4') {
                $('#select38_1').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select38_1').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;

        case 'select38_2':
            if (element.value == 'value6') {
                $('#select38_2').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select38_2').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'select38_3':
            if (element.value == 'value5') {
                $('#select38_3').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select38_3').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;

        case 'select38_4':
            if (element.value == 'value2') {
                $('#select38_4').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select38_4').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'select38_5':
            if (element.value == 'value7') {
                $('#select38_5').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select38_5').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'select38_6':
            if (element.value == 'value8') {
                $('#select38_6').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select38_6').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'select38_7':
            if (element.value == 'value3') {
                $('#select38_7').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select38_7').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
    }

    getValueInputs(38)

}

function gsetBackSelect(id, value) {

    let val = value.toString()
    val = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    switch (id) {
        case 'select38_1':
            if (val == 'value4') {
                $('#select38_1').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            } else {
                $('#select38_1').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
            }
            break;
        case 'select38_2':
            if (val == 'value6') {
                $('#select38_2').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            } else {
                $('#select38_2').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
            }
            break;
        case 'select38_3':
            if (val == 'value5') {
                $('#select38_3').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            } else {
                $('#select38_3').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
            }
            break;
        case 'select38_4':
            if (val == 'value2') {
                $('#select38_4').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            } else {
                $('#select38_4').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
            }
            break;
        case 'select38_5':
            if (val == 'value7') {
                $('#select38_5').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            } else {
                $('#select38_5').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
            }
            break;
        case 'select38_6':
            if (val == 'value8') {
                $('#select38_6').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            } else {
                $('#select38_6').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
            }
            break;
        case 'select38_7':
            if (val == 'value3') {
                $('#select38_7').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            } else {
                $('#select38_7').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
            }
            break;

    }

}

function getAnswerIntermedio1(element) {

    let value = element.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let audio = new Audio('assets/audios/correct.wav');
    let audioIncorrect = new Audio('assets/audios/incorrecto.wav');

    switch (element.id) {
        case 'input30_7':
            //expresion regular que permita espacio en blanco al final
            
            if (value === 'acab' || value === 'acab ') {
               // $('#input30_7').css({ 'border': 'rgb(103, 246, 103) 10px solid', 'color': '#000' })
                $('#input30_7').removeClass('borde-incorrect-answer')
               $('#input30_7').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();
                console.log('correcto')
            } else {
                //$('#input30_7').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })
                $('#input30_7').removeClass('borde-correct-answer')
                $('#input30_7').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'input30_8':
            if (value == 'juda' || value == 'juda ') {
                //$('#input30_8').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
                $('#input30_8').removeClass('borde-incorrect-answer')
                $('#input30_8').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();
            } else {
                //$('#input30_8').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                $('#input30_8').removeClass('borde-correct-answer')
                $('#input30_8').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'input30_9':
            if (value == '7' || value == '7 ') {
                //$('#input30_9').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
                $('#input30_9').removeClass('borde-incorrect-answer')
                $('#input30_9').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();
            } else {
                //$('#input30_9').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                $('#input30_9').removeClass('borde-correct-answer')
                $('#input30_9').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'input30_10':
            if (value == 'levanto' || value == 'levanto ') {
                //$('#input30_10').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
                $('#input30_10').removeClass('borde-incorrect-answer')
                $('#input30_10').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();
            } else {
                //$('#input30_10').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                $('#input30_10').removeClass('borde-correct-answer')
                $('#input30_10').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'input30_11':
            if (value == 'destruyo' || value == 'destruyo ') {
                //$('#input30_11').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
                $('#input30_11').removeClass('borde-incorrect-answer')
                $('#input30_11').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();
            } else {
                //$('#input30_11').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                $('#input30_11').removeClass('borde-correct-answer')
                $('#input30_11').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'input30_12':
            if (value == 'josaba' || value == 'josaba ') {
                //$('#input30_12').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
                $('#input30_12').removeClass('borde-incorrect-answer')
                $('#input30_12').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();

            } else {
                //$('#input30_12').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                $('#input30_12').removeClass('borde-correct-answer')
                $('#input30_12').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'input30_13':
            if (value == '6' || value == '6 ') {
                //$('#input30_13').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
                $('#input30_13').removeClass('borde-incorrect-answer')
                $('#input30_13').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();
            } else {
               // $('#input30_13').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                $('#input30_13').removeClass('borde-correct-answer')
                $('#input30_13').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'input30_14':
            if (value == 'baal' || value == 'baal ') {
                //$('#input30_14').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
                $('#input30_14').removeClass('borde-incorrect-answer')
                $('#input30_14').addClass('borde-correct-answer')
                audio.volume = 0.5;
                audio.play();
            } else {
                //$('#input30_14').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                $('#input30_14').removeClass('borde-correct-answer')
                $('#input30_14').addClass('borde-incorrect-answer')
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;

    }
    getValueInputs(30)

}

function setBackInputs(id, value) {

    let val = value.toString()
    val = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    switch (id) {

        case 'input30_7':
            if (val == 'acab') {
                $('#input30_7').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_7').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;
        case 'input30_8':
            if (val == 'juda') {
                $('#input30_8').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_8').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;
        case 'input30_9':
            if (val == '7') {
                $('#input30_9').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_9').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;
        case 'input30_10':
            if (val == 'levanto') {
                $('#input30_10').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_10').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;
        case 'input30_11':
            if (val == 'destruyo') {
                $('#input30_11').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_11').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;
        case 'input30_12':
            if (val == 'josaba') {
                $('#input30_12').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_12').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;
        case 'input30_13':
            if (val == '6') {
                $('#input30_13').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_13').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;
        case 'input30_14':
            if (val == 'baal') {
                $('#input30_14').css({ 'border': 'rgb(103, 246, 103) 6px solid', 'color': '#000' })
            } else {
                $('#input30_14').css({ 'border': 'rgb(244, 64, 64) 10px solid', 'color': '#000' })

            }
            break;

        default:
            break;
    }
}

function getAnswerSelectp41(element) {

    let audio = new Audio('assets/audios/correct.wav');
    let audioIncorrect = new Audio('assets/audios/incorrecto.wav');
    

    switch (element.id) {
        case 'select41_1':
            if (element.value == 'value1') {
                $('#select41_1').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select41_1').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000'})
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;

        case 'select41_2':
            if (element.value == 'value2') {
                $('#select41_2').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select41_2').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'select41_3':
            if (element.value == 'value3') {
                $('#select41_3').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select41_3').css({'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;

        case 'select41_4':
            if (element.value == 'value4') {
                $('#select41_4').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select41_4').css({ 'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
        case 'select41_5':
            if (element.value == 'value5') {
                $('#select41_5').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
                audio.volume = 0.5;
                audio.play();
            } else {
                $('#select41_5').css({'border': 'rgb(244, 64, 64) 6px solid', 'color': '#000' })
                audioIncorrect.volume = 0.5;
                audioIncorrect.play();
            }
            break;
    }

    getValueInputs(40)

}

function gsetBackSelectp41(id, value) {

    let val = value.toString()
    val = val.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    switch (id) {
        case 'select41_1':
            if (val == 'value1') {
                $('#select41_1').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            }
            break;

        case 'select41_2':
            if (val == 'value2') {
                $('#select41_2').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            }
            break;
        case 'select41_3':
            if (val == 'value3') {
                $('#select41_3').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            }
            break;

        case 'select41_4':
            if (val == 'value4') {
                $('#select41_4').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            }
            break;
        case 'select41_5':
            if (val == 'value5') {
                $('#select41_5').css({ 'border': 'rgb(103, 246, 103) 6px solid' })
            }
            break;
    }

}
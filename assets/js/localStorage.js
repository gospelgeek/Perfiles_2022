function getValueInputs(pag) {

    switch (pag) {
        case 8:
            let page_8 = {
                page: pag,
                cbox1: $('#cbox1').is(":checked"),
                cbox2: $('#cbox2').is(":checked"),
                cbox3: $('#cbox3').is(":checked"),
                cbox4: $('#cbox4').is(":checked"),
                cbox5: $('#cbox5').is(":checked"),
                cbox6: $('#cbox6').is(":checked"),
                input2: $('#input2').val(),
                input3: $('#input3').val(),
                input4: $('#input4').val(),
                input5: $('#input5').val(),
                input6: $('#input6').val(),
                input7: $('#input7').val()
            }
            console.log($('#input6').val());
            localStorage.setItem('data8', JSON.stringify(page_8))
            break;

        case 10:
            let page_10 = {
                page: pag,
                input1: $('#input8').val(),
                input2: $('#input9').val(),
                input3: $('#input10').val(),
                input4: $('#input11').val(),
                input5: $('#input12').val(),
                input6: $('#input13').val()
            }
            localStorage.setItem('data10', JSON.stringify(page_10))
            break;

        case 14:
            let page_14 = {
                page: pag,
                input1: $('#input14').val(),
                input2: $('#input15').val(),
                input3: $('#input16').val()
            }
            localStorage.setItem('data14', JSON.stringify(page_14))
            break;

    }

    setValueInputs()
}

function setValueInputs() {
    var currentPage = $('.magazine').turn('page');
    var data;

    if (currentPage % 2 !== 0) {
        currentPage -= 1;
        data = JSON.parse(localStorage.getItem('data' + currentPage));
    } else
        data = JSON.parse(localStorage.getItem('data' + currentPage));

    if (data && data.page == currentPage) {
        console.log(data);
        Object.entries(data).forEach(([id, value]) => {
            if (value == true || value == false) {
                $("#" + id).prop('checked', value);
            } else {
                $('#' + id).val(value)
            }
        });
    }
}

document.body.onload = setTimeout(setValueInputs, 2000);
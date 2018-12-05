//function for Range
function funRange(){
    var range = document.getElementById('range');
    var rangeNumber = document.getElementById('rangeNumber');
    rangeNumber.innerHTML = range.value;
}

// function for Select
function funcSelect(){
    var sel = document.getElementById('selectFruit').selectedIndex;
    var opt = document.getElementById('selectFruit').options;
    console.log(opt[sel].text);
    alert('Choosed fruit is' + opt[sel].text);
}

// Function for checkbox
function funcChkbox(){
    var chbox;
    chbox = document.getElementById('one');

    if (chbox.checked){
        alert ('Выбран')
    }
    else {
        alert ('не выбран')
    }
}

// Function for Radio
function funcRadio(){
    var radio =  document.getElementsByName('r1');
    for (var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            alert('Выбран ' + i + ' элемент');
        }

    }
}


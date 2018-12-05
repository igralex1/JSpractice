// navigate
    document.getElementById('nav').onmouseover = function (event)   {
        var target = event.target;
             if (target.className == 'menu-item'){
            var s = target.getElementsByClassName('submenu');
            closeMenu();
            s[0].style.display='block';
        }
    }

document.onmouseover = function (event){
    var target = event.target;
    console.log(event.target);
    if(target.className != 'menu-item' && target.className!= 'submenu'){
        closeMenu();
    }
}

function closeMenu(){
    var menu  = document.getElementById('nav')
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++){
        subm[i].style.display = "none";
    }
}



// for RangeBorderRadius
function funcRngBorderRadius(){
    var rLU = document.getElementById('radiusLeftUp').value;
    var rRU = document.getElementById('radiusRightUp').value;
    var rLD = document.getElementById('radiusLeftDown').value;
    var rRD = document.getElementById('radiusRightDown').value;
    var tRLU = document.getElementById('textRadiusLeftUp');
    var tRRU = document.getElementById('textRadiusRightUp');
    var tRLD = document.getElementById('textRadiusLeftDown');
    var tRRD = document.getElementById('textRadiusRightDown');

    var figura = document.getElementById('b');

    tRLD.value = rLD;
    tRLU.value = rLU;
    tRRD.value = rRD;
    tRRU.value = rRU;

    // Изменеие прямоугольника
    b.style.borderRadius = rLU + 'px '+ rRU + 'px ' + rLD + 'px ' + rRD + 'px ';
}

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


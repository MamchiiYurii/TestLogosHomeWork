var df = document.forms;

function getID(a) {
    return document.getElementById(a);
}

function getEl(a) {
    return document.querySelector(a);
}

//************** Кнопка 1 Редагування. ****************

df.buttons.edit.addEventListener('click', function () {
    getID("editForm").style.display = "block";
    var sf = df.showForm.innerHTML;
    var esf = df.editForm.editField.innerHTML = sf;
    getID("stylize").style.display = "none";

});

//************** Кнопка 2 Стилізація. ****************

df.buttons.stylize.addEventListener('click', function () {
    getID("editForm").style.display = "none";
    getID("stylize").style.display = "block";

});

//************** Кнопка 3 Зберегти. ****************

df.editForm.save.addEventListener('click', function () {
    getID("editForm").style.display = "none";
    getEl('.inside2').innerHTML = df.editForm.editField.value;

});

//************** Кнопка 4 Додавання. ****************

df.editForm.add.addEventListener('click', function () {
    getID("edit").style.display = "none";
    getID("show").style.display = "none";
    getID("btn").style.display = "none";
    getID("chois").style.display = "block";
});


//************** Стилізація. ****************

// Розмір тексту
var textSize = df.stylize.r1;
for (var i = 0; i < textSize.length; i++) {
    textSize[i].addEventListener('click', function () {
        document.getElementById('show').style.fontSize = this.value;
    })
}

// Стиль тексту

for (var i = 0; i < df.stylize.fontStyl.length; i++) {
    df.stylize.fontStyl.addEventListener('click', function () {
        getID("show").style.fontFamily = this.value;
    })
}


// Колір тексту 

//************** Кнопка 7 Колір тексту. ****************

getID('color').addEventListener('click', function () {
    getID("colort").style.display = "table";
    getID("colorb").style.display = "none";
})
var textColor = document.getElementsByTagName('td');
for (var i = 0; i < 9; i++) {
    textColor[i].addEventListener('click', function () {
        getID('show').style.color = this.style.backgroundColor;
    })
}


//************** Кнопка 8 Колір беграунда. ****************

getID('bgr').addEventListener('click', function () {
    getID("colorb").style.display = "table";
    getID("colort").style.display = "none";
})
for (var i = 9; i < 18; i++) {
    textColor[i].addEventListener('click', function () {
        getID('show').style.backgroundColor = this.style.backgroundColor;

    })
}

document.body.addEventListener("mouseup", function (click) {
    if (click.target != getID("colort")) {
        getID("colort").style.display = "none";
    }
})
document.body.addEventListener("mouseup", function (click) {
    if (click.target != getID("colorb")) {
        getID("colorb").style.display = "none";
    }
})

// Жирний текст
var bold = df.stylize.bold;
bold.addEventListener('click', function () {
    if (this.checked) {
        getID('show').style.fontWeight = "bold";
    } else {
        getID('show').style.fontWeight = "normal";
    }
})

// Курсивний текст
var italic = df.stylize.italic;
italic.addEventListener('click', function () {
        if (this.checked) {
            getID('show').style.fontStyle = "italic";
        } else {
            getID('show').style.fontStyle = "normal";
        }

    })
    //************** Додавання таблиці чи списку. ****************
getID('tabl').addEventListener('click', function () {
    getID("createTable").style.display = "block";
    getID("creatList").style.display = "none"
})
getID('list').addEventListener('click', function () {
        getID("createTable").style.display = "none";
        getID("creatList").style.display = "block"
    })
    //************** Додавання таблиці****************

df.table.createTable.addEventListener('click', function () {
    var border = df.table.heavy.value;
    var width = df.table.width.value;
    var Height = df.table.Height.value;
    var LineColor = df.table.lineColor.value;
    var row = df.table.row.value;
    var col = df.table.col.value
    var Linetyp = df.table.lineType.value;

    var createTable = '<table border="' + border + '" width="' + width + '" height="' + Height + '" border-style="' + Linetyp + '" bordercolor="' + LineColor + '" >';
    for (var i = 0; i < row; i++) {
        createTable += '<tr>';
        for (var j = 0; j < col; j++) {
            createTable += '<td></td>';
        }
        createTable += '</tr>';
    }
    createTable += '</table>';

    df.editForm.editField.value += createTable;
    getID("edit").style.display = "block";
    getID("show").style.display = "block";
    getID("btn").style.display = "block";
    getID("chois").style.display = "none";

});

//************** Додавання cписку. ****************
var mrk = df.listChois.mark;
var numb = df.listChois.num;

mrk.addEventListener('click', function () {
    getID("markType").style.display = "block";
    getID("numbType").style.display = "none";
    getID("listVisibl").style.display = "block";
    getID("createListM").style.display = "block";
    getID("createListN").style.display = "none";
});

df.list.createListM.addEventListener('click', function () {
    var number = df.list.kst.value;
    var markType = df.list.typeMark.value;

    var createList = '<ul type="' + markType + '">';
    for (var i = 0; i < number; i++) {
        createList += '<li></li>';
    }
    createList += '</ul>';
    df.editForm.editField.value += createList;
    getID("edit").style.display = "block";
    getID("show").style.display = "block";
    getID("btn").style.display = "block";
    getID("chois").style.display = "none";

})
numb.addEventListener('click', function () {
    getID("markType").style.display = "none";
    getID("numbType").style.display = "block";
    getID("listVisibl").style.display = "block";
    getID("createListN").style.display = "block";
    getID("createListM").style.display = "none";
});

df.list.createListN.addEventListener('click', function () {
    var number = df.list.kst.value;
    var markType = df.list.numbMark.value;
    var start = df.list.firstPos.value;
    //Зворотній підрахунок
    var revers = df.list.reversed;
    if (revers.checked) {
        revers = "reversed";
    } else {
        revers = "";
    }

    var createList = '<ol ' + revers + ' type="' + markType + '" start="' + start + '">';
    for (var i = 0; i < number; i++) {
        createList += '<li></li>';
    }
    createList += '</ol>';
    df.editForm.editField.value += createList;
    getID("edit").style.display = "block";
    getID("show").style.display = "block";
    getID("btn").style.display = "block";
    getID("chois").style.display = "none";

});


//************** L E V E L  2 ****************
//validation

row.onblur = function () {
    var row = df.table.row.value;
    if (row / 1 && row > 0) {
        df.table.row.style.backgroundColor = "green";
        getID("span1").style.display = "none";
    } else {
        df.table.row.style.backgroundColor = "red";
        getID("span1").style.display = "block";
    }
};
col.onblur = function () {
    var col = df.table.col.value;
    if (col / 1 && col > 0) {
        df.table.col.style.backgroundColor = "green";
        getID("span2").style.display = "none";
    } else {
        df.table.col.style.backgroundColor = "red";
        getID("span2").style.display = "block";
    }
};
width.onblur = function () {
    var width = df.table.width.value;
    if (width / 1 && width > 0) {
        df.table.width.style.backgroundColor = "green";
        getID("span3").style.display = "none";
    } else {
        df.table.width.style.backgroundColor = "red";
        getID("span3").style.display = "block";
    }
};
height.onblur = function () {
    var heigh = df.table.Height.value;
    if (heigh / 1 && heigh > 0) {
        df.table.Height.style.backgroundColor = "green";
        getID("span4").style.display = "none";
    } else {
        df.table.Height.style.backgroundColor = "red";
        getID("span4").style.display = "block";
    }
};
weight.onblur = function () {
    var heavy = df.table.heavy.value;
    if (heavy / 1 && heavy > 0) {
        df.table.heavy.style.backgroundColor = "green";
        getID("span5").style.display = "none";
    } else {
        df.table.heavy.style.backgroundColor = "red";
        getID("span5").style.display = "block";
    }
};
kst.onblur = function () {
    var kst = df.list.kst.value;
    if (kst / 1 && kst > 0) {
        df.list.kst.style.backgroundColor = "green";
        getID("span6").style.display = "none";
        getID("numTp").style.display = "block";
        getID("firstPos").style.display = "block";
    } else {
        df.list.kst.style.backgroundColor = "red";
        getID("span6").style.display = "block";
    }
};

fp.onblur = function () {
    var fpos = df.list.firstPos.value;
    if (fpos / 1 && fpos > 0) {
        df.list.firstPos.style.backgroundColor = "green";
        getID("span7").style.display = "none";
        getID("revers").style.display = "block";
    } else {
        df.list.firstPos.style.backgroundColor = "red";
        getID("span7").style.display = "block";
    }
};

//// PASSWORD
//df.buttons.block.addEventListener('click', function () {
//    getID("edit").style.display = "none";
//    getID("show").style.display = "none";
//    getID("btn").style.display = "none";
//    getID("pass").style.display = "block";
//});
//
//df.password.submit.addEventListener('click', function () {
//    var a = df.password.passw.value;
//
//    if (a != "0000") {
//        df.password.passw.style.backgroundColor = "red";
//        getEl(".texti").style.display = "block";
//        getEl(".textp").style.display = "none";
//    } else if (a == "0000") {
//        getID("edit").style.display = "block";
//        getID("show").style.display = "block";
//        getID("btn").style.display = "block";
//        getID("pass").style.display = "none";
//    }
//});

//попап вікно
df.buttons.block.addEventListener('click', function PopUpShow() {
    $("#pass").show();
})
df.password.submit.addEventListener('click', function PopUpHide() {

    var a = df.password.passw.value;
    if (a == "0000") {
        $(".textp").show();
        $(".texti").hide();
        $("#pass").hide();
        df.password.passw.value = "";
    } else {
        $(".textp").hide();
        $(".texti").show();
        df.password.passw.value = "";
    }
})



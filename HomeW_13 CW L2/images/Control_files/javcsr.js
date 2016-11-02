var df = document.forms;

//************** Кнопка 1 Редагування. ****************

df.buttons.edit.addEventListener('click', function () {
    document.getElementById("editForm").style.display = "block";
    var sf = df.showForm.innerHTML;
    var esf = df.editForm.editField.innerHTML = sf;

});

//************** Кнопка 2 Стилізація. ****************

df.buttons.stylize.addEventListener('click', function () {
    document.getElementById("editForm").style.display = "none";
});

//************** Кнопка 3 Зберегти. ****************

df.editForm.save.addEventListener('click', function () {
    document.getElementById("editForm").style.display = "none";
    //sf = esf;
    var esf = df.editForm.editField.innerHTML;
    this.innerHTML = esf;

}); // DONT WORK!!!!

//************** Кнопка 4 Додавання. ****************

df.buttons.stylize.addEventListener('click', function () {
    document.getElementById("editForm").style.display = "none";
    document.getElementById("showForm").style.display = "none";
    document.getElementById("chois").style.display = "block";

});
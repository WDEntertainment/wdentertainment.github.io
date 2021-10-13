var save = document.getElementById("saveCode");
var section1 = document.getElementById("first");
var section2 = document.getElementById("second");
var section3 = document.getElementById("third");
var input = document.getElementById("input");
var section4 = document.getElementById("forth");
var what = document.getElementById("whatToDo");
var editableParagraph = document.getElementById("inputForStuff")
var c1 = document.getElementById("conf1");
var c2 = document.getElementById("conf2");
var c0 = document.getElementById("conf3");

var whatamidoing = "";
var saveFile, newSaveFile, saveFileList;

hideNode(section2);
hideNode(section3);
hideNode(section4);

c0.onclick = function() {
    whatamidoing = what.value;
    hideNode(section1);
    showNode(section2);
    if (whatamidoing == "mon") {
        editableParagraph.innerText = "Enter the amount of money you want.";
    } else if (whatamidoing == "gold") {
        editableParagraph.innerText = "Enter the amount of gold you want.";
    } else {
        editableParagraph.innerText = "Enter the BB you want.";
    }
}

c1.onclick = function() {
    saveFile = atob(save.value);
    saveFileList = saveFile.split(",");
    hideNode(section2);
    showNode(section3);
}

c2.onclick = function() {
    if (whatamidoing == 'gold') {
        saveFileList[2] = input.value;
    } else if (whatamidoing == 'mon') {
        saveFileList[1] = input.value;
    }
    hideNode(section3);
    output.select();
    document.execCommand("copy");
    output.value = btoa(saveFileList.toString());
    showNode(section4);
}

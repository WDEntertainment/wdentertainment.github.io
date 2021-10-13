function hideNode(node) {
    node.style.display = "none";
}

function ELID(id) {
    return document.getElementById(id)
}

function showNode(node) {
    node.style.display = "block";
}

window.hideNode = hideNode
window.elid = ELID
window.showNode = showNode;

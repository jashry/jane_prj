window.onload = function() {
    var pashVal = window.location.pathname;
    var startIdx = pashVal.lastIndexOf("/");
    var lastIdx = pashVal.indexOf(".");
    var idVal = pashVal.slice(startIdx + 1, lastIdx);
    document.getElementById(idVal).className = "on";
}
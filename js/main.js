/**
 * Created by iporer on 7/12/16.
 */
(function () {
    var today = new Date();
    var header = document.getElementsByTagName("header")[0];
    var dayColor = ["#ff0000", "#ff8000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#8000ff"];
    var day = today.getDay();
    header.style.borderTopColor = dayColor[day % 7];
})();
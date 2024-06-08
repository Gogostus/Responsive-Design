document.addEventListener("DOMContentLoaded", function() {
    var iconElements = document.getElementsByClassName("darkmode");
    var h2Elements = document.getElementsByTagName("h2");
    var isWhite = false;
    for (var i = 0; i < iconElements.length; i++) {
        iconElements[i].addEventListener("click", function() {
            if (isWhite) {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                for (var j = 0; j < h2Elements.length; j++) {
                    h2Elements[j].style.color = "white";
                }
                isWhite = false;
            } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                for (var j = 0; j < h2Elements.length; j++) {
                    h2Elements[j].style.color = "black";
                }
                isWhite = true;
            }
        });
    } 
});
document.addEventListener("DOMContentLoaded", function() {
    var h2Elements = document.getElementsByTagName("h2");
    var isWhite = false;
    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].addEventListener("click", function() {
            if (isWhite) {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                isWhite = false;
            } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                isWhite = true;
            }
            
        });    } 
});

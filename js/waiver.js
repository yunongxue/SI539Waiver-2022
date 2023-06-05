  document.addEventListener("DOMContentLoaded", function(){
    // Problem 1
    var figures = document.getElementsByTagName("figure");
    for(var i = 0; i < figures.length; i++) {
        figures[i].classList.add("one-third");
    }

    // Problem 2
    var footer = document.querySelector("footer");
    footer.addEventListener("click", function(){
        footer.parentNode.removeChild(footer);
    });

    // Problem 3
    var fifthFigure = document.querySelector("figure:nth-child(5)");
    fifthFigure.addEventListener("dblclick", function(){
        fifthFigure.style.visibility = "hidden";
    });

    // Problem 4
    var firstFigCaption = document.querySelector("figcaption");
    var originalFont = firstFigCaption.style.fontFamily;
    firstFigCaption.addEventListener("mouseover", function(){
        firstFigCaption.style.fontFamily = "Cursive";
    });
    firstFigCaption.addEventListener("mouseout", function(){
        firstFigCaption.style.fontFamily = originalFont;
    });

    // Problem 5
    var firstFigCaption = document.querySelector("figcaption");
    firstFigCaption.setAttribute("tabindex", "0");
    firstFigCaption.addEventListener("focus", function(){
        firstFigCaption.style.fontFamily = "Cursive";
    });
    firstFigCaption.addEventListener("blur", function(){
        firstFigCaption.style.fontFamily = "Times";
    });
});

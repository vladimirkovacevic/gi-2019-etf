
function regentoc() {
    document.getElementById("toc").innerHTML = "";
    var currenth2 = 0;
    $("h2,h3").not("#Contents").each(function(mainIndex) {
        el = $(this);
        title = el.attr("id");
        text = el.html();
        link = "#" + el.attr("id");
        if ( document.getElementById(title).tagName == "H2" ) {
            currenth2 += 1;
            newLine =
                "<li class='maintoc'>" +
                   "<a href='" + link + "'>" + text + "</a>" +
                "</li>" +
                "<ul id='h2" + currenth2 + "'></ul>";
            document.getElementById("toc").innerHTML += newLine;
        } else if ( document.getElementById(title).tagName=="H3" ) {
            h1list = document.getElementById("h2"+currenth2);
            newLine = "<li class='subtoc'>" + "<a href='" + link + "'>" + text + "</a>" + "</li>";
            h1list.innerHTML += newLine;
        }
    });
}
 
setInterval(regentoc,1000);

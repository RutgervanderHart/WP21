function change_title() {
    var index_title = document.getElementById("index");
    var second_title = document.getElementById("second");
    if (index_title != null) {
        index_title.innerHTML = "Webprogramming (LIX018P05) - Index";
    }
    if (second_title != null) {
        second_title.innerHTML = "Webprogramming (LIX018P05) - Second";
    }
    console.log(index_title, second_title)
}


function new_article() {
    var articles = document.getElementById("index_articles");
    if (articles != null) {
        articles.innerHTML += "<article>" +
            "<h1>This is my second article</h1>" +
            "<p>Ski-bi dibby dib yo da dub dub\n" +
            "Yo da dub dub\n" +
            "Ski-bi dibby dib yo da dub dub\n" +
            "Yo da dub dub\n" +
            "(I'm the Scatman)\n" +
            "Ski-bi dibby dib yo da dub dub\n" +
            "Yo da dub dub\n" +
            "Ski-bi dibby dib yo da dub dub\n" +
            "Yo da dub dub\n" +
            "Ba-da-ba-da-ba-be bop bop bodda bope\n" +
            "Bop ba bodda bope\n" +
            "Be bop ba bodda bope\n" +
            "Bop ba bodda\n" +
            "Ba-da-ba-da-ba-be bop ba bodda bope\n" +
            "Bop ba bodda bope\n" +
            "Be bop ba bodda bope\n" +
            "Bop ba bodda bope</p>" +
            "</article>>";
    }
}


window.addEventListener('DOMContentLoaded', function () {
    change_title();
    new_article();
});
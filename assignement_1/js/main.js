function change_title() {
    var index_title = document.getElementById("index");
    var second_title = document.getElementById("second");
    if (index_title != null) {
        index_title.innerHTML = "Webprogramming (LIX018P05) - Index";
    }
    if (second_title != null) {
        second_title.innerHTML = "Webprogramming (LIX018P05) - Second";
    }
}


function new_article() {
    var articles = document.getElementById("index_articles");
    if (articles != null) {
        articles.innerHTML += "<article>" +
            "<h1>This is my second article</h1>" +
            "<p>Ski-bi dibby dib yo da dub dub" +
            "Yo da dub dub" +
            "Ski-bi dibby dib yo da dub dub" +
            "Yo da dub dub" +
            "(I'm the Scatman)" +
            "Ski-bi dibby dib yo da dub dub" +
            "Yo da dub dub" +
            "Ski-bi dibby dib yo da dub dub" +
            "Yo da dub dub" +
            "Ba-da-ba-da-ba-be bop bop bodda bope" +
            "Bop ba bodda bope" +
            "Be bop ba bodda bope" +
            "Bop ba bodda" +
            "Ba-da-ba-da-ba-be bop ba bodda bope" +
            "Bop ba bodda bope" +
            "Be bop ba bodda bope" +
            "Bop ba bodda bope</p>" +
            "</article>>";
    }
}

function change_link() {
    var link_list = document.getElementById("links");
    var link = link_list.childNodes[1].childNodes[5].firstChild;
    link.setAttribute("href", "https://google.com");
    link.setAttribute("target", "blank");
}

function change_color() {
    var red_text_list = document.getElementsByClassName("nav-item");
    for (let red_text of red_text_list){
        red_text.style.color = "red";
        red_text.childNodes[1].style.color = "red"
    }
}

function wp21_check() {
    var index_page = document.getElementById("index_articles");
    if (index_page != null) {
        const list = [
            ["week_1", "assignment_1"],
            ["week_2", "assignment_1"],
            ["week_3", "assignment_2"],
            ["week_4", "assignment_2"],
            ["week_5", "assignment_3"],
            ["week_6", "assignment_3"],
            ["week_7", "Final_project"]
        ]
        var html_list = "<table style='width: 100%'>" +
            "<tr><th>week:</th>" +
            "<th>assignment:</th></tr>"
        for (let week of list) {
            html_list += ("<tr><th>" + week[0] + "</th><th>" + week[1] + "</th></tr>>");
        }
        html_list += "</table>"
        index_page.innerHTML += html_list;
    }
}

function add_sidebar() {
    var second_sidebar = document.getElementById("second_main");
    if (second_sidebar != null) {
        second_sidebar.setAttribute("class", "container, row")
        second_sidebar.childNodes[1].setAttribute("class", "col-md-8");
        second_sidebar.innerHTML += "<div class='col-md-4'><h1>Sidebar</h1></div>";
        console.log(second_sidebar)
    }
}

window.addEventListener('DOMContentLoaded', function () {
    change_title();
    new_article();
    change_link();
    change_color();
    wp21_check();
    add_sidebar();
});
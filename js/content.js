/**
 * Created by iporer on 7/13/16.
 */
(function () {
    var markdownToc = document.getElementById("markdown-toc");
    var content = document.getElementById("content");
    var recently = document.getElementById("recently");
    var categories = document.getElementById("categories");
    var tags = document.getElementById("tags");
    if (!markdownToc) {
        content.remove();
        return;
    }
    tags.remove();
    categories.remove();
    recently.remove();
    content.appendChild(markdownToc);
})();
/**
 * Created by iporer on 7/13/16.
 */
(function () {
    var markdownToc = document.getElementById("markdown-toc");
    var content = document.getElementById("content");
    var recently = document.getElementById("recently");
    var categories = document.getElementById("categories");
    var tags = document.getElementById("tags");
    var pageLeft = document.getElementsByClassName("page-left")[0];
    var pageRight = document.getElementsByClassName("page-right")[0];
    if (window.screen.width < 500) { // 针对移动设备
        pageLeft.style.display = "none";
        pageRight.style.width = "100%";
        return;
    }
    window.onresize = function () {
        content.style.width = pageLeft.offsetWidth - 20 + "px"; // 保持高度不变，20px是padding距离
        if (document.body.clientWidth < 600) { // 优化窄屏显示
            pageLeft.style.display = "none";
            pageRight.style.width = "100%";
        } else {
            pageLeft.style.display = "block";
            pageRight.style.width = "75%";
        }
    };
    if (markdownToc) {
        tags.remove();
        categories.remove();
        recently.remove();
        content.appendChild(markdownToc);

        // 计算content位置
        var contentTop = content.offsetTop;
        content.style.height = content.offsetHeight + "px"; // 保持高度不变
        var bodyScrollTop = 0;

        window.onscroll = function () {
            bodyScrollTop = document.body.scrollTop;
            content.style.width = pageLeft.offsetWidth - 20 + "px"; // 保持高度不变，20px是padding距离
            if (bodyScrollTop - contentTop > -30) { // 设定content的top为30
                content.classList.add('fixed');
            } else {
                content.classList.remove('fixed');
            }
        };

        return;
    }
    content.remove();
})();
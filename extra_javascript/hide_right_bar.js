window.addEventListener("load", function() {
    // 定义需要隐藏右侧目录的页面路径片段
    var hiddenSidebarPages = ["pdfdemo","signal%20and%20system","MCU"];
    
    // 获取当前页面的 URL 路径
    var currentPath = window.location.pathname;
  
    // 检查当前页面路径是否包含指定片段
    if (hiddenSidebarPages.some(page => currentPath.includes(page))) {
        // 选择右侧目录栏
        var rightSidebar = document.querySelector('.md-sidebar--secondary');
        if (rightSidebar) {

            rightSidebar.style.display = 'none';
        }

        // 调整内容区域宽度
        var mainContent = document.querySelector('.md-content');
        if (mainContent) {
            mainContent.style.maxWidth = '100%';
            mainContent.style.marginRight = '0';
        }
    }
});

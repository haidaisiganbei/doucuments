module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    repo: "https://github.com/haidaisiganbei/doucuments.git",
    // repoLabel: "查看源码",
    // navbar: false,
    sidebar: "auto",
    searchMaxSuggestions: 1,
    lastUpdated: "Last Updated", // string | boolean
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "JavaScript", link: "/front/js/" },
          { text: "css", link: "/front/css/" },
          { text: "html", link: "/front/html/" }
        ]
      },
      {
        text: "后端",
        items: [
          { text: "java", link: "/back/java/" },
          { text: "mysql", link: "/back/mysql/" },
          { text: "spring", link: "/back/spring/" }
        ]
      },
      { text: "关于我", link: "/about/" }
    ]
  }
};

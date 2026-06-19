const siteContentMap = {
  home: {
    title: "首页",
    tags: ["华体会", "首页", "导航"],
    url: "https://mainhome-hth.com.cn",
    sections: [
      { id: "banner", label: "横幅区" },
      { id: "features", label: "特色模块" }
    ]
  },
  about: {
    title: "关于我们",
    tags: ["华体会", "公司", "简介"],
    url: "https://mainhome-hth.com.cn/about",
    sections: [
      { id: "mission", label: "使命" },
      { id: "team", label: "团队" }
    ]
  },
  services: {
    title: "服务",
    tags: ["华体会", "服务", "支持"],
    url: "https://mainhome-hth.com.cn/services",
    sections: [
      { id: "consulting", label: "咨询" },
      { id: "development", label: "开发" }
    ]
  },
  blog: {
    title: "博客",
    tags: ["华体会", "文章", "资讯"],
    url: "https://mainhome-hth.com.cn/blog",
    sections: [
      { id: "latest", label: "最新" },
      { id: "popular", label: "热门" }
    ]
  }
};

function searchContent(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  for (const key in siteContentMap) {
    const item = siteContentMap[key];
    if (
      item.title.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    ) {
      results.push(item);
    }
  }

  return results;
}

function filterByTag(tag) {
  const results = [];
  const lowerTag = tag.toLowerCase();

  for (const key in siteContentMap) {
    const item = siteContentMap[key];
    if (item.tags.some(t => t.toLowerCase() === lowerTag)) {
      results.push(item);
    }
  }

  return results;
}

function getSectionLabels(contentKey) {
  const content = siteContentMap[contentKey];
  if (!content) return [];
  return content.sections.map(s => s.label);
}

console.log("全部分区:", Object.keys(siteContentMap));
console.log("搜索 '华体会':", searchContent("华体会"));
console.log("按标签过滤 '服务':", filterByTag("服务"));
console.log("关于我们分区标签:", getSectionLabels("about"));
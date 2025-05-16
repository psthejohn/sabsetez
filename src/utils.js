// src/utils.js
export function groupNewsByCategory(articles) {
  const categories = {};
  let breaking = null;

  articles.forEach((article, i) => {
    if (i === 0) breaking = article; // First news as main
    const cat = article.category || "General";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(article);
  });

  return { breaking, categories };
}

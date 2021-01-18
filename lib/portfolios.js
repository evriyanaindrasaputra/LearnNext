import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const portfolioDirectory = path.join(process.cwd(), "portfolio");

export function getAllPortfolio() {
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allPortfolioData = fileNames.map((fileName) => {
    const name = fileName.replace(/\.md$/, "");

    const fullPath = path.join(portfolioDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);
    return {
      name,
      ...matterResult.data,
    };
  });
  return allPortfolioData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPortfolioName() {
  const fileNames = fs.readdirSync(portfolioDirectory);
  return fileNames.map((filename) => {
    return {
      params: {
        name: filename.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPortfolioData(name) {
  const fullPath = path.join(portfolioDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    name,
    contentHtml,
    ...matterResult.data,
  };
}

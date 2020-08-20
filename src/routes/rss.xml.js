import { Feed } from "feed";
import ghost from "./_ghost";
import config from "../config";

export async function get(req, res, next) {
  // const articles = await getRecentArticles(10);
  const settings = await ghost.settings();
  const posts = await ghost.posts();

  res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader("Content-Type", "application/rss+xml");

  res.end(generateRSS(settings, posts));
  // res.end(getRSS(articles));
}

const formatURL = (url) => {
  return url ? url.replace(config.GhostURL,config.SiteURL) : url;
}

const formatHTML = (html) => {
  const re = new RegExp(`href="${config.GhostURL}`,"g")
  return html.replace(re,`href="${config.SiteURL}`)
}

const generateRSS = (settings, posts) => {
  const feed = new Feed({
    title: settings.title,
    description: settings.description,
    id: formatURL(settings.url),
    link: formatURL(settings.url),
    image: formatURL(settings.cover_image),
    favicon: settings.icon,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      settings.title
    }`,
    generator: "Sapper",
    updated: new Date(posts[0].updated_at),
    feedLinks: {
      atom: `${settings.url}rss`,
    },
    // author: {
    //   name: "John Doe",
    //   email: "johndoe@example.com",
    //   link: "https://example.com/johndoe",
    // },
  });
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: formatURL(post.url),
      link: formatURL(post.url),
      description: post.excerpt,
      content: formatHTML(post.html),
      author: [
        {
          name: post.primary_author.name,
          link: formatURL(post.primary_author.url),
        },
      ],
      date: new Date(post.published_at),
      // image: post.feature_image,
    });
  });
  return feed.rss2();
};

import { Feed } from "feed";
import ghost from "./_ghost";
import utils from "../utils";

export async function get(req, res, next) {
  // const articles = await getRecentArticles(10);
  const settings = await ghost.settings();
  const posts = await ghost.posts();

  res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader("Content-Type", "application/rss+xml");

  res.end(generateRSS(settings, posts));
  // res.end(getRSS(articles));
}

const generateRSS = (settings, posts) => {
  const feed = new Feed({
    title: settings.title,
    description: settings.description,
    id: utils.urlFormat(settings.url),
    link: utils.urlFormat(settings.url),
    image: utils.urlFormat(settings.cover_image),
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
      id: utils.urlFormat(post.url),
      link: utils.urlFormat(post.url),
      description: post.excerpt,
      content: utils.htmlFormat(post.html),
      author: [
        {
          name: post.primary_author.name,
          link: utils.urlFormat(post.primary_author.url),
        },
      ],
      date: new Date(post.published_at),
      // image: post.feature_image,
    });
  });
  return feed.rss2();
};

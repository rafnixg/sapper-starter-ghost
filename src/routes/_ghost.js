import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://demo.ghost.io",
  key: "22444f78447824223cefc48062",
  version: "v3",
});

async function settings() {
  const settings = await api.settings.browse();
  return settings;
}
async function posts() {
  const posts = await api.posts.browse({ include: "tags,authors" });
  return posts;
}
async function post(slug) {
  const post = await api.posts.read(
    { slug: slug },
    { formats: ["html", "plaintext"], include: "tags,authors" }
  );
  return post;
}
async function relatedPost(tag) {
  const posts = await api.posts.browse({ limit: 3,filter: `tags:${tag}` });
  return posts;
}
async function tag(slug) {
  const tag = await api.tags.read(
    { slug: slug }
  );
  return tag;
}
async function author(slug) {
  const author = await api.authors.read(
    { slug: slug },
    { include: "count.posts" }
  );
  return author;
}
async function authorPost(slug) {
  const post = await api.posts.browse({
    filter: `author:${slug}`,
    include: "tags,authors",
  });
  return post;
}
async function tagPost(slug) {
  const post = await api.posts.browse({
    filter: `tag:${slug}`,
    include: "tags,authors",
  });
  return post;
}
export default {
  settings: settings,
  posts: posts,
  post: post,
  relatedPost:relatedPost,
  author: author,
  authorPost: authorPost,
  tag:tag,
  tagPost: tagPost,
};

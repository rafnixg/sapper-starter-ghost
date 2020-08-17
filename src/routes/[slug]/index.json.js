import ghost from "../_ghost";

export async function get(req, res, next) {
  const { slug } = req.params;

  const post = await ghost.post(slug);
  const related_posts = await ghost.relatedPost(post.primary_tag.slug);
  const prev_post = await ghost.prevPost(post.slug, post.published_at);
  const next_post = await ghost.nextPost(post.slug, post.published_at);
  post["related_posts"] = related_posts;
  post["prev_post"] = prev_post;
  post["next_post"] = next_post;
  if (post !== null) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(post));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}

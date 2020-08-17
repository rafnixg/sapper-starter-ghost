import ghost from "../_ghost";

export async function get(req, res, next) {
  const { slug } = req.params;

  const post = await ghost.post(slug);
  const related_posts = await ghost.relatedPost(post.primary_tag.slug);
  post["related_posts"] = related_posts;
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

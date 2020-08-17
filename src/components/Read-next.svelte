<script>
  import utils from "../utils";
import PostCard from "./Post-card.svelte";
  export let related_posts;
  export let tag;
  export let next_post;
  export let prev_post;
</script>

<aside class="read-next outer">
  <div class="inner">
    <div class="read-next-feed">
      {#if related_posts}
        <article class="read-next-card">
          <header class="read-next-card-header">
            <h3>
              <span>More in</span>
              <a href={tag.url}>{tag.name}</a>
            </h3>
          </header>
          <div class="read-next-card-content">
            <ul>
              {#each related_posts as post}
                <li>
                  <h4>
                    <a href={post.url}>{post.title}</a>
                  </h4>
                  <div class="read-next-card-meta">
                    <p>
                      <time datetime={utils.dateFormat(post.published_at)}>
                        {utils.dateFormat(post.published_at)}
                      </time>
                      – {post.reading_time} min read
                    </p>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
          <footer class="read-next-card-footer">
            <a href="{tag.url}">See more posts →</a>
          </footer>
        </article>
      {/if}
    {#if next_post}
      <PostCard post={next_post}/>
    {/if}
    {#if prev_post}
      <PostCard post={prev_post}/>
    {/if}
    </div>
  </div>
</aside>

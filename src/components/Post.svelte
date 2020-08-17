<script>
  import Avatar from "./icons/Avatar.svelte";
  import utils from "../utils";
  export let post;
</script>

<article class="post-full {post.post_class}">

  <header class="post-full-header">

    {#if post.primary_tag}
      <section class="post-full-tags">
        <a href="tag/{post.primary_tag.slug}">{post.primary_tag.name}</a>
      </section>
    {/if}

    <h1 class="post-full-title">{post.title}</h1>

    {#if post.excerpt}
      <p class="post-full-custom-excerpt">{post.excerpt}</p>
    {/if}

    <div class="post-full-byline">

      <section class="post-full-byline-content">

        <ul class="author-list">
          {#each post.authors as author}
            <li class="author-list-item">

              <div class="author-card">
                {#if author.profile_image}
                  <img
                    class="author-profile-image"
                    src={author.profile_image}
                    alt={author.name} />
                {:else}
                  <div class="author-profile-image">
                    <Avatar />
                  </div>
                {/if}
                <div class="author-info">
                  {#if author.bio}
                    <div class="bio">
                      <h2>{author.name}</h2>
                      <p>{author.bio}</p>
                      <p>
                        <a href="author/{author.slug}">More posts</a>
                        by {author.name}.
                      </p>
                    </div>
                  {:else}
                    <h2>{author.name}</h2>
                    <p>
                      Read
                      <a href="author/{author.slug}">more posts</a>
                      by this author.
                    </p>
                  {/if}
                </div>
              </div>

              {#if author.profile_image}
                <a href="author/{author.slug}" class="author-avatar">
                  <img
                    class="author-profile-image"
                    src={author.profile_image}
                    alt={author.name} />
                </a>
              {:else}
                <a
                  href="author/{author.slug}"
                  class="author-avatar author-profile-image">
                  <Avatar />
                </a>
              {/if}

            </li>
          {/each}
        </ul>

        <section class="post-full-byline-meta">
          <h4 class="author-name">{post.primary_author.name}</h4>
          <div class="byline-meta-content">
            <time
              class="byline-meta-date"
              datetime={utils.dateFormat(post.published_at)}>
              {utils.dateFormat(post.published_at)}
            </time>
            <span class="byline-reading-time">
              <span class="bull">&bull;</span>
              {post.reading_time} MIN READ
            </span>
          </div>
        </section>

      </section>

    </div>
  </header>

  {#if post.feature_image}
    <figure class="post-full-image">
      <img src={post.feature_image} alt={post.title} />
    </figure>
  {/if}

  <section class="post-full-content">
    <div class="post-content">
      {@html post.html}
    </div>
  </section>

</article>

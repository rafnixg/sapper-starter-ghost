<script>
    import Avatar from "./icons/Avatar.svelte";
    export let post;
</script>

<article class="post-full {post.post_class}">

      <header class="post-full-header">

        {#if post.primary_tag}
          <section class="post-full-tags">

            <a href={post.url}>{post.primary_tag}</a>

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
                            <a href={author.url}>More posts</a>
                            by {author.name}.
                          </p>
                        </div>
                      {:else}
                        <h2>{author.name}</h2>
                        <p>
                          Read
                          <a href={author.url}>more posts</a>
                          by this author.
                        </p>
                      {/if}
                    </div>
                  </div>

                  {#if author.profile_image}
                    <a href={author.url} class="author-avatar">
                      <img
                        class="author-profile-image"
                        src={author.profile_image}
                        alt={author.name} />
                    </a>
                  {:else}
                    <a
                      href={author.url}
                      class="author-avatar author-profile-image">
                      <Avatar />
                    </a>
                  {/if}

                </li>
              {/each}
            </ul>

            <section class="post-full-byline-meta">
              <!-- <h4 class="author-name">{{authors}}</h4> -->
              <div class="byline-meta-content">
                <time class="byline-meta-date" datetime={post.date}>
                  {post.date}
                </time>
                <span class="byline-reading-time">
                  <span class="bull">&bull;</span>
                  {post.reading_time}
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
          {post.content}
          <!-- {@html post.html} -->
        </div>
      </section>

    </article>
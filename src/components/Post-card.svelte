<script>
  import Avatar from "./icons/Avatar.svelte";
  import utils from "../utils";
  export let post;
</script>

<article class="post-card {post.slug}">

  {#if post.feature_image}
    <a class="post-card-image-link" href={post.slug}>
      <img
        class="post-card-image"
        loading="lazy"
        src={post.feature_image}
        alt={post.title} />
    </a>
  {/if}
  <div class="post-card-content">

    <a class="post-card-content-link" href={post.slug}>

      <header class="post-card-header">
        {#if post.primary_tag}
          <div class="post-card-primary-tag">{post.primary_tag.name}</div>
        {/if}
        <h2 class="post-card-title">{post.title}</h2>
      </header>

      <section class="post-card-excerpt">
        {#if post.feature_image}
          <p>{utils.excerptFormat(post.excerpt,170)}</p>
        {:else}
          <p>{utils.excerptFormat(post.excerpt,200)}</p>
        {/if}
      </section>

    </a>

    <footer class="post-card-meta">
      <ul class="author-list">
        {#each post.authors as author}
          <li class="author-list-item">

            <div class="author-name-tooltip">{author.name}</div>

            {#if author.profile_image}
              <a href="author/{author.slug}" class="static-avatar">
                <img
                  class="author-profile-image"
                  src={author.profile_image}
                  alt={author.name} />
              </a>
            {:else}
              <a
                href="author/{author.slug}"
                class="static-avatar author-profile-image">
                <Avatar />
              </a>
            {/if}
          </li>
        {/each}

      </ul>
      <div class="post-card-byline-content">
        <span>
          <a href="author/{post.primary_author.slug}">
            {post.primary_author.name}
          </a>
        </span>
        <span class="post-card-byline-date">
          <time datetime={utils.dateFormat(post.published_at)}>
            {utils.dateFormat(post.published_at)}
          </time>
          <span class="bull">&bull;</span>
          {post.reading_time} MIN READ
        </span>
      </div>
    </footer>

  </div>
</article>

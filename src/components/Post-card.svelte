<script>
  import Avatar from "./icons/Avatar.svelte";
  export let title;
  export let post_class;
  export let feature_image;
  export let primary_tag;
  export let excerpt;
  export let date;
  export let slug;
  export let reading_time;
  export let authors = [];
</script>

<article class="post-card {post_class}">

  {#if feature_image}
    <a class="post-card-image-link" href="{slug}">
      <img
        class="post-card-image"
        loading="lazy"
        src={feature_image}
        alt={title} />
    </a>
  {/if}
  <div class="post-card-content">

    <a class="post-card-content-link" href="{slug}">

      <header class="post-card-header">
        {#if primary_tag}
          <div class="post-card-primary-tag">{primary_tag.name}</div>
        {/if}
        <h2 class="post-card-title">{title}</h2>
      </header>

      <section class="post-card-excerpt">
        {#if feature_image}
          <p>{excerpt}</p>
        {:else}
          <p>{excerpt}</p>
        {/if}
      </section>

    </a>

    <footer class="post-card-meta">
      <ul class="author-list">
        {#each authors as author}
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
              <a href="author/{author.slug}" class="static-avatar author-profile-image">
                <Avatar />
              </a>
            {/if}
          </li>
        {/each}

      </ul>
      <div class="post-card-byline-content">
      <span><a href="author/{authors[0].slug}">{authors[0].name}</a></span>
        <span class="post-card-byline-date">
          <time datetime={date}>{date}</time>
          <span class="bull">&bull;</span>
          {reading_time} MIN READ
        </span>
      </div>
    </footer>

  </div>
</article>

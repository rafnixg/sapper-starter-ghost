<script>
  import Nav from "./Nav.svelte";
  import Avatar from "./icons/Avatar.svelte";
  export let segment = "";
  export let author;
  export let nav;
</script>

<header class="site-archive-header">
  <div class="outer site-nav-main">
    <div class="inner">
      <Nav {segment} {nav} />
    </div>
  </div>
  <div class="outer site-header-background no-image">
    <div class="inner">
      <div class="site-header-content author-header">
        {#if author.profile_image}
          <img
            class="author-profile-image"
            src={author.profile_image}
            alt={author.name} />
        {:else}
          <span class="author-profile-image">
            <Avatar />
          </span>
        {/if}
        <div class="author-header-content">
          <h1 class="site-title">{author.name}</h1>
          {#if author.bio}
            <h2 class="author-bio">{author.bio}</h2>
          {/if}
          <div class="author-meta">
            {#if author.location}
              <div class="author-location">{author.location}</div>
            {/if}
            {#if author.website}
              <span class="author-social-link">
                <a href={author.website} target="_blank" rel="noopener">
                  Website
                </a>
              </span>
            {/if}
            {#if author.twitter}
              <span class="author-social-link">
                <a href="https://twitter.com/{author.twitter}" target="_blank" rel="noopener">
                  Twitter
                </a>
              </span>
            {/if}
            {#if author.facebook}
              <span class="author-social-link">
                <a href="https://facebook.com/{author.facebook}" target="_blank" rel="noopener">
                  Facebook
                </a>
              </span>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

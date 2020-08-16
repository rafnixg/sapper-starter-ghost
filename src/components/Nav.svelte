<script>
  import Facebook from "./icons/Facebook.svelte";
  import Rss from "./icons/Rss.svelte";
  import Twitter from "./icons/Twitter.svelte";
  // export let segment;
  // export let nav;
  export let settings;
  const nav = {
    title: settings.title,
    description: settings.description,
    navigation: settings.navigation,
    social: {
      twitter: settings.twitter,
      facebook: settings.facebook,
    },
  };
</script>

<nav class="site-nav">
  <div class="site-nav-left-wrapper">
    <div class="site-nav-left">
      <a class="site-nav-logo" href=".">{nav.title}</a>
      <div class="site-nav-content">
        <ul class="nav">
          {#each nav.navigation as link}
            <li>
              <a href={link.url}>{link.label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <div class="site-nav-right">
    <div class="social-links">
      {#if nav.social.facebook}
        <a
          class="social-link social-link-fb"
          href="https://facebook.com/{nav.social.facebook}"
          title="Facebook"
          target="_blank"
          rel="noopener">
          <Facebook />
        </a>
      {/if}
      {#if nav.social.twitter}
        <a
          class="social-link social-link-tw"
          href="https://twitter.com/{nav.social.twitter}"
          title="Twitter"
          target="_blank"
          rel="noopener">
          <Twitter />
        </a>
      {/if}
      <a
        class="rss-button"
        href="rss"
        title="RSS"
        target="_blank"
        rel="noopener">
        <Rss />
      </a>
    </div>
  </div>
</nav>

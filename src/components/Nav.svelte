<script>
  import Facebook from "./icons/Facebook.svelte";
  import Rss from "./icons/Rss.svelte";
  import Twitter from "./icons/Twitter.svelte";
  export let segment;
</script>

<nav class="site-nav">
  <div class="site-nav-left-wrapper">
    <div class="site-nav-left">
      <a class="site-nav-logo" href=".">Ghost</a>
      <div class="site-nav-content">
        <ul class="nav">
          <li>
            <a
              aria-current={segment === undefined ? 'page' : undefined}
              href=".">
              home
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'about' ? 'page' : undefined}
              href="about">
              about
            </a>
          </li>
          <li>
            <a
              rel="prefetch"
              aria-current={segment === 'blog' ? 'page' : undefined}
              href="blog">
              blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="site-nav-right">
    <div class="social-links">
      <a
        class="social-link social-link-fb"
        href="/"
        title="Facebook"
        target="_blank"
        rel="noopener">
        <Facebook />
      </a>
      <a
        class="social-link social-link-tw"
        href="/"
        title="Twitter"
        target="_blank"
        rel="noopener">
        <Twitter />
      </a>
      <a class="rss-button" href="/" title="RSS" target="_blank" rel="noopener">
        <Rss />
      </a>
    </div>
  </div>
</nav>

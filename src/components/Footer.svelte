<script>
import config from "../config";

export let nav;
</script>

<footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">
        <a href="{config.BasePath}">{nav.title}</a>
        &copy; 2020
      </section>
      <nav class="site-footer-nav">
        <a href="{config.BasePath}">Latest Posts</a>
        {#if nav.social.facebook }
        <a href="https://facebook.com/{nav.social.facebook}" target="_blank" rel="noopener">Facebook</a>
        {/if}
        {#if nav.social.twitter }
        <a href="https://twitter.com/{nav.social.twitter}" target="_blank" rel="noopener">Twitter</a>
        {/if}
        <a href="https://ghost.org" target="_blank" rel="noopener">Ghost</a>
      </nav>
    </div>
  </footer>
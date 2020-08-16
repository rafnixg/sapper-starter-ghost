<script>
export let nav;
</script>

<footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">
        <a href="/">{nav.title}</a>
        &copy; 2020
      </section>
      <nav class="site-footer-nav">
        <a href="/">Latest Posts</a>
        <a href="https://facebook.com/{nav.social.facebook}" target="_blank" rel="noopener">Facebook</a>
        <a href="https://twitter.com/{nav.social.twitter}" target="_blank" rel="noopener">Twitter</a>
        <a href="https://ghost.org" target="_blank" rel="noopener">Ghost</a>
      </nav>
    </div>
  </footer>
<script>
import Header from "../components/Header.svelte";
import HeaderIndex from "../components/Header-index.svelte";

  export let segment;
  console.log(segment)
</script>
<div class="site-wrapper">

  {#if !segment }
    <HeaderIndex/>
  {:else}
    <Header/>
  {/if}

    <slot/>

  <footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">
        <a href="/">Ghost</a>
        &copy; 2020
      </section>
      <nav class="site-footer-nav">
        <a href="/">Latest Posts</a>
        <a href="/" target="_blank" rel="noopener">Facebook</a>
        <a href="/" target="_blank" rel="noopener">Twitter</a>
        <a href="https://ghost.org" target="_blank" rel="noopener">Ghost</a>
      </nav>
    </div>
  </footer>
</div>

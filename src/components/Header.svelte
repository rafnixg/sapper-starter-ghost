<script>
  import Nav from "./Nav.svelte";
  let segment = "";
</script>

<header class="site-header">
  <div class="outer site-nav-main">
    <div class="inner">
      <Nav {segment} />
    </div>
  </div>
</header>

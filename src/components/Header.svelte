<script>
  import Nav from "./Nav.svelte";
  export let segment = "";
  export let nav;
</script>

<header class="site-header">
  <div class="outer site-nav-main">
    <div class="inner">
      <Nav {segment} {nav}/>
    </div>
  </div>
</header>

<script>
  import Nav from "./Nav.svelte";
  export let segment = "";
  export let settings;
</script>

<header class="site-header">
  <div class="outer site-nav-main">
    <div class="inner">
      <Nav {segment} {settings}/>
    </div>
  </div>
</header>

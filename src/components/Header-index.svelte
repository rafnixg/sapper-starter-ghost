<script>
  import Nav from "../components/Nav.svelte";
  export let segment;

  export let nav;
</script>

<header class="site-home-header">
  <div class="outer site-header-background no-image">
    <div class="inner">
      <Nav {segment} {nav}/>
      <div class="site-header-content">
        <h1 class="site-title">{nav.title}</h1>
        <h2 class="site-description">{nav.description}</h2>
      </div>
    </div>
  </div>
</header>

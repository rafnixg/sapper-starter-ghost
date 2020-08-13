<script>
  import Nav from "../components/Nav.svelte";
  export let segment;

  export let title = "ghost";
  export let description = "The professional publishing platform";
</script>

<header class="site-home-header">
  <div class="outer site-header-background no-image">
    <div class="inner">
      <Nav {segment} />
      <div class="site-header-content">
        <h1 class="site-title">{title}</h1>
        <h2 class="site-description">{description}</h2>
      </div>
    </div>
  </div>
</header>

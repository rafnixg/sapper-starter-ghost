<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
  export let settings;
</script>

<header class="site-home-header">
  <div class="outer site-header-background no-image">
    <div class="inner">
      <Nav {segment} {settings}/>
      <div class="site-header-content">
        <h1 class="site-title">{settings.title}</h1>
        <h2 class="site-description">{settings.description}</h2>
      </div>
    </div>
  </div>
</header>

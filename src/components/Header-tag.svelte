<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
  export let settings;
  export let tag;
</script>

<header class="site-archive-header">
  <div class="outer site-nav-main">
    <div class="inner">
        <Nav {segment} {settings}/>
    </div>
  </div>
  <div class="outer site-header-background no-image">
    <div class="inner site-header-content">
        <h1 class="site-title">{tag.name}</h1>
        <h2 class="site-description">
        {#if tag.description}
        {tag.description}
        {:else}
        A collection of {tag.posts.length} {tag.posts.length <= 1 ? 'post':'posts'}
        {/if}
        </h2>
    </div>
  </div>
</header>

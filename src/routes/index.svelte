<script context="module">
  export async function preload({ params, query }) {
    const posts = await this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return posts;
      });
    const settings = await this.fetch(`settings.json`).then((r) => r.json());

    return { posts, settings };
  }
</script>

<script>
  import PostCard from "../components/Post-card.svelte";
  import HeaderIndex from "../components/Header-index.svelte";
  export let posts;
  export let settings;
</script>

<svelte:head>
  <title>Blog</title>
  <!--Twitter Card-->

</svelte:head>
<HeaderIndex {settings} />
<main id="site-main" class="site-main outer">
  <div class="inner posts">

    <div class="post-feed">
      {#each posts as post}
        <PostCard {...post} />
      {/each}
    </div>

  </div>
</main>

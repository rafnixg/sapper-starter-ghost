<script context="module">
  export async function preload({ params, query }) {
    const posts = await this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return posts;
      });
    const settings = await this.fetch(`settings.json`).then((r) => r.json());
    const rss = this.fetch("rss.xml")

    return { posts, settings };
  }
</script>

<script>
  import {onMount} from "svelte";
  import PostCard from "../components/Post-card.svelte";
  import HeaderIndex from "../components/Header-index.svelte";
  export let posts;
  export let settings;
  export let segment;
   onMount(() => {
    document.body.className = "home-template";
  });
</script>

<svelte:head>
  <title>Blog</title>
  <!--Twitter Card-->

</svelte:head>
<HeaderIndex {settings} {segment}/>
<main id="site-main" class="site-main outer">
  <div class="inner posts">

    <div class="post-feed">
      {#each posts as post}
        <PostCard {post} />
      {/each}
    </div>

  </div>
</main>

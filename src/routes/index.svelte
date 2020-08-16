<script context="module">
	export async function preload({ params, query }) {

    const posts = await this.fetch(`index.json`).then(r => r.json()).then(posts => {
      return posts ;
    });
    return {posts}
	}
</script>

<script>
	import PostCard from "../components/Post-card.svelte";
  export let posts;
</script>


<svelte:head>
	<title>Blog</title>
  <!--Twitter Card-->
 
</svelte:head>

<main id="site-main" class="site-main outer">
  <div class="inner posts">

    <div class="post-feed">
      {#each posts as post}
        <PostCard {...post} />
      {/each}
    </div>

  </div>
</main>
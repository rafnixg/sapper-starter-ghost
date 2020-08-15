<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from "../../components/Post-card.svelte";
	export let posts;
	const title = "Blog";
</script>


<svelte:head>
	<title>Blog</title>
</svelte:head>

<main id="site-main" class="site-main outer">
  <div class="inner posts">

    <div class="post-feed">
      {#each posts as post}
        <Post {...post} />
      {/each}
    </div>

  </div>
</main>
<script>
  import Post from "../components/Post-card.svelte";
  import {posts} from "../data/demo.js";

  export let va;
</script>

<svelte:head>
  <title>Casper in svelte</title>
</svelte:head>


<main id="site-main" class="site-main outer">
  <h1>Index Page - {va}</h1>
</main>

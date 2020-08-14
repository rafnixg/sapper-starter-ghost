<script>
  import Header from "../components/Header-index.svelte";
  import Post from "../components/Post-card.svelte";
  import {posts} from "../data/demo.js";

  const title = "ghost";
  const description = "The professional publishing platform.";
</script>

<svelte:head>
  <title>Casper in svelte</title>
</svelte:head>

<Header {title} {description} />

<main id="site-main" class="site-main outer">
  <h1>Index Page</h1>
</main>

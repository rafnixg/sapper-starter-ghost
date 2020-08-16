<script context="module">
  export async function preload({ params, query }) {
    const post = await this.fetch(`${params.slug}.json`).then((r) => r.json());
    const settings = await this.fetch(`settings.json`).then((r) => r.json());

    return { post, settings };
  }
</script>

<script>
  import { onMount } from "svelte";
  import Post from "../../components/Post.svelte";
  import Header from "../../components/Header.svelte";
  export let post;
  export let settings;
  
  onMount(() => {
    document.body.className += " post-template";
  });
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Header {settings} />

<main id="site-main" class="site-main outer">
  <div class="inner">
    <Post {post} />
  </div>
</main>

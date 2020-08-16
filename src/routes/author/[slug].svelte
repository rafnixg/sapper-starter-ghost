<script context="module">
  export async function preload({ params, query }) {
    const settings = await this.fetch(`settings.json`).then((r) => r.json());
    const author = await this.fetch(`author/${params.slug}.json`).then((r) =>
      r.json()
    );
    return { author, settings };
  }
</script>

<script>
  import HeaderAuthor from "../../components/Header-author.svelte";
  import { onMount } from "svelte";
  import PostCard from "../../components/Post-card.svelte";

  export let author;
  export let settings;
  onMount(() => {
    document.body.className = "author-template";
  });
</script>

<svelte:head>
  <title>{author.name}</title>
</svelte:head>

<HeaderAuthor {author} {settings} />

<main id="site-main" class="site-main outer">
  <div class="inner posts">

    <div class="post-feed">
      {#each author.posts as post}
        <PostCard {post} />
      {/each}

    </div>

  </div>
</main>

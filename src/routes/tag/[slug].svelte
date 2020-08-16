<script context="module">
  export async function preload({ params, query }) {
    const settings = await this.fetch(`settings.json`).then((r) => r.json());
    const tag = await this.fetch(`tag/${params.slug}.json`).then((r) =>
      r.json()
    );
    return { tag, settings };
  }
</script>

<script>
  import { onMount } from "svelte";
  import PostCard from "../../components/Post-card.svelte";
  import HeaderTag from "../../components/Header-tag.svelte";

  export let tag;
  export let settings;
  onMount(() => {
    document.body.className = "tag-template";
  });
</script>

<svelte:head>
  <title>{tag.name}</title>
</svelte:head>

<HeaderTag {tag} {settings} />

<main id="site-main" class="site-main outer">
  <div class="inner posts">

    <div class="post-feed">
      {#each tag.posts as post}
        <PostCard {post} />
      {/each}

    </div>

  </div>
</main>

<script context="module">
  export async function preload({ params, query }) {
    const posts = await this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return posts;
      });
    const settings = await this.fetch(`settings.json`).then((r) => r.json());
    const rss = this.fetch("rss.xml");

    return { posts, settings };
  }
</script>

<script>
  import { onMount } from "svelte";
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
  <title>{settings.title}</title>
  <!--Twitter Card-->
  <meta name="twitter:site" content={settings.twitter} />
  <meta name="twitter:creator" content={settings.twitter} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={settings.url} />
  <meta
    name="twitter:title"
    content={settings.twitter_title ? settings.twitter_title : settings.title} />
  <meta
    name="twitter:description"
    content={settings.twitter_description ? settings.twitter_description : settings.description} />
  <meta
    name="twitter:image"
    content={settings.twitter_image ? settings.twitter_image : settings.cover_image} />

  <!--Schema-->
  <link rel="author" href={settings.url} />
  <link rel="publisher" href={settings.url} />
  <meta itemprop="name" content={settings.title} />
  <meta itemprop="description" content={settings.description} />
  <meta itemprop="image" content={settings.cover_image} />

  <!-- Facebook OpenGraph -->
  <meta property="og:url" content={settings.url} />
  <meta property="og:type" content="websettings" />
  <meta
    property="og:title"
    content={settings.og_title ? settings.og_title : settings.title} />
  <meta
    property="og:image"
    content={settings.og_image ? settings.og_image : settings.cover_image} />
  <meta
    property="og:description"
    content={settings.og_description ? settings.og_description : settings.description} />
  <meta property="og:site_name" content={settings.title} />
  <meta property="og:locale" content={settings.lang} />
  <meta property="article:author" content={settings.url} />
  {#if settings.codeinjection_head}
    {@html settings.codeinjection_head}
  {/if}
</svelte:head>

<HeaderIndex {settings} {segment} />
<main id="site-main" class="site-main outer">
  <div class="inner posts">

    <div class="post-feed">
      {#each posts as post}
        <PostCard {post} />
      {/each}
    </div>

  </div>
</main>

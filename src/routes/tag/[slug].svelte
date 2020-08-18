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
 <title>{`${tag.name} - ${settings.title}`}</title>
  <!--Twitter Card-->
  <meta name="twitter:site" content={settings.twitter} />
  <meta name="twitter:creator" content={settings.twitter} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={tag.url} />
  <meta
    name="twitter:title"
    content={tag.twitter_title ? tag.twitter_title : `${tag.name} - ${settings.title}`} />
  <meta
    name="twitter:description"
    content={tag.twitter_description ? tag.twitter_description : settings.description} />
  <meta
    name="twitter:image"
    content={tag.twitter_image ? tag.twitter_image : settings.feature_image} />

  <!--Schema-->
  <link rel="author" href={tag.url} />
  <link rel="publisher" href={tag.url} />
  <meta itemprop="name" content={tag.name} />
  <meta itemprop="description" content={settings.description} />
  <meta itemprop="image" content={tag.feature_image} />

  <!-- Facebook OpenGraph -->
  <meta property="og:url" content={tag.url} />
  <meta property="og:type" content="webtag" />
  <meta
    property="og:title"
    content={tag.og_title ? tag.og_title : `${tag.name} - ${settings.title}`} />
  <meta
    property="og:image"
    content={tag.og_image ? tag.og_image : tag.feature_image} />
  <meta
    property="og:description"
    content={tag.og_description ? tag.og_description : settings.description} />
  <meta property="og:site_name" content={`${tag.name} - ${settings.title}`} />
  <meta property="og:locale" content={settings.lang} />
  <meta property="article:author" content={tag.url} />
  {#if tag.codeinjection_head}
    {@html tag.codeinjection_head}
  {/if}
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

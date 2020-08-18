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
  <title>{`${author.name} - ${settings.title}`}</title>
  <!--Twitter Card-->
  <meta name="twitter:site" content={settings.twitter} />
  <meta name="twitter:creator" content={settings.twitter} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={author.url} />
  <meta
    name="twitter:title"
    content={`${author.name} - ${settings.title}`} />
  <meta
    name="twitter:description"
    content={author.bio} />
  <meta
    name="twitter:image"
    content={author.profile_image ? author.profile_image : settings.cover_image} />

  <!--Schema-->
  <link rel="author" href={author.url} />
  <link rel="publisher" href={author.url} />
  <meta itemprop="name" content={author.name} />
  <meta itemprop="description" content={author.bio} />
  <meta itemprop="image" content={author.profile_image ? author.profile_image : settings.cover_image} />

  <!-- Facebook OpenGraph -->
  <meta property="og:url" content={author.url} />
  <meta property="og:type" content="webauthor" />
  <meta
    property="og:title"
    content={`${author.name} - ${settings.title}`} />
  <meta
    property="og:image"
    content={author.profile_image ? author.profile_image : settings.cover_image} />
  <meta
    property="og:description"
    content={author.og_description ? author.og_description : author.bio} />
  <meta property="og:site_name" content={`${author.name} - ${settings.title}`} />
  <meta property="og:locale" content={settings.lang} />
  <meta property="article:author" content={author.url} />
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

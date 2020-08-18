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
  import ReadNext from "../../components/Read-next.svelte";

  export let post;
  export let settings;
  const tag = {
    name: post.primary_tag.name,
    url: `tag/${post.primary_tag.slug}`,
  };
  settings["postTitle"] = post.title;
  onMount(() => {
    document.body.className += " post-template";
  });
</script>

<svelte:head>
  <title>{post.title}</title>
  <!--Twitter Card-->
  <meta name="twitter:site" content={settings.twitter} />
  <meta name="twitter:creator" content={settings.twitter} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={post.url} />
  <meta
    name="twitter:title"
    content={post.twitter_title ? post.twitter_title : post.title} />
  <meta
    name="twitter:description"
    content={post.twitter_description ? post.twitter_description : post.custom_excerpt} />
  <meta
    name="twitter:image"
    content={post.twitter_image ? post.twitter_image : post.feature_image} />

  <!--Schema-->
  <link rel="author" href={post.url} />
  <link rel="publisher" href={post.url} />
  <meta itemprop="name" content={post.title} />
  <meta itemprop="description" content={post.custom_excerpt} />
  <meta itemprop="image" content={post.feature_image} />

  <!-- Facebook OpenGraph -->
  <meta property="og:url" content={post.url} />
  <meta property="og:type" content="webpost" />
  <meta
    property="og:title"
    content={post.og_title ? post.og_title : post.title} />
  <meta
    property="og:image"
    content={post.og_image ? post.og_image : post.feature_image} />
  <meta
    property="og:description"
    content={post.og_description ? post.og_description : post.custom_excerpt} />
  <meta property="og:site_name" content={post.title} />
  <meta property="og:locale" content={settings.lang} />
  <meta property="article:author" content={post.url} />
  {#if post.codeinjection_head}
    {@html post.codeinjection_head}
  {/if}
</svelte:head>

<Header {settings} />

<main id="site-main" class="site-main outer">
  <div class="inner">
    <Post {post} />
  </div>
</main>

<ReadNext
  related_posts={post.related_posts}
  {tag}
  next_post={post.next_post}
  prev_post={post.prev_post} />

<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`settings.json`)
      .then((r) => r.json())
      .then((settings) => {
        return { settings };
      });
  }
</script>

<script>
  import Header from "../components/Header.svelte";
  import HeaderIndex from "../components/Header-index.svelte";
  import Footer from "../components/Footer.svelte";

  export let settings;
  export let segment;
</script>

<svelte:head>
  <title>{settings.tittle}</title>
  <!--Twitter Card-->
  <meta name="twitter:site" content={settings.twitter} />
  <meta name="twitter:creator" content={settings.twitter} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={settings.url} />
  <meta name="twitter:title" content={settings.twitter_title} />
  <meta name="twitter:description" content={settings.twitter_description} />
  <meta name="twitter:image" content={settings.twitter_image} />

  <!--Schema-->
  <link rel="author" href={settings.url} />
  <link rel="publisher" href={settings.url} />
  <meta itemprop="name" content={settings.title} />
  <meta itemprop="description" content={settings.description} />
  <meta itemprop="image" content={settings.cover_image} />

  <!-- Facebook OpenGraph -->
  <meta property="og:url" content={settings.url} />
  <meta property="og:type" content="websettings" />
  <meta property="og:title" content={settings.og_title} />
  <meta property="og:image" content={settings.og_image} />
  <meta property="og:description" content={settings.og_description} />
  <meta property="og:site_name" content={settings.title} />
  <meta property="og:locale" content={settings.lang} />
  <meta property="article:author" content={settings.url} />
</svelte:head>

<div class="site-wrapper">

  {#if !segment}
    <HeaderIndex />
  {:else}
    <Header />
  {/if}

  <slot />

  <Footer />
</div>

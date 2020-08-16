<script context="module">
  export async function preload({ params, query }) {
    const author = await this.fetch(`author/${params.slug}.json`).then((r) =>
      r.json()
    );
    const settings = await this.fetch(`settings.json`).then((r) => r.json());
    return { author, settings };
  }
</script>

<script>
  import HeaderAuthor from "../../components/Header-author.svelte";
  import { onMount } from "svelte";

  export let author;
  export let settings;
  const nav = {
    title: settings.title,
    description: settings.description,
    navigation: settings.navigation,
    social: {
      twitter: settings.twitter,
      facebook: settings.facebook,
    },
  };
  onMount(() => {
    document.body.className = "author-template";
  });
</script>

<svelte:head>
  <title>{author.name}</title>
</svelte:head>

<HeaderAuthor {author} {nav} />

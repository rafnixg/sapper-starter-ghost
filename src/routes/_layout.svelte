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
  import Footer from "../components/Footer.svelte";

  export let settings;
  export let segment;
  const nav = {
    title: settings.title,
    description: settings.description,
    navigation: settings.navigation,
    social: {
      twitter: settings.twitter,
      facebook: settings.facebook,
    },
  };
</script>

<div class="site-wrapper">

  <slot {segment}/>

  <Footer {nav} />
</div>
{@html settings.codeinjection_foot}

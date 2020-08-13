<script>
  import Header from "../components/Header-index.svelte";

  const title = "ghost";
  const description = "The professional publishing platform.";
</script>

<svelte:head>
  <title>Casper in svelte</title>
</svelte:head>

<Header {title} {description} />

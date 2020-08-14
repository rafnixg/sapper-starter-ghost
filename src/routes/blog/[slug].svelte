<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
import {onMount} from 'svelte';
  import Header from "../../components/Header.svelte";
  import Post from "../../components/Post.svelte";
  export let post;
  onMount(()=>{
	document.body.className += " post-template";
	}
  );
</script>



<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Header />

<main id="site-main" class="site-main outer">
  <div class="inner">

    <Post {post}/>

  </div>
</main>

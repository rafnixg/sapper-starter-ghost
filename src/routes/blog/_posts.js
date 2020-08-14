// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "A Full and Comprehensive Style Test",
    slug: "post1",
    url: "http://localhost:4000/",
    post_class: "post",
    feature_image:
      "https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",
    primary_tag: "Tag",
    excerpt:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    content:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    date: "28/08/2020",
    reading_time: "5 min READ",
    authors: [
      {
        name: "Author name",
        url: "http://localhost:4000",
      },
    ],
  },
  {
    title: "A Full and Comprehensive Style Test",
    url: "http://localhost:4000/",
    slug: "post2",
    post_class: "post",
    feature_image:
      "https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",
    primary_tag: "Tag",
    excerpt:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    content:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    date: "28/08/2020",
    reading_time: "5 min READ",
    authors: [
      {
        name: "Author name",
        url: "http://localhost:4000",
      },
    ],
  },
  {
    title: "A Full and Comprehensive Style Test",
    slug: "post3",
    url: "http://localhost:4000/",
    post_class: "post",
    feature_image:
      "https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",
    primary_tag: "Tag",
    excerpt:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    content:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    date: "28/08/2020",
    reading_time: "5 min READ",
    authors: [
      {
        name: "Author name",
        url: "http://localhost:4000",
      },
    ],
  },
  {
    title: "A Full and Comprehensive Style Test",
    slug: "post4",
    url: "http://localhost:4000/",
    post_class: "post",
    feature_image:
      "https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",
    primary_tag: "Tag",
    excerpt:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    content:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    date: "28/08/2020",
    reading_time: "5 min READ",
    authors: [
      {
        name: "Author name",
        url: "http://localhost:4000",
      },
    ],
  },
  {
    title: "A Full and Comprehensive Style Test",
    slug: "post5",
    url: "http://localhost:4000/",
    post_class: "post",
    feature_image:
      "https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",
    primary_tag: "Tag",
    excerpt:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    content:
      "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    date: "28/08/2020",
    reading_time: "5 min READ",
    authors: [
      {
        name: "Author name",
        url: "http://localhost:4000",
      },
    ],
  },
];

posts.forEach((post) => {
  post.content = post.content.replace(/^\t{3}/gm, "");
});

export default posts;

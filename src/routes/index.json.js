import ghost from "./_ghost";

export async function get(req, res, next) {

    const posts = await ghost.posts();
	
    if(posts !== null){
        res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(posts.map(post => {
			return {
				title: post.title,
				slug: post.slug,
				post_class: post.slug,
				feature_image: post.feature_image,
				date: post.published_at,
				primary_tag: post.primary_tag,
				excerpt: post.excerpt,
				reading_time: post.reading_time,
				authors: post.authors,
			};
		})));
	} else {
		next();
	}

}
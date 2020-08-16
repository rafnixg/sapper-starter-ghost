import posts from './blog/_posts.js';
import ghost from "./_ghost";

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		post_class: post.post_class,
		feature_image: post.feature_image,
		date: post.date,
		primary_tag: post.primary_tag,
		excerpt: post.excerpt,
		reading_time: post.reading_time,
		authors: post.authors,

	};
}));

export async function get(req, res, next) {

    const settings = await ghost.posts();
   
    if(settings !== null){
        res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(settings));
	} else {
		next();
	}

}
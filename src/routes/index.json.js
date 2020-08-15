import posts from './blog/_posts.js';

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

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
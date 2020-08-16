import ghost from "../_ghost";


export async function get(req, res, next) {
	const { slug } = req.params;

	let tag = await ghost.tag(slug);
	const posts = await ghost.tagPost(slug);
	tag['posts'] = posts;
	if(tag !== null){
        res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(tag));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

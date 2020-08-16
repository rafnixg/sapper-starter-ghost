import ghost from "../_ghost";


export async function get(req, res, next) {
	const { slug } = req.params;

	let author = await ghost.author(slug);
	const posts = await ghost.authorPost(slug);
	author['posts'] = posts;
	if(author !== null){
        res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(author));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

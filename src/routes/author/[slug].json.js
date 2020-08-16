import ghost from "../_ghost";


export async function get(req, res, next) {
	const { slug } = req.params;

	const author = await ghost.author(slug);
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

import ghost from "./_ghost";

export async function get(req, res, next) {

    const posts = await ghost.posts();
	
    if(posts !== null){
        res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(posts));
	} else {
		next();
	}

}
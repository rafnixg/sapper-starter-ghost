
import ghost from "./_ghost";

export async function get(req, res, next) {

    const settings = await ghost.settings();
   
    if(settings !== null){
        res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(settings));
	} else {
		next();
	}

}
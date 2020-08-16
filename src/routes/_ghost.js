import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: 'https://demo.ghost.io',
    key: '22444f78447824223cefc48062',
    version: "v3"
  });

async function settings(){
    const settings =  await api.settings.browse();
    return settings
}
async function posts(){
    const posts =  await api.posts.browse({limit: 5, include: 'tags,authors'});
    return posts
}
async function post(slug){
    const post = await api.posts.read({slug: slug}, {formats: ['html', 'plaintext'], include: 'tags,authors'});
    return post
}
export default {
    settings: settings,
    posts: posts,
    post: post
}
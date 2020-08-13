var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/casper-svelte',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/rafnixg/casper-svelte.git',
        user: {
            name: 'Rafnix',
            email: 'rafnixg@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)


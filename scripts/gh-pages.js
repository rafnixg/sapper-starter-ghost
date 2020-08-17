var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/sapper-starter-ghost',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/rafnixg/sapper-starter-ghost.git',
        user: {
            name: 'Rafnix',
            email: 'rafnixg@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)


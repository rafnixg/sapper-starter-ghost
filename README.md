# Casper(Ghost theme) theme in Svelte and Sapper [WIP]

This is a template developed in svelte and sapper taking as reference to [https://github.com/TryGhost/Casper/](https://github.com/TryGhost/Casper/)


## Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.


## Configuring the project

Edit the `src/config.js` file whit your integration GHOST data

```javascript
{
    GhostURL: 'https://demo.ghost.io',
    SiteURL: 'http://localhost:3000/',
    GhostContetKey: '22444f78447824223cefc48062',
    GhostAPIVersion: 'v3'
}
```

## Export

```bash
$ npm run export

```

## WIP
- [X] Ghost API Config (*.ghost*)
- [X] Google Analytics Config
- [ ] RSS
- [ ] Sitemap
- [ ] Metadata SEO & Open Graph
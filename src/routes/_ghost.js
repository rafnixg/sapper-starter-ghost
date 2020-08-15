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

export default {
    settings: settings
}
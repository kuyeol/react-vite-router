import { Manager as MetaManager } from '@lomray/react-head-manager';
import { Manager } from '@lomray/react-mobx-manager';
import MobxLocalStorage from '@lomray/react-mobx-manager/storages/local-storage';
import entryClient from '@lomray/vite-ssr-boost/browser/entry';
import getServerState from '@lomray/vite-ssr-boost/helpers/get-server-state';
import { IS_PROD } from '@constants/index.ts';
import StateKey from '@constants/state-key.ts';
import routes from '@routes/index.ts';
import App from './app.tsx';

const initState = getServerState(StateKey.storeManager, IS_PROD);
const metaState = getServerState(StateKey.metaManager, IS_PROD);

const metaManager = new MetaManager(metaState);
const storeManager = new Manager({
  initState,
  storage: new MobxLocalStorage(),
});

/**
 * Configure client
 */
void entryClient(App, routes, {
  init: async () => {
    await storeManager.init();

    return {
      storeManager,
      metaManager,
    };
  },
});

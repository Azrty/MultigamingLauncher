import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Downloaders from '~/store/downloaders'
import Updater from '~/store/updater'
import Page from '~/store/page'
import Servers from '~/store/servers'

// eslint-disable-next-line import/no-mutable-exports
let downloadersStore: Downloaders
// eslint-disable-next-line import/no-mutable-exports
let updaterStore: Updater
// eslint-disable-next-line import/no-mutable-exports
let pageStore: Page
// eslint-disable-next-line import/no-mutable-exports
let serverStore: Servers

function initialiseStores (store: Store<any>): void {
  downloadersStore = getModule(Downloaders, store)
  updaterStore = getModule(Updater, store)
  pageStore = getModule(Page, store)
  serverStore = getModule(Servers, store)
}

export {
  initialiseStores,
  downloadersStore,
  updaterStore,
  pageStore,
  serverStore
}

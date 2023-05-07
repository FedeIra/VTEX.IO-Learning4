import { IOClients } from '@vtex/api'

import MasterData from './masterdata'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get masterDataCustom() {
    return this.getOrSet('masterDataCustom', MasterData)
  }
}

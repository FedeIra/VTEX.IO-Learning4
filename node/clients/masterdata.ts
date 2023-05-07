import { MasterData } from '@vtex/api'
import { schemaBody } from '../constants/schema'

export default class Status extends MasterData {
  public async verifySchema(){
    const schema = this.getSchema({
      dataEntity: 'usersExample',
      schema: 'usersExample',
    })
    if (!schema) {
      const newSchema = await this.createOrUpdateSchema({
        dataEntity: 'usersExample',
        schemaName: 'usersExample',
        schemaBody,
      })
      return newSchema
    }
    console.log('SCHEMAAAAAAA:', schema);

    return schema
  }
}

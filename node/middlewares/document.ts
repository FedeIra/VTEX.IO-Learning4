export async function document(ctx: Context, next: () => Promise<any>) {

  const {
    clients: { masterDataCustom },
    vtex: {
      route: { params },
    },
  } = ctx

  const schema = await masterDataCustom.verifySchema()

  console.log(schema);

  const id: any = params.id ?? ''

  const documentResponse = await masterDataCustom.getDocument({
    dataEntity:'usersExample',
    id,
    fields: ['name', 'email']
  })

  ctx.body = documentResponse
  ctx.status = 200

  await next()
}

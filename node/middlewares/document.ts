export async function document(ctx: Context, next: () => Promise<any>) {
  // const {
  //   clients: { masterData },
  // } = ctx

  await next()
}

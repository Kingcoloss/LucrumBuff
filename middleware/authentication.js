export default async function (context) {
  const exceptPageNameList = ['index', 'login']

  const { app, store, route } = context
  const { name } = route

  const userData = app.$ucookies.get('U_uuid')

  if (exceptPageNameList.includes(name)) {
    if (name === 'login') {
      // check cookie
      if (userData) {
        await store.dispatch('fetchUserData')
        app.router.push({ name: 'dashboard' })
      }
    }
  } else if (userData) {
    await store.dispatch('fetchUserData')
    app.router.push({ name: 'dashboard' })
  } else {
    app.router.push({ name: 'login' })
  }
}

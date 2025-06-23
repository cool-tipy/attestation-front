export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')

  if (!token.value && !to.path.startsWith('/auth')) {
    return navigateTo('/auth/login')
  }

  if (token.value && to.path.startsWith('/auth')) {
    return navigateTo('/')
  }
})

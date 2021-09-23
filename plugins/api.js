
export default function ({ $axios, $auth, redirect, env }, inject) {
  const api = $axios.create({
    baseURL: env.API_BASE_PATH,
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8;'
      }
    }
  })

  api.interceptors.request.use(async (options) => {
    const headers = await $auth.getHeaders()
    options.headers = {
      ...options.headers,
      ...headers
    }
    return options
  })

  api.interceptors.response.use(r => r, (error) => {
    const code = parseInt(error.response && error.response.status)

    if (code === 401) {
      redirect('/')
      return Promise.reject(new Error(error.response.data?.message))
    }
    const data = error.response.data
    const message = (typeof data === 'object') ? data[0]?.message : error
    return Promise.reject(new Error(message))
  })

  inject('api', api)
}

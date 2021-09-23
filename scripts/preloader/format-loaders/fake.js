export default async function ({ timeout = 0, success = true }) {
  await new Promise(resolve => setTimeout(resolve, timeout))
  return { success, message: '' }
}

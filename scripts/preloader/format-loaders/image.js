import loaderImage from '@/utils/image-loader.js'

export default async function ({ src }) {
  try {
    const result = await loaderImage(src)
    return {
      target: result.target,
      success: true,
      message: ''
    }
  } catch (e) {
    return {
      target: null,
      success: false,
      message: e.message
    }
  }
}

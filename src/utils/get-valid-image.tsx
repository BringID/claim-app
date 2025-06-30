import { ipfsRedefineURL } from './'

const getValidImage = async (imageUrl: string) => {
  if (!imageUrl) {
    return ''
  }
  try {
    const redefinedURL = ipfsRedefineURL(imageUrl)
    const checkImage = await fetch(redefinedURL)
    if (checkImage.status === 404) { throw new Error() }
    return redefinedURL
  } catch (err) {
    console.log(err)
    return ''
  }
}
export default getValidImage
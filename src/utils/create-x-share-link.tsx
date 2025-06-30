type TCreateXShareLink = (
  link: string,
  text?: string
) => string

const createXShareLink: TCreateXShareLink = (
  link,
  text
) => {

  const linkEncoded = encodeURI(link)
  const textEncoded = text ? encodeURIComponent(text) : ''
  return `https://x.com/intent/post?url=${linkEncoded}&text=${textEncoded}`
}


export default createXShareLink
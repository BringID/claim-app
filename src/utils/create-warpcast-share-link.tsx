type TCreateWarpcastShareLink = (
  link: string,
  text?: string
) => string

const createWarpcastShareLink: TCreateWarpcastShareLink = (
  link,
  text
) => {

  const linkEncoded = encodeURI(link)
  const textEncoded = text ? encodeURIComponent(text) : ''
  return `https://warpcast.com/~/compose?text=${textEncoded}&embeds[]=${linkEncoded}`
}


export default createWarpcastShareLink
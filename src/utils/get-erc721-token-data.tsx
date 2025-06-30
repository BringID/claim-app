// import { ERC721Contract } from '@/abi'
// import { ethers } from 'ethers'
// import {
//   createAlchemyInstance,
//   defineJSONRPC,
//   getAlchemyTokenImage,
//   ipfsRedefineURL,
//   getValidImage
// } from '@/utils'
// import {
//   getERC721TokenData
// } from '@/app/api'
// import {
//   TTokenData,
//   TAlchemyNFTData
// } from 'types'

// type TGetTokenERC721Data = (
//   tokenAddress: string,
//   chainId: number | null,
//   tokenId: string
// ) => Promise<
//   TTokenData
// >

// const getTokenERC721Data: TGetTokenERC721Data = async (
//   tokenAddress,
//   chainId,
//   tokenId
// ) => {
//   try {
//     const alchemy = createAlchemyInstance(chainId)
//     if (!alchemy) {
//       throw new Error('No Alchemy instance is created')
//     }
//     const tokenData = await alchemy.nft.getNftMetadata(tokenAddress, tokenId)
//     const image = await getAlchemyTokenImage(tokenData as TAlchemyNFTData)
//     return {
//       name: tokenData.name || 'ERC721 Token',
//       image: image || '',
//       description: tokenData.description,
//       standard: 'ERC721',
//       address: tokenAddress,
//       decimals: 0,
//       id: tokenId,
//       symbol: 'ERC721 Token'
//     }
//   } catch (err) {
//     console.log({ err })
//     try {
//       const jsonRpcUrl = defineJSONRPC(chainId as number)
//       const provider = new ethers.JsonRpcProvider(jsonRpcUrl, chainId as number, {
//         staticNetwork: true
//       })
    
//       const contractInstance = new ethers.Contract(tokenAddress, ERC721Contract, provider)
//       const actualUrl = ipfsRedefineURL(await contractInstance.tokenURI(tokenId), tokenId)
//       const tokenData = await getERC721TokenData(actualUrl)
//       const image = await getValidImage(tokenData.data.animation_url || tokenData.data.image)

//       return {
//         decimals: 0,
//         description: '',
//         standard: 'ERC721',
//         address: tokenAddress,
//         id: tokenId,
//         image,
//         symbol: tokenData.data.name
//       }
//     } catch (err) {
//       console.log({ err })
//       return {
//         symbol: 'ERC721 Token',
//         decimals: 0,
//         description: '',
//         standard: 'ERC721',
//         address: tokenAddress,
//         id: tokenId
//       }
//     }
//   }  
// }


// export default getTokenERC721Data


export {}
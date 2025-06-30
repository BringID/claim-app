// import { ERC1155Contract } from '@/abi'
// import { ethers } from 'ethers'
// import {
//   createAlchemyInstance,
//   defineJSONRPC,
//   getAlchemyTokenImage,
//   ipfsRedefineURL,
//   getValidImage
// } from '@/utils'
// import {
//   getERC1155TokenData
// } from '@/app/api'
// import {
//   TTokenData,
//   TAlchemyNFTData
// } from 'types'

// type TGetTokenERC1155Data = (
//   tokenAddress: string,
//   chainId: number | null,
//   tokenId: string,
//   tokenName?: string | null,
//   tokenImage?: string | null 
// ) => Promise<
//   TTokenData
// >

// const getTokenERC1155Data: TGetTokenERC1155Data = async (
//   tokenAddress,
//   chainId,
//   tokenId,
//   tokenName,
//   tokenImage
// ) => {

//   if (tokenName && tokenImage) {
//     return {
//       name: tokenName,
//       image: tokenImage,
//       description: tokenName,
//       standard: 'ERC1155',
//       address: tokenAddress,
//       decimals: 0,
//       id: tokenId,
//       symbol: tokenName
//     }
//   }
//   try {
//     const alchemy = createAlchemyInstance(chainId)
//     if (!alchemy) {
//       throw new Error('No Alchemy instance is created')
//     }
//     const tokenData = await alchemy.nft.getNftMetadata(tokenAddress, tokenId)
//     const image = await getAlchemyTokenImage(tokenData as TAlchemyNFTData)
//     return {
//       name: tokenData.name || 'ERC1155 Token',
//       image: image || '',
//       description: tokenData.description,
//       standard: 'ERC1155',
//       address: tokenAddress,
//       decimals: 0,
//       id: tokenId,
//       symbol: 'ERC1155 Token'
//     }
//   } catch (err) {
//     console.log({ err })
//     try {
//       const jsonRpcUrl = defineJSONRPC(chainId as number)
//       const provider = new ethers.JsonRpcProvider(jsonRpcUrl, chainId as number, {
//         staticNetwork: true
//       })
//       const contractInstance = new ethers.Contract(tokenAddress, ERC1155Contract, provider)
//       const actualUrl = ipfsRedefineURL(await contractInstance.uri(tokenId), tokenId)
//       const tokenData = await getERC1155TokenData(actualUrl, tokenId)
//       const image = await getValidImage(tokenData.data.animation_url || tokenData.data.image)
//       return {
//         decimals: 0,
//         description: '',
//         standard: 'ERC1155',
//         address: tokenAddress,
//         id: tokenId,
//         image,
//         symbol: tokenData.data.name
//       }
//     } catch (err) {
//       console.log({ err })
//       return {
//         symbol: 'ERC1155 Token',
//         decimals: 0,
//         description: '',
//         standard: 'ERC1155',
//         address: tokenAddress,
//         id: tokenId
//       }
//     }
//   }  
// }


// export default getTokenERC1155Data

export {}
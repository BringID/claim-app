import { ethers, JsonRpcSigner } from 'ethers'
import { DropFactory } from '../abi'
import { dropAddress } from '../app/configs'


type TCheckIfERC721TokenIsClaimed = (
  userAddress: string,
  signer: JsonRpcSigner
) => Promise<boolean>

const checkIfERC721TokenIsClaimed: TCheckIfERC721TokenIsClaimed = async (
  userAddress,
  signer
) => {
    const contract = new ethers.Contract(
      dropAddress,
      DropFactory,
      signer as JsonRpcSigner
    )

    const minted = await contract.minted(userAddress)

    return Boolean(minted)
}

export default checkIfERC721TokenIsClaimed

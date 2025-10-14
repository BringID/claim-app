import { ethers, JsonRpcSigner } from 'ethers'
import { DropFactory } from '../abi'
import { dropAddress } from '../app/configs'


type TCheckIfTokenIsClaimed = (
  userAddress: string,
  signer: JsonRpcSigner
) => Promise<boolean>

const checkIfTokenIsClaimed: TCheckIfTokenIsClaimed = async (
  userAddress,
  signer
) => {
    const contract = new ethers.Contract(
      dropAddress as string,
      DropFactory,
      signer as JsonRpcSigner
    )

    const isClaimed = await contract.isClaimed(userAddress)

    return Boolean(isClaimed)
}

export default checkIfTokenIsClaimed

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
      dropAddress,
      DropFactory,
      signer as JsonRpcSigner
    )

    const minted = await contract.minted(userAddress)

    return Boolean(minted)
}

export default checkIfTokenIsClaimed

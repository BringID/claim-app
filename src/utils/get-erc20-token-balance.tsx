import { ethers } from 'ethers'
import { ERC20Contract } from 'abi'

const getERC20TokenBalance = async (
  tokenAddress: string,
  userAddress: string,
  signer: any
) => {
  try {

    const contractInstance = new ethers.Contract(tokenAddress, ERC20Contract, signer)
    const tokenAmount = await contractInstance.balanceOf(userAddress)
    const tokenDecimals = await contractInstance.decimals()

    return {
      tokenAmount,
      tokenDecimals
    }
  } catch (err) {
    console.log({
      err
    })
    return null
  }

}

export default getERC20TokenBalance

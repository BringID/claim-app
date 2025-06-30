import { ethers } from 'ethers'

const countLaunchAmounts = (
  tokensPerClaim: string,
  totalClaims: string,
  decimals: number
) => {
  if (tokensPerClaim === '0' || totalClaims === '0') {
    return {
      amount: '0',
      comission: '0',
      totalAmount: '0'
    }
  }

  const tokensPerClaimFormatted = ethers.parseUnits(
    tokensPerClaim,
    decimals
  ) // atomic

  const amount: bigint = BigInt(tokensPerClaimFormatted) * BigInt(totalClaims)
  const comission: bigint = amount / BigInt(1000) * BigInt(3)
  const totalAmount: bigint = amount + comission

  console.log({
    amount,
    comission,
    totalAmount
  })

  return {
    amount,
    comission,
    totalAmount
  }
}

export default countLaunchAmounts
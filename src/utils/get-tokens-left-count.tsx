import { TOKEN_ADDRESS, TOKEN_DECIMALS } from "@/app/configs/app-token";
import { dropAddress, jsonRPCUrl } from "@/app/configs";
import { ERC20Contract } from "@/abi";
import { ethers } from "ethers";


const getTokensLeftCount = async () => {
  const provider = new ethers.JsonRpcProvider(jsonRPCUrl);
  console.log({
    TOKEN_ADDRESS,
    dropAddress,
    jsonRPCUrl
  })
  const tokenContract = new ethers.Contract(TOKEN_ADDRESS, ERC20Contract, provider);
  
  const balance: bigint = await tokenContract.balanceOf(dropAddress);
  console.log({ balance })
  return BigInt(parseInt(ethers.formatUnits(balance, TOKEN_DECIMALS)))
}

export default getTokensLeftCount
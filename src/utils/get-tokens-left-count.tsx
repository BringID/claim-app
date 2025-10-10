import { TOKEN_ADDRESS, TOKEN_DECIMALS } from "@/app/configs/app-token";
import { dropAddress } from "@/app/configs";
import { ERC20Contract } from "@/abi";
import { ethers } from "ethers";
import defineJSONRpcUrl from "./define-json-rpc";
import * as configs from '@/app/configs'


const getTokensLeftCount = async () => {
  const jsonRPCUrl = defineJSONRpcUrl(configs.networkId)
  const provider = new ethers.JsonRpcProvider(jsonRPCUrl);
  const tokenContract = new ethers.Contract(TOKEN_ADDRESS, ERC20Contract, provider);
  
  const balance: bigint = await tokenContract.balanceOf(dropAddress);
  console.log({ balance })
  return BigInt(parseInt(ethers.formatUnits(balance, TOKEN_DECIMALS)))
}

export default getTokensLeftCount
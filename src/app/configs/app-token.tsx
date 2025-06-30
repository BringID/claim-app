import {
  ethers
} from 'ethers'
export const TOKEN_ADDRESS = '0xAEBd651C93Cd4EaE21DD2049204380075548aDd5'
export const TOKEN_BUY_ADDRESS = 'https://dexscreener.com/base/0xceb9ce741dc04e87366198c7dc96d76ed74dce6c'
export const TOKEN_STAKE_AMOUNT = '1000'
export const TOKEN_DECIMALS = 18
export const TOKEN_STAKE_AMOUNT_ATOMIC = ethers.parseUnits(TOKEN_STAKE_AMOUNT, TOKEN_DECIMALS)
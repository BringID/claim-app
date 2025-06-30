// fee_amount: '0',
// source: 'dashboard',
// transfer_id: '0xcd060cB9d220e4EdA842E768eCf71Fe8230eBC64',
// status: 'deposited',
// token: '0x478e03d45716dda94f6dbc15a633b0d90c237e2f',
// token_id: '0',
// amount: '1000000000000000000',
// sender: '0xb4c3d57327d4fc9bcc3499963e21db1a5435d537',
// token_type: 'ERC20',
// chain_id: 8453,
// total_amount: '1000000000000000000',
// escrow: '0x6a267e705159b3556693d9140503d77e7ec2519c',
// expiration: 17111305472273,
// version: '3',
// fee_token: '0x0000000000000000000000000000000000000000',

import TWalletName from "./wallet-name"



type TLinkParams = {
  token_id: string
  amount: string
  token_address: string
  chain_id: number
  token_standard: string
  expiration_time: number
  transfer_id: string

  proxy_contract_version?: string
  creator_address?: string
  campaign_number?: string
  symbol?: string
  claim_pattern?: string
  sender_signature?: string
  sponsored?: boolean
  link_key?: string

  // update for sdk-p2p
  wallet?: TWalletName | null
  claiming_finished_description?: string | null
  claiming_finished_button_title?: string | null
  claiming_finished_button_url?: string | null
  claiming_finished_button_on?: boolean | null
  claiming_finished_auto_redirect?: boolean | null
  preferred_wallet_on?: boolean | null
  additional_wallets_on?: boolean | null
  wei_amount?: string | null
  token_image?: string | null
  token_name?: string | null
  // update for sdk-p2p

  factory_address?: string

}

export default TLinkParams
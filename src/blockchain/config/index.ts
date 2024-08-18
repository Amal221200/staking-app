import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage, http } from 'wagmi'
import { mainnet, sepolia, bscTestnet, bsc, bscGreenfield } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

export const metadata = {
    name: 'Staking App',
    description: 'Staking App',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [bscTestnet] as const
const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    }),
    transports:{
        [bscTestnet.id]: http(process.env.NEXT_PUBLIC_RPC_ENDPOINT),
    }
})

export default wagmiConfig
"use client"
import { useAccount, useWriteContract } from 'wagmi'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import { FormEvent, useCallback } from 'react'
import abi from "@/blockchain/contract/StakedBTCAbi.json"
import { CONTRACT_ADDRESS } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { log } from 'console'

const StakeForm = () => {
    const router = useRouter()
    const { isConnected, address } = useAccount()
    const { writeContractAsync } = useWriteContract()

    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const tokens = parseFloat(formData.get('tokens')?.toString() || '0')
        if (tokens <= 0) {
            alert('Invalid amout')
            return
        }

        const approveHash = await writeContractAsync({ abi, address: CONTRACT_ADDRESS, args: ["0x7d63A2418E168E85bD344d9078bEd53910D18f2a", tokens], functionName: 'approve', })
        if(!approveHash){
            // 
        }
        const depositHash = await writeContractAsync({ abi, address: CONTRACT_ADDRESS, args: [tokens], functionName: 'deposit' })

        // if(!depositHash){
        //     // 
        // }
        // const stakeHash = await writeContractAsync({ abi, address: CONTRACT_ADDRESS, args: [BigInt(tokens)], functionName: 'stake' })
        router.refresh()
    }, [writeContractAsync, router])

    return (
        <form onSubmit={handleSubmit} className="my-2 w-[300px]">
            <input type="number" name='tokens' className="mb-2 w-full rounded-md p-2" placeholder='Stake your WBTC Token' />
            <PrimaryButton disabled={!isConnected} type="submit" className="inline-block w-full disabled:cursor-not-allowed">
                Stake
            </PrimaryButton>
        </form>
    )
}

export default StakeForm
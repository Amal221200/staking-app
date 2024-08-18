"use client"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { CONTRACT_ADDRESS } from "@/lib/constants"
import abi from "@/blockchain/contract/StakedBTCAbi.json"
import { FormEvent, useCallback } from "react"
import { useAccount, useWriteContract } from "wagmi"
import { useRouter } from "next/navigation"


const WithdrawForm = () => {
    const { isConnected } = useAccount()
    const {writeContractAsync} = useWriteContract()
    const router = useRouter()
    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const tokens = parseFloat(formData.get('tokens')?.toString() || '0')
        
        if (tokens <= 0) {
            alert('Invalid amout')
            return
        }

        const depositHash = await writeContractAsync({ abi, address: CONTRACT_ADDRESS, args: [tokens], functionName: 'unstake', })

        // if(!depositHash){
        //     // 
        // }
        // const stakeHash = await writeContractAsync({ abi, address: CONTRACT_ADDRESS, args: [BigInt(tokens)], functionName: 'withdraw' })
        router.refresh()
    }, [router, writeContractAsync])
    return (
        <form onSubmit={handleSubmit} className="my-2 w-[300px]">
            <input name="tokens" type="number" className="mb-2 w-full rounded-md p-2" placeholder="Unstake your token" />
            <PrimaryButton disabled={!isConnected} type="submit" className="inline-block w-full disabled:cursor-not-allowed">
                Withdraw
            </PrimaryButton>
        </form>
    )
}

export default WithdrawForm
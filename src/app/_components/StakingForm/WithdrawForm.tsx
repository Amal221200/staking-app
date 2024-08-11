"use client"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { useAccount } from "wagmi"


const WithdrawForm = () => {
    const { isConnected } = useAccount()
    
    return (
        <form className="my-2 w-[300px]">
            <input type="number" className="mb-2 w-full rounded-md p-2" />
            <PrimaryButton disabled={!isConnected} type="submit" className="inline-block w-full disabled:cursor-not-allowed">
                Withdraw
            </PrimaryButton>
        </form>
    )
}

export default WithdrawForm
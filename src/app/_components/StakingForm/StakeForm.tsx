"use client"
import { useAccount } from 'wagmi'
import PrimaryButton from '@/components/buttons/PrimaryButton'

const StakeForm = () => {
    const { isConnected } = useAccount()

    return (
        <form className="my-2 w-[300px]">
            <input type="number" className="mb-2 w-full rounded-md p-2" />
            <PrimaryButton disabled={!isConnected} type="submit" className="inline-block w-full disabled:cursor-not-allowed">
                Stake
            </PrimaryButton>
        </form>
    )
}

export default StakeForm
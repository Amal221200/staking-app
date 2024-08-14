"use client"
import { useAccount } from 'wagmi'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import { FormEvent, useCallback } from 'react'

const StakeForm = () => {
    const { isConnected } = useAccount()

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)
        const tokens = parseFloat(formData.get('tokens')?.toString() ?? '0')
        if(tokens <=0){
            // Validating
        }
    }, [])

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
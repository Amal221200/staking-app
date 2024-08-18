"use client"
import React, { ComponentProps } from 'react'
import PrimaryButton from './PrimaryButton'
import { useAccount, useReadContract } from 'wagmi'
import abi from "@/blockchain/contract/StakedBTCAbi.json"
import { cn } from '@/lib/utils'

interface ClaimRewardButtonProps extends ComponentProps<"button"> {

}

const ClaimRewardButton = ({ className, ...props }: ClaimRewardButtonProps) => {
  const { isConnected,address } = useAccount()
  const { data } = useReadContract({ abi, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`, functionName: 'calculateRewards', args:[address] })
  
  return (
    <PrimaryButton disabled={!isConnected} className={cn('disabled:cursor-not-allowed', className)} {...props}>
      Claim Reward - <span className='text-sm opacity-90'>({Number(data)} sBTC)</span>
    </PrimaryButton>
  )
}

export default ClaimRewardButton
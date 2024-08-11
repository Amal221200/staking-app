"use client"
import React, { ComponentProps } from 'react'
import PrimaryButton from './PrimaryButton'
import { useAccount } from 'wagmi'
import { cn } from '@/lib/utils'

interface ClaimRewardButtonProps extends ComponentProps<"button"> {

}

const ClaimRewardButton = ({ className, ...props }: ClaimRewardButtonProps) => {
  const { isConnected } = useAccount()

  return (
    <PrimaryButton disabled={!isConnected} className={cn('disabled:cursor-not-allowed', className)} {...props}>
      Claim Reward
    </PrimaryButton>
  )
}

export default ClaimRewardButton
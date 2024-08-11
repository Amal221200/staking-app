"use client"
import React, { ComponentProps } from 'react'
import PrimaryButton from './PrimaryButton'
import { useAccount } from 'wagmi'

interface ClaimRewardButtonProps extends ComponentProps<"button"> {

}

const ClaimRewardButton = ({ disabled, ...props }: ClaimRewardButtonProps) => {
  const { isConnected } = useAccount()
  
  return (
    <PrimaryButton disabled={!isConnected} className='disabled:cursor-not-allowed' {...props}>
      Claim Reward
    </PrimaryButton>
  )
}

export default ClaimRewardButton
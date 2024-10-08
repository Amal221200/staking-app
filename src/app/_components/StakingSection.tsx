"use client"
import { StakingContextProvider } from '@/context/StakingContext'
import StakingForm from './StakingForm'
import { useEffect, useRef, useState } from 'react'
import { useReadContract } from 'wagmi'
import { CONTRACT_ADDRESS } from '@/lib/constants'
import abi from "@/blockchain/contract/StakedBTCAbi.json"

const StakingSection = () => {
  const [time, setTime] = useState('00:00:00:00')
  const ref = useRef<NodeJS.Timeout>()
  const { data } = useReadContract({ abi, address: CONTRACT_ADDRESS, functionName: "userStakes" })
  useEffect(() => {
    function countDown() {
      ref.current = setInterval(() => {
        const currentTime = new Date()
        const endTime = new Date('15 August 2024 09:00 UTC')
        endTime.setHours(9, 0, 0)
        const diffMs = Math.abs(endTime as unknown as number - (currentTime as unknown as number));

        // Convert to different time units
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

        setTime(`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`)
      }, 1000)
    }

    countDown()

    return () => {
      clearInterval(ref.current)
    }
  }, [])
  return (
    <StakingContextProvider>
      <section className='p-3'>
        <h2 className='text-2xl font-semibold'>Stake Your Tokens</h2>
        <div className='flex flex-col-reverse gap-3 p-1 sm:flex-row'>
          {/* Form */}
          <div className='flex flex-1 items-center justify-center'>
            <StakingForm />
          </div>

          {/* Information */}
          <div className='flex flex-1 flex-col items-center justify-center gap-y-3 text-center md:items-start'>
            <div className='w-[200px] rounded-md bg-white p-3'>
              <h4>Total amount stake:</h4>
              <p>{data ? 0 : 0} sBTC</p>
            </div>
            <div className='w-[200px] rounded-md bg-white p-3'>
              <h4>APY:</h4>
              <p>1%</p>
            </div>
            <div className='w-[200px] rounded-md bg-white p-3'>
              <h4>Ending in:</h4>
              <p>{`${time.split(':')[0]}d ${time.split(':')[1]}h ${time.split(':')[2]}mins ${time.split(':')[3]}s`}</p>
            </div>
          </div>
        </div>
      </section>
    </StakingContextProvider>
  )
}

export default StakingSection
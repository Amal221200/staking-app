"use client"

import { useState } from "react";
import ClaimRewardButton from "@/components/buttons/ClaimRewardButton"
import StakeForm from "./StakeForm";
import WithdrawForm from "./WithdrawForm";

const StakingForm = () => {
    const [form, setForm] = useState<'stake' | 'withdraw'>('stake');

    return (
        <div>
            <div className="flex items-center justify-center gap-x-2">
                <button type="button" className="rounded-sm bg-white px-2 py-1" onClick={()=> setForm('stake')}>
                    Stake Token
                </button>
                <button type="button" className="rounded-sm bg-white px-2 py-1" onClick={()=> setForm('withdraw')}>
                    Withdraw Token
                </button>
            </div>
            {
                form === 'stake' ? <StakeForm /> : <WithdrawForm />
            }
            <ClaimRewardButton className="inline-block w-full" type="button" />
        </div>
    )
}
export default StakingForm
"use client";
import { useAccount, useReadContract } from "wagmi"
import Transaction from "@/components/Transaction"
import abi from "@/blockchain/contract/StakedBTCAbi.json"

const transactions = [
  {
    id: 1,
    amount: 56,
    type: "staked",
  },
  {
    id: 2,
    amount: 23,
    type: "withdraw",
  },
  {
    id: 3,
    amount: 10,
    type: "reward",
  }
]

const TransactionsSection = () => {
  const { isConnected,  } = useAccount()
  const { data } = useReadContract({ abi, address: '0x3aDC6E5D104d8b74CC23389397dA378dbf243301', functionName: "userStakes",  })
  console.log(data);
  
  return (
    <section className="p-3">
      <h2 className="mb-2 text-2xl font-semibold">All Transactions</h2>
      <div className="grid grid-cols-[repeat(auto-fit,200px)] justify-center gap-3 md:justify-start">
        {
          isConnected ? (
            transactions.map(tr => (
              <Transaction key={tr.id} transaction={tr} />
            ))
          ) : <h2>Hello World</h2>
        }
      </div>
    </section>
  )
}

export default TransactionsSection
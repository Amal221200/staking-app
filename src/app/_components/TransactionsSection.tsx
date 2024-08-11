import Transaction from "@/components/Transaction"

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
  },
]

const TransactionsSection = () => {

  return (
    <section className="p-3">
      <h2 className="mb-2 text-2xl font-semibold">All Transactions</h2>
      <div className="flex flex-wrap gap-3">
          {
            transactions.map(tr => (
              <Transaction key={tr.id} transaction={tr} />
            ))
          }
      </div>
    </section>
  )
}

export default TransactionsSection
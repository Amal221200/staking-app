import StakingForm from "./StakingForm"

const Main = () => {
  return (
    <main className="sm:h-[80dvh]">
      <div className="flex h-full bg-white/20 p-3 bg-blend-overlay sm:bg-gradient sm:bg-contain sm:bg-left sm:bg-no-repeat">
        <div className="hidden h-full flex-1 items-center justify-start sm:flex">
          <div className="">
            <h1 className="text-xl font-semibold md:text-3xl">Welcome to Staking App</h1>
            <p className="text-sm md:text-lg">Stake your BTC and contribute to the network collateral.</p>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-y-3">
        <div className="text-center sm:hidden">
            <h1 className="text-lg font-semibold">Welcome to Staking App</h1>
            <p className="text-sm">Stake your BTC and contribute to the network collateral.</p>
          </div>
          <StakingForm />
        </div>
      </div>
    </main>
  )
}

export default Main
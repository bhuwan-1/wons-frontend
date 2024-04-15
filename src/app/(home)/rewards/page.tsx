"use client";

import { RewardsCard } from "@/components/ui/Card/Rewards/Card";
import useRewards from "@/hooks/useRewards";

interface Rewards {
  id: number;
  title: string;
  cost: number;
  status: string;
}
export default function Rewards() {
  const { isLoading, error, rewards } = useRewards();
  console.log(rewards);
  return (
    <>
      {/* <div className="flex justify-center"> */}
        <div className="max-h-fit gap-4 grid 2xl:gap-3 xl:grid-cols-3 xl:gap-2 lg:grid-cols-3 md:gird-cols-3 sm:grid-cols-2 sm:gap-2 p-6 m-4 place-content-center">
          {rewards.map((reward: Rewards) => (
            <RewardsCard
              key={reward.id}
              title={reward.title}
              price={reward.cost}
              status={reward.status}
            />
          ))}
        </div>
      {/* </div> */}
    </>
  );
}

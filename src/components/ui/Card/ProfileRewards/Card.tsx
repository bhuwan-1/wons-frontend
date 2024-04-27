
import Image from "next/image";

type Props = {
    title?: string;
    price?: number;
    rewardsImg_url?: string;
  };
  

export const ClaimedRewards :React.FC<Props> = ({
    title,
    price,
    rewardsImg_url,
  })  => 
    {
  
    
  
    return (
      <div className="w-[225px] h-[175px] rounded-xl bg-primary relative flex flex-col justify-center items-start p-5">
        <h1 className="text-white text-3xl font-medium ">{title}</h1>
        <p className="text-gray-200 font-semibold text-xl">
          {price} points
        </p>
        <Image
          src={"/assets/reward.png"}
          alt="reward img"
          width={100}
          height={100}
          className="absolute -bottom-12 -right-10"
        />
      </div>
    );
  };
  
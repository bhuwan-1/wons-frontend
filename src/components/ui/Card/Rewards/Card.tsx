import { AvailableChip } from "../../Chip/AvailableChip";

type Props = {
  title?: string;
  price?: number;
  status?: string;
  rewardsImg_url?: string;
};

export const RewardsCard: React.FC<Props> = ({
  title,
  price,
  status,
  rewardsImg_url,
}) => {
  return (
    <div className="card card-side height-[30vh] max-w-[500px] bg-base-100 shadow-xl">
      <figure>
      <div className="h-full w-[200px] bg-red-200 overflow-hidden">
        <img
          className="w-full h-full object-fill object-center"
          src={"assets/login.jpg"}
          alt="reward img"
        />
      </div>
      </figure>
      <div className="card-body">
        <div className="card-title flex justify-between items-center">
          <h5 className="mb-2 xl:text-xl lg:text-lg md:text-lg sm:text-sm font-bold tracking-tight text-primary dark:text-white">
            {title}
          </h5>
          {/* <h2 className="mb-3 text-3xl font-bold text-gray-700 dark:text-gray-400">
            Available
          </h2> */}
          <AvailableChip status={status as string} />
        </div>
        <p className="lg:text-3xl md:text-xl sm:text-lg text-start font-semibold text-gray-500">Nu.{price}/-</p>

        <div className="card-actions justify-end">
          <button className="btn bg-primary text-white font-bold hover:bg-emerald-900">Claim now</button>
        </div>
      </div>
    </div>


  //   <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  //   <img className="w-full h-auto" src="assets/login.jpg" alt={title} />
  //   <div className="p-4">
  //     <div className="text-xl font-semibold mb-2">{title}</div>
  //     <div className="text-gray-700 text-sm mb-2">Cost: {price} points</div>
  //     <button
  //       // onClick={handleClaim}
  //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  //     >
  //       Claim Now
  //     </button>
  //   </div>
  // </div>
  );
};

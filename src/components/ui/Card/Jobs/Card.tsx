import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  points: number;
  jobImage_url: string;
  created: string;
};

export const JobCard: React.FC<Props> = ({
  title,
  desc,
  points,
  jobImage_url,
  created,
}) => {
  const date = new Date(created);
  const createdDate = date.toDateString().slice(4);
  return (
    <div className="w-full max-w-sm mx-auto h-[300px] bg-white  rounded-lg shadow-lg hover:cursor-pointer m-4 relative group ">
      <h2 className="absolute z-30 flex justify-center items-center -top-7 -right-7 rounded-full p-4 text-2xl font-bold text-white dark:text-gray-400 bg-primary group-hover:text-primary ease-in-out delay-75 group-hover:animate-bounce group-hover:bg-white h-20 w-20">
        +{points}
      </h2>
      <p className="text-end font-semibold rounded-badge absolute z-20 bg-white px-2 py-1 top-2 left-2">
        {createdDate}
      </p>
      <div className="z-10 rounded-lg absolute flex justify-center items-start p-4 flex-col w-full h-full bg-[#0000007e] group-hover:bg-[#000000ac] transition-all ease-in-out delay-75">  
      <div className="flex justify-between items-center  ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
          {title}
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
        {desc}
      </p>
      </div>

      <div className="h-[300px] overflow-hidden rounded-lg">
        <Image
          src={jobImage_url}
          width={100}
          height={100}
          className="w-full h-full object-fill object-center "
          alt="job image"
        />
      </div>
    </div>
  );
};

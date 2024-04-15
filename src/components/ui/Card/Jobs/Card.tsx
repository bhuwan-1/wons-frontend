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
  const createdDate = created.substring(0, 10);
  return (
    <div className="w-full max-w-sm mx-auto min-h-[50vh] bg-white border-2 border-black rounded-lg shadow-lg hover:cursor-pointer m-4">
      <div className="h-[300px] overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-fill object-center"
          src={jobImage_url}
          alt="job image"
        />
      </div>
      <div className="p-5 overflow-auto">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
            {title}
          </h5>
          <h2 className="mb-3 text-3xl font-bold text-gray-700 dark:text-gray-400">
            +{points}
          </h2>
        </div>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
          {desc}
        </p>
        <p className="text-end font-semibold text-gray-400">{createdDate}</p>
      </div>
    </div>
  );
};

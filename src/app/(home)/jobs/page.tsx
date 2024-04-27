"use client";
import { AuthContext } from "@/app/(providers)/AuthContext";
import useJobs from "@/hooks/useJobs";
import { useContext } from "react";
import { JobCard } from "@/components/ui/Card/Jobs/Card";

interface Job {
  id: number;
  title: string;
  description: string;
  points: number;
  createdAt: string;
}
export default function Jobs() {
  // const { jobs } = useJobs();
const jobs=[{
  id:1,
  title:'Backend Developer',
  description:'This is a role for an entry level candidate who has good knowledge of backend development. ',
  points:100,
  createdAt:'2022-06-03T21:00:00.000Z'
},
{
  id:1,
  title:'Backend Developer',
  description:'This is a role for an entry level candidate who has good knowledge of backend development. ',
  points:100,
  createdAt:'2022-06-03T21:00:00.000Z'
},{
  id:1,
  title:'Backend Developer',
  description:'This is a role for an entry level candidate who has good knowledge of backend development. ',
  points:100,
  createdAt:'2022-06-03T21:00:00.000Z'
},{
  id:1,
  title:'Backend Developer',
  description:'This is a role for an entry level candidate who has good knowledge of backend development. ',
  points:100,
  createdAt:'2022-06-03T21:00:00.000Z'
},{
  id:1,
  title:'Backend Developer',
  description:'This is a role for an entry level candidate who has good knowledge of backend development. ',
  points:100,
  createdAt:'2022-06-03T21:00:00.000Z'
},{
  id:1,
  title:'Backend Developer',
  description:'This is a role for an entry level candidate who has good knowledge of backend development. ',
  points:100,
  createdAt:'2022-06-03T21:00:00.000Z'
},{
  id:1,
  title:'Backend Developer',
  description:'This is a role for an entry level candidate who has good knowledge of backend development. ',
  points:100,
  createdAt:'2022-06-03T21:00:00.000Z'
}
]
  return (
    <>
      <h1 className="text-center text-primary text-3xl font-bold mt-4">
        Complete Tasks to earn points!
      </h1>
      <div className="h-90vh grid xl:grid-cols-4 xl:w-[95%] xl:mx-auto xl:gap-y-3 xl:gap-x-10 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-10 p-10">
        {jobs.map((job: Job) => (
          <JobCard
            key={job.id}
            title={job.title}
            desc={job.description}
            points={job.points}
            jobImage_url="/assets/login.jpg"
            created={job.createdAt}
          />
        ))}
      </div>
    </>
  );
}

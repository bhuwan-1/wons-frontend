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
  const { jobs } = useJobs();
  return (
    <>
      <h1 className="text-center text-primary text-3xl font-bold mt-4">
        Complete Tasks to earn points!
      </h1>
      <div className="h-90vh grid xl:grid-cols-4 xl:gap-2 lg:grid-cols-3 md:gird-cols-3 sm:grid-cols-2 sm:gap-2 p-4">
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

"use client"
import axios from "axios";
import { useEffect, useState } from "react";


const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getJobs = async () => {
    setIsLoading(true);
    setError('');

    try{
        const res = await axios.get('http://localhost:4005/api/jobs');
        setJobs(res.data);
    } catch (err) {
        console.log(err);
        setError(err as string);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return { jobs, isLoading, error, getJobs };
};


export default useJobs;
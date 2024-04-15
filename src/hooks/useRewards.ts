"use client"
import axios from "axios";
import { useEffect, useState } from "react";


const useRewards = () => {
  const [rewards, setRewards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getRewards = async () => {
    setIsLoading(true);
    setError('');

    try{
        const res = await axios.get('http://localhost:4005/api/rewards');
        setRewards(res.data);
    } catch (err) {
        console.log(err);
        setError(err as string);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    getRewards();
  }, []);

  return { rewards, isLoading, error, getRewards };
};


export default useRewards;
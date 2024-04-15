"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const useLogin = async (cid: string, password: string) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:4005/api/auth/login",
        {
          cid,
          password,
        }
      );
      if (response.status === 200) {
        return response;
      } 
    } catch (error: Error | any) {
      const errorMessage = error.response?.data?.message || "Login failed";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const useRegister = async (cid: string, password: string) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:4005/api/auth/register",
        {
          cid,
          password,
        }
      );
      if (response.status === 200) {
        return response;
      } 
    } catch (error: Error | any) {
      const errorMessage = error.response?.data?.message || "Registration failed";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, useLogin, useRegister };
};

export default useAuth;

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export function useAxios2(endpoint) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const res = await axios.get(`${baseURL}/${endpoint}`);
        setData(res);
      } catch (e) {
        setError(e.message);
        console.error("There was an error", { message: e.message });
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  const post = useCallback(async (endpoint, data) => {
    const res = await axios.post(`${baseURL}/${endpoint}`, data);
    return res.data;
  }, []);

  const patch = useCallback(async (endpoint, data) => {
    const res = await axios.patch(`${baseURL}/${endpoint}`, data);
    return res.data;
  }, []);

  const del = useCallback(async (endpoint) => {
    const res = await axios.delete(`${baseURL}/${endpoint}`);
    return res.data;
  }, []);

  return {
    data,
    isLoading,
    error,
    post,
    patch,
    del,
  };
}

import axios from "axios";
import { useCallback } from "react";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const useAxios = () => {
  const get = useCallback(async (endpoint) => {
    const res = await axios.get(`${baseURL}/${endpoint}`);
    return res.data;
  }, []);

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

  return { get, post, patch, del };
};

export default useAxios;

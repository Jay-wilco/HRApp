import axios from "axios";
import { useCallback } from "react";

const useAxios = () => {
  const get = useCallback(async (url) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error("GET error: ", err);
      throw err;
    }
  }, []);

  const post = useCallback(async (url, data) => {
    try {
      const res = await axios.post(url, data);
      return res.data;
    } catch (err) {
      console.error("POST error", err);
      throw err;
    }
  }, []);
  const patch = useCallback(async (url, data) => {
    try {
      const res = await axios.patch(url, data);
      return res.data;
    } catch (err) {
      console.error("PATCH error: ", err);
      throw err;
    }
  }, []);

  const del = useCallback(async (url) => {
    try {
      await axios.delete(url);
    } catch (err) {
      console.error("DELETE error", err);
      throw err;
    }
  }, []);

  return { get, post, patch, del };
};

export default useAxios;

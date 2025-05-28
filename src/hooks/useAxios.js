import axios from "axios";

const useAxios = () => {
  const get = async (url) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error("GET error: ", err);
      throw err;
    }
  };

  const post = async (url, data) => {
    try {
      const res = await axios.post(url, data);
      return res.data;
    } catch (err) {
      console.error("POST error", err);
      throw err;
    }
  };

  const del = async (url) => {
    try {
      await axios.delete(url);
    } catch (err) {
      console.error("DELETE error", err);
      throw err;
    }
  };

  return { get, post, del };
};

export default useAxios;

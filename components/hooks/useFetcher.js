import { useState, useEffect } from "react";
import axios from "axios";
import { API_AUTH_KEY } from "@/config";
const DEFAULT_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${API_AUTH_KEY}`,
};

const useFetcher = (url, options = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios({
          url,
          ...{
            ...options,
            headers: { ...DEFAULT_HEADERS, ...options.headers },
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (dependencies.every((dep) => dep !== null && dep !== undefined)) {
      fetchData();
    }
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, isLoading, error };
};

export default useFetcher;



import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface fetchResponse<T> {
  count: number;
  data: T[];
}

const useData = <T>(endpoint: string) => {

  const [data, setData] = useState<T[]>([]);
  const [originalData, setOriginalData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchResponse<T>>(endpoint, { signal: controler.signal })
      .then((res) => {
        setOriginalData(res.data.data);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controler.abort();
  }, [endpoint]);

  return { data, originalData, error, isLoading, setData };
};
export default useData;

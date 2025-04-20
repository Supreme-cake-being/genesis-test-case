import axios from "axios";
import { useState } from "react";

export const usePut = (endpoint = "", values: Record<string, any>) => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, any> | null>(null);

  const handlePut = async () => {
    try {
      const response = await axios.put(`/${endpoint}`, values);
      setData(response);
    } catch (error) {
      setError(error as Record<string, any>);
    } finally {
      setLoading(false);
    }
  };

  return { data: data?.data, loading, error, handlePut };
};

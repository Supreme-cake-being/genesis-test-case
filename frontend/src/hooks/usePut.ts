import axios from "axios";
import { useState } from "react";

export const usePut = (endpoint = "") => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, any> | null>(null);

  const handlePut = async (values: Record<string, any>) => {
    setLoading(true);
    try {
      const response = await axios.put(
        process.env.NEXT_PUBLIC_API + `${endpoint}`,
        values
      );
      setData(response);
    } catch (error) {
      setError(error as Record<string, any>);
    } finally {
      setLoading(false);
    }
  };

  return { data: data?.data, loading, error, handlePut };
};

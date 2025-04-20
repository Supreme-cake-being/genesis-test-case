import axios from "axios";
import { useState } from "react";

export const useDelete = (endpoint = "") => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, any> | null>(null);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/${endpoint}`);
      setData(response);
    } catch (error) {
      setError(error as Record<string, any>);
    } finally {
      setLoading(false);
    }
  };

  return { data: data?.data, loading, error, handleDelete };
};

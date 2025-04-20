import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export const useLazyFetch = (endpoint = "", options = {}) => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, any> | null>(null);

  const handleFetch = async () => {
    try {
      const response = await axios.get(`/${endpoint}`);
      setData(response);
    } catch (error) {
      setError(error as Record<string, any>);
    } finally {
      setLoading(false);
    }
  };

  return { data: data?.data, loading, error, handleFetch };
};

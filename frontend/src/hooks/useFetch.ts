import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { ISearchParams } from "@/src/types/searchParams";

export const useFetch = (endpoint = "") => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, any> | null>(null);

  const handleFetch = useCallback(async () => {
    try {
      const response = await axios.get(`/${endpoint}`);
      setData(response);
    } catch (error) {
      setError(error as Record<string, any>);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);
    handleFetch();
  }, [endpoint]);

  return { data: data, loading, error };
};

export const useLazyFetch = (endpoint = "") => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, any> | null>(null);

  const handleFetch = async ({
    page,
    limit,
    sort,
    order,
    search,
    genre,
    artist,
  }: ISearchParams) => {
    try {
      const response = await axios.get(`/${endpoint}`, {
        params: { page, limit, sort, order, search, genre, artist },
      });
      setData(response);
    } catch (error) {
      setError(error as Record<string, any>);
    } finally {
      setLoading(false);
    }
  };

  return { data: data?.data, loading, error, handleFetch };
};

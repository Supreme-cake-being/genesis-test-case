import { useLazyFetch } from "./useFetch";

export const useTracks = () => {
  const { data, loading, error, handleFetch } = useLazyFetch("tracks");

  return { tracks: data, loading, error, handleFetch };
};

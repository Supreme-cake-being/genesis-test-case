import { useFetch } from "./useFetch";

export const useTrackById = (slug: string) => {
  const { data, loading, error } = useFetch(`tracks/${slug}`);

  return { track: data, loading, error };
};

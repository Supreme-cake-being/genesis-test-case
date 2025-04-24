import { useFetch } from "./useFetch";

export const useTrackBySlug = (slug: string) => {
  const { data, loading, error } = useFetch(`tracks/${slug}`);

  return { track: data?.data, loading, error };
};

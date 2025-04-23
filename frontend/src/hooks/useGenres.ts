import { useFetch } from "./useFetch";

export const useGenres = () => {
  const { data, loading, error } = useFetch("genres");

  return { genres: data, loading, error };
};

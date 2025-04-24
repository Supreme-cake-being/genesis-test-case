import { useFetch } from "./useFetch";

export const useGenres = () => {
  const { data, loading, error } = useFetch("genres");

  return { genres: data?.data, loading, error };
};

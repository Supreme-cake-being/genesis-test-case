import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export const useSearchParamsUpdate = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchParamsUpdate = (values: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(values).map(([param, value]) => {
      if (value) {
        params.set(param, value);
      } else {
        params.delete(param);
      }
    });

    replace(`${pathname}?${params.toString()}`);
  };

  return { handleSearchParamsUpdate };
};

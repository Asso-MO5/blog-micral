import { useEffect, useState } from "react";
import wp from "../datasources/wp";

export default function useWp(url: string) {
  const [isLoading, setIsLoading] = useState<Boolean>(false),
    [error, setError] = useState<{ status: Number; message: String }>(),
    [data, setData] = useState<Array<Object>>([]),
    [pagination, setPagination] = useState<{
      totalPosts: number;
      totalPages: number;
    }>({
      totalPosts: 0,
      totalPages: 0,
    });

  async function handleFetch(params?: string) {
    setIsLoading(true);
    try {
      const { data: resData, headers } = await wp.get(url, { params });
      setData(resData);
      
      if (headers["x-wp-total"] && headers["x-wp-totalpages"]) {
        setPagination({
          totalPosts: parseInt(headers["x-wp-total"]),
          totalPages: parseInt(headers["x-wp-totalpages"]),
        });
      }
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    error,
    data,
    pagination,
    refetch: (params?: string) => handleFetch(params),
  };
}

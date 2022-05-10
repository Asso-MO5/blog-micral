import { useEffect, useState } from "react";
import wp from "../datasources/wp";

export default function useWp(url: string) {
  const [isLoading, setIsLoading] = useState<Boolean>(false),
    [error, setError] = useState<{ status: Number; message: String }>(),
    [data, setData] = useState<Array<Object>>([]);

  async function handleFetch(params?: string) {
    setIsLoading(true);
    try {
      const { data: resData } = await wp.get(url, { params });
      console.log('dsdsd',resData)
      setData(resData);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    handleFetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return {
    isLoading,
    error,
    data,
    refetch: (params?: string) => handleFetch(params),
  };
}

import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);

  const getData = useCallback(async () => {
    let response = await fetch(url);
    let info = await response.json();
    
    setData(info);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { loading, data };
};

import { useCallback, useState, useEffect } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {

      const res = await fetch(url);
      if (!res.ok) throw new Error('Error al consumir la API');
      const json = await res.json();
      setData(json);

    } catch (error) {
      setError(error.message);
      setData(null);

    } finally { setLoading(false); }

  }, []);

  useEffect(() => { fetchData() }, []);
  return { data, loading, error }

};

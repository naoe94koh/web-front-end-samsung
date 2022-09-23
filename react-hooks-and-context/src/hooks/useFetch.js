import { useState, useEffect } from 'react';

export function useFetch(endpoint) {
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [data, setData] = useState([]);

  useEffect(() => {
    if (typeof endpoint === 'string' && endpoint.length > 0) {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [endpoint]);

  return {
    loading,
    error,
    data,
  };
}

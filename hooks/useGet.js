import { useEffect, useState } from 'react';
const base_url = "https://rickandmortyapi.com/api/character/"

export const useGet = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (endpoint) => {
    setLoading(true)
    try {
      const res = await fetch(base_url + endpoint);
      const json = await res.json()
      setData(json)
    } catch (error) {
      setError(true)
    } finally {
      setTimeout(()=> setLoading(false),1000)
    }
  }

  useEffect(() => {
    getData(endpoint)
  }, [endpoint])

  return [data, isLoading, error]
}



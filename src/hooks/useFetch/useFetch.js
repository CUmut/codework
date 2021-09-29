import React, {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url, type = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.get(url);
      if (type === null) {
        setData(responseData);
      } else {
        setData(responseData[type]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
}

export default useFetch;

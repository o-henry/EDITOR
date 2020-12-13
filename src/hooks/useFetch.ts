import { useState, useEffect } from "react";

import axios from "axios";

const useFetch = (URL: string) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(URL);
        setResponse(res.data);
      } catch (e) {
        setError(e);
      }
    };

    fetch();
  }, []);

  return { response, error };
};

export default useFetch;

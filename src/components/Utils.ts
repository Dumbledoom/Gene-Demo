import React, { useState, useEffect } from 'react';

/**
 * Function that performs a simple HTTP request to the provided URL and returns a JSON object.
 * @param url
 * @returns JSON
 */
export const useFetch = (url: string): JSON | null => {
  const [data, setData] = useState(null);

  // equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      await fetch(url).then(async (response) => {
        const json = await response.json();
        setData(json);
      });
    }
    fetchData();
  }, [url]);

  return data;
};

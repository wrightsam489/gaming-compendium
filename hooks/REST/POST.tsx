import { useState, useEffect } from "react";

export function usePost(url: string, headers: any = { "Content-Type": "application/json" }, body: string) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      console.log('Fetching ' + url)
      fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        })
          .then(res => {
            if(!res.ok) {
              throw new Error(`HTTP Error: ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            console.log('API Response:', data);
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            console.error('Fetch error:', err);
            setIsPending(false);
            setError(err.message);
          })
      }, [url, headers, body])
  
      return { data, isPending, error };
  }
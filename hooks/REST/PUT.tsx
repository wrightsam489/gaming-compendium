import { useState, useEffect } from "react";

export function usePut(url: string, headers: any = { "Content-Type": "application/json" }, body: string) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body)
        })
          .then(res => {
            if(!res.ok) {
              throw Error('Could not fetch data');
            }
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            setIsPending(false);
            setError(err.message);
          })
      }, [])
  
      return { data, isPending, error };
  }
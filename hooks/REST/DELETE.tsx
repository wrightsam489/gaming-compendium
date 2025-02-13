import { useState, useEffect } from "react";

export function useDelete(url: string) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        fetch(url, {
            method: 'DELETE'
        })
          .then(res => {
            if(!res.ok) {
              throw Error('Failed to delete data');
            }
            return res.json();
          })
          .then(data => {
            setData(data);
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
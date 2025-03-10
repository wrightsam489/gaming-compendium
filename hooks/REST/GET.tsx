import { useState, useEffect } from 'react';

export function useGet(url: string) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
          .then(res => {
            if(!res.ok) {
              throw Error('Could not fetch data');
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
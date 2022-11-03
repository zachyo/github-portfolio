import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const AbortCont = new AbortController();

      await fetch(url, { signal: AbortCont.signal })
        .then((res) => {
          if (!res.ok) {
            console.log("not found");
            throw Error(`Couldn't fetch from that resource`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
      .catch((err) => {
        if (err === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setLoading(true);
        }
      });
      return () => AbortCont.abort();
    };
    getProducts();
  }, [url, loading]);

//   console.log(data);
  return { data, loading };
};

export default useFetch;

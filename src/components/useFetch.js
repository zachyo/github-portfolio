import { useEffect, useReducer, useRef } from "react";

function useFetch(url) {
  const cache = useRef({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false);

  const initialState = {
    error: undefined,
    data: undefined,
    loading: false,
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "fetching":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, data: action.payload, laoding: false };
      case "error":
        return { ...initialState, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchUsers = async () => {
      dispatch({ type: "fetching" });

      // check cache first
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          } else return res.json();
        })
        .then((data) => {
          cache.current[url] = data;
          // console.log(cache.current)
          if (cancelRequest.current) return;

          dispatch({ type: "fetched", payload: data });
        })
        .catch((error) => {
          if (cancelRequest.current) return;

          dispatch({ type: "error", payload: error });
        });
    };

    fetchUsers();

    // cleanup
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
}

export default useFetch;

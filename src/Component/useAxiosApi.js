import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosApi(url) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fectAPi = async () => {
      try {
        const response = await axios.get(url);
        setUser(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fectAPi();
  }, [url]);

  return { user, error, loading };
}
export default useAxiosApi;

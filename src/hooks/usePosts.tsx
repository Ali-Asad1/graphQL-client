import { useEffect, useState } from "react";
import { axiosHttp } from "../configs/axios";

const POSTS_QUERY = `
  {
    posts {
      id
      title
      body
      author {
        id
        username
      }
    }
  }
`;

export const usePosts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const response = await axiosHttp.post("", {
          query: POSTS_QUERY,
        });

        setData(response.data.data.posts);
        setIsError(false);
        setError(null);
      } catch (err: any) {
        setIsError(true);
        setError("Error");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, isError, error };
};

import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

interface Blog {
  title: string;
  content: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlogFetch = (): { loading: boolean; allBlogs: Blog[] } => {
  const [loading, setLoading] = useState(true);

  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(`${BACKEND_URL}` + "/api/v1/blog/bulk", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
      });
      setAllBlogs(res.data);
      setLoading(false);
    };

    getdata();
  }, []);

  return { loading, allBlogs };
};

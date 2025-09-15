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

export interface BlogContentType {
  post: {
    title: string;
    content: string;
    id: string;
    author: {
      name: string;
    };
  };
}

export const useBlogContentFetch = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);

  const [blogContent, setBlogContent] = useState<BlogContentType | null>(null);

  useEffect(() => {
    const getBlogContent = async () => {
      const res = await axios(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
      });

      setBlogContent(res.data);
      setLoading(false);
    };

    getBlogContent();
  }, []);

  return {
    loading,
    blogContent,
  };
};

export const UseFetchUserName = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/user/details`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
      });
      const actualData = await res.data;
      setUserName(actualData.getUserName.name);
    };

    getUser();
  }, []);

  return userName;
};

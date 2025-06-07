"use client";

import axios from "axios";
import { useState } from "react";

export default function useBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BLOG_API_URL}/get/list`
      );
      setBlogs(response.data.blogs);

      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const getBlog = async (slug) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BLOG_API_URL}/get/blog/${slug}`
      );
      return response.data.blog;
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    blogs,
    loading,
    getList,
    getBlog,
  };
}

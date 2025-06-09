"use client";

import axios from "axios";
import { useState } from "react";

export default function useTemplate() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTemplates = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/template/list`
      );
      setTemplates(response.data.templates);

      return response.data;
    } catch (error) {
      console.error("Error fetching templates:", error);
      setTemplates([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    templates,
    loading,
    getTemplates,
  };
}

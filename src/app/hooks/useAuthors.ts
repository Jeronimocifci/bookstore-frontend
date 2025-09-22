'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080/api';

export type Author = {
  id: number;
  name: string;
  birthDate?: string;
  image?: string;
};

export function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchAuthors() {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/authors`);
      setAuthors(res.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }
    async function createAuthor(author: Omit<Author, 'id'>) {
    await axios.post(`${API_URL}/authors`, author);
    fetchAuthors(); // refresca la lista
  }
  async function updateAuthor(id: number, author: Omit<Author, 'id'>) {
  await axios.put(`${API_URL}/authors/${id}`, author);
  fetchAuthors(); // refresca la lista
  }
  async function deleteAuthor(id: number) {
  await axios.delete(`${API_URL}/authors/${id}`);
  fetchAuthors(); // refresca la lista
}


  useEffect(() => {
    fetchAuthors();
  }, []);

  return { authors, loading, error, createAuthor, updateAuthor, deleteAuthor };
}

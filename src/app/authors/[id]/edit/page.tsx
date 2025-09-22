'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuthors } from '../../../hooks/useAuthors';
import AuthorForm, { AuthorFormData } from '../../../components/AuthorForm';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080/api';

interface Author extends AuthorFormData {
  id?: number;
}

export default function EditAuthorPage() {
  const { id } = useParams<{ id: string }>();
  const { updateAuthor } = useAuthors();
  const router = useRouter();
  const [initialData, setInitialData] = useState<Author | null>(null);

  // 👇 ahora sí definimos y usamos fetchAuthor
  useEffect(() => {
    async function fetchAuthor() {
      try {
        const res = await axios.get(`${API_URL}/authors/${id}`);
        setInitialData(res.data);
      } catch (err) {
        console.error("Error cargando autor:", err);
      }
    }
    if (id) fetchAuthor();
  }, [id]);

  async function handleUpdate(data: AuthorFormData) {
    await updateAuthor(Number(id), data);
    router.push('/authors');
  }

  if (!initialData) return <p>Cargando autor...</p>;

  return (
    <main style={{ padding: 20 }}>
      <h1>Editar Autor</h1>
      <AuthorForm
        onSubmit={handleUpdate}
        submitLabel="Actualizar Autor"
        initialValues={initialData}
      />
    </main>
  );
}

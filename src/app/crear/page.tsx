'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthorForm from '../components/AuthorForm';
import { useAuthors } from '../hooks/useAuthors';

interface Author {
  name: string;
  // add other fields as needed, e.g.:
  // bio?: string;
  // birthdate?: string;
}

export default function CrearAutorPage() {
  const { createAuthor } = useAuthors();
  const router = useRouter();

  async function handleCreate(data: Author) {
    await createAuthor(data);   // POST al backend
    router.push('/authors');    // redirigir a la lista
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Crear Autor</h1>
      <AuthorForm onSubmit={handleCreate} submitLabel="Crear Autor" />
      <p style={{ marginTop: '1rem' }}>
        <Link href="/authors">← Volver a lista</Link>
      </p>
    </main>
  );
}

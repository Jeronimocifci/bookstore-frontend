import AuthorList from '../components/AuthorList';
import Link from 'next/link';

export default function AuthorsPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Autores</h1>
      <p>
        <Link href="/crear">+ Crear Autor</Link>
      </p>
      <AuthorList />
    </main>
  );
}


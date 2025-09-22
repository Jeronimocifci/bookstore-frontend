import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Bienvenido a la Librería</h1>
      <p>Esta es la página principal de nuestra aplicación de gestión de libros.</p>
      
      <div style={{ marginTop: 20 }}>
        <h2>Navegación</h2>
        <ul>
          <li>
            <Link href="/authors" style={{ color: 'blue', textDecoration: 'underline' }}>
              Ver Autores
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
// http://localhost:3000/authors/1000/edit

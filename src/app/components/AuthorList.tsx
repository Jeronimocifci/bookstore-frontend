'use client';
import { useAuthors } from '../hooks/useAuthors';

export default function AuthorList() {
  const { authors, loading, error, deleteAuthor } = useAuthors();

  if (loading) return <p>Cargando autores...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Autores</h2>
      {authors.length === 0 ? (
        <p>No hay autores registrados.</p>
      ) : (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha de nacimiento</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.birthDate ?? 'N/A'}</td>
                <td>
                  {a.image && (
                    <img src={a.image} alt={a.name} width={50} height={70} />
                  )}
                </td>
                <td>
                  {/* enlace para editar */}
                  <a href={`/authors/${a.id}/edit`} style={{ marginRight: 10 }}>
                    Editar
                  </a>
                  {/* botón para eliminar */}
                  <button
                    onClick={() => {
                      if (confirm(`¿Seguro que quieres eliminar a ${a.name}?`)) {
                        deleteAuthor(a.id);
                      }
                    }}
                    style={{ color: 'red' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

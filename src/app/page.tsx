export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Barra superior */}
      <header className="flex justify-between items-center bg-gray-100 px-4 py-2 shadow">
        {/* Botón inicio */}
        <button className="text-lg font-semibold">🏠 Inicio</button>

        {/* Centro: botones principales */}
        <div className="flex gap-4 items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
            + Crear tarea
          </button>
          <button className="text-sm text-gray-700">Organizaciones</button>
        </div>

        {/* Derecha: perfil, idioma, notificaciones */}
        <div className="flex gap-4 items-center">
          <button>🌐</button>
          <button>🔔</button>
          <button>👤</button>
        </div>
      </header>

      {/* Contenido principal (vacío por ahora) */}
      <section className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Aquí irá el horario y las tareas…</p>
      </section>
    </main>
  );
}

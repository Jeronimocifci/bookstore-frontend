'use client';
import { useState, useEffect } from 'react';

// Define the author form data structure
export interface AuthorFormData {
  name: string;
  birthDate: string;
  description: string;
  image: string;
}

type Props = {
  onSubmit: (data: AuthorFormData) => void;
  submitLabel?: string;
  initialValues?: Partial<AuthorFormData>; // 👈 valores iniciales opcionales
};

export default function AuthorForm({ onSubmit, submitLabel = 'Guardar', initialValues }: Props) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  // 👇 cargar valores iniciales cuando los pasen (modo editar)
  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name || '');
      setBirthDate(initialValues.birthDate || '');
      setDescription(initialValues.description || '');
      setImage(initialValues.image || '');
    }
  }, [initialValues]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ name, birthDate, description, image });
    // solo limpiamos si es formulario de creación (no en edición)
    if (!initialValues) {
      setName('');
      setBirthDate('');
      setDescription('');
      setImage('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="URL de imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit">{submitLabel}</button>
    </form>
  );
}

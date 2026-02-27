"use client";
import { useState } from "react";

interface Props {
  onAdicionar: (texto: string) => void;
}

export default function NovaTarefa({ onAdicionar }: Props) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (texto.trim() !== "") {
      onAdicionar(texto);
      setTexto("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300"
      >
        Adicionar
      </button>
    </form>
  );
}

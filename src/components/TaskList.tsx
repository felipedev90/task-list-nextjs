"use client";
import { useState } from "react";
import type { Tarefa } from "@/hooks/useContadorDeTarefas";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";
import NovaTarefa from "./NovaTarefa";

interface Props {
  tarefasIniciais: Tarefa[];
}

export default function TaskList({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

  function adicionarTarefa(texto: string) {
    const novaTarefa: Tarefa = {
      id: tarefas.length + 1,
      texto,
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  const { total } = useContadorDeTarefas(tarefas);

  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <div className="mb-4">
        <NovaTarefa onAdicionar={adicionarTarefa} />
      </div>
      <ul className="list-disc list-inside">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="mb-2">
            {tarefa.texto}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-gray-800">Total de tarefas: {total}</p>
    </div>
  );
}

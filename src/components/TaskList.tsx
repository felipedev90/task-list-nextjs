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
    <div>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
      <p>Total de tarefas: {total}</p>
    </div>
  );
}

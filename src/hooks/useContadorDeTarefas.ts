export type Tarefa = {
  id: number;
  texto: string;
};

export default function useContadorDeTarefas(tarefas: Tarefa[]) {
  const total = tarefas.length;
  return { total };
}

import TaskList from "@/components/TaskList";

async function buscarTarefas() {
  const tarefas = await Promise.resolve([
    {
      id: 1,
      texto: "Estudar Next.js",
    },
    {
      id: 2,
      texto: "Aprender Jest",
    },
    { id: 3, texto: "Criar Portifólio" },
  ]);
  return tarefas;
}

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center py-8 px-10">
      <h2 className="text-2xl font-bold mb-4">Adicionar uma nova tarefa:</h2>
      <TaskList tarefasIniciais={tarefas} />
    </div>
  );
}

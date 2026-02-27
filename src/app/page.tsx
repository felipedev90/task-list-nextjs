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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-2xl font-bold mb-4">Tarefas:</h2>
      <TaskList tarefasIniciais={tarefas} />
    </div>
  );
}

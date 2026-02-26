export default function Header() {
  return (
    <header>
      <div className="bg-blue-500 w-full h-auto flex flex-col items-center justify-center gap-2 py-4">
        <span className="text-2xl font-bold">Lista de Tarefas</span>
        <p className="text-gray-800">Lista de tarefas pendentes</p>
      </div>
    </header>
  );
}

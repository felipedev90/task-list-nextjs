export default function Header() {
  return (
    <header>
      <div className="bg-blue-500 w-full h-auto border-b border-black flex flex-col items-center justify-center gap-2 py-4">
        <span className="text-3xl font-bold md:text-4xl">NextTasks</span>
        <p className="text-gray-800">Sua lista diária de tarefas</p>
      </div>
    </header>
  );
}

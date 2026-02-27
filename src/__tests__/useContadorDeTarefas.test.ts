import { renderHook } from "@testing-library/react";
import type { Tarefa } from "@/hooks/useContadorDeTarefas";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("deve retornar o número total de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, texto: "Tarefa 1" },
      { id: 2, texto: "Tarefa 2" },
      { id: 3, texto: "Tarefa 3" },
    ];
    const { result } = renderHook(() => useContadorDeTarefas(tarefas));
    expect(result.current.total).toBe(3);
  });

  it("deve retornar 0 quando não há tarefas", () => {
    const tarefas: Tarefa[] = [];
    const { result } = renderHook(() => useContadorDeTarefas(tarefas));
    expect(result.current.total).toBe(0);
  });
});

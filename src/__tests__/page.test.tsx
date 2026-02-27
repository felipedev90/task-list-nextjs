import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Página principal", () => {
  it("Deve renderizar o título e as tarefas principais", async () => {
    const pagina = await Home();
    render(pagina);

    const titulo = screen.getByText("Adicionar uma nova tarefa:");
    const tarefa1 = screen.getByText("Estudar Next.js");
    const tarefa2 = screen.getByText("Aprender Jest");
    const tarefa3 = screen.getByText("Criar Portifólio");

    expect(titulo).toBeInTheDocument();
    expect(tarefa1).toBeInTheDocument();
    expect(tarefa2).toBeInTheDocument();
    expect(tarefa3).toBeInTheDocument();
  });
});

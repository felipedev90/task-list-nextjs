import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTerefa", () => {
  it("Deve renderizar o input e o botão", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    const input = screen.getByPlaceholderText("Nova tarefa");
    const button = screen.getByRole("button", { name: "Adicionar" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Deve chamar onAdicionar com o texto da tarefa ao clicar no botão", async () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockOnAdicionar} />);

    const input = screen.getByPlaceholderText("Nova tarefa");
    const button = screen.getByRole("button", { name: "Adicionar" });

    await userEvent.type(input, "Estudar testes");
    await userEvent.click(button);

    expect(mockOnAdicionar).toHaveBeenCalledWith("Estudar testes");
  });

  it("Não deve chamar onAdicionar se o input estiver vazio", async () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockOnAdicionar} />);

    const button = screen.getByRole("button", { name: "Adicionar" });
    await userEvent.click(button);

    expect(mockOnAdicionar).not.toHaveBeenCalled();
  });
});

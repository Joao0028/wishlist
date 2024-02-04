import { render } from "@testing-library/react";
import { DadosProduto } from "./DadosProduto";

test("Testando se o context cria o contexto DadosProduto corretamente", () => {
  const { container } = render(
    <DadosProduto.Provider value={{ dados: [], setDados: jest.fn() }}>
      <div>Componente que usa o context...</div>
    </DadosProduto.Provider>
  );

  expect(container).toBeInTheDocument();
});
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Produto from "./index";

describe("Testando a funcionalidade do Componente Projeto, de", () => {
  test("exibição de nome do produto", () => {
    render(<Produto nomeProduto="Meias" />);

    const nomeProduto = screen.getByTestId("nome-produto");
    expect(nomeProduto).toBeInTheDocument();
  });

  test("exibir a imagem do produto corretamente", () => {
    render(<Produto imagem="url_da_imagem.jpg" />);

    const imagemProdutoElement = screen.getByTestId("imagem-produto");
    expect(imagemProdutoElement).toHaveStyle({
      backgroundImage: "url(url_da_imagem.jpg)",
    });
  });

  test("favoritar", async () => {
    const funcaoFavoritar = jest.fn();
    const estadoFavoritado = false;

    render(
      <Produto
        nomeProduto="Tênis Incrível"
        imagem="url_da_imagem.jpg"
        estadoFavoritado={estadoFavoritado}
        tipoProduto="Meias"
        funcaoFavoritar={funcaoFavoritar}
      />
    );

    const botaoFavoritar = screen.getByTitle("Favoritar");
    fireEvent.click(botaoFavoritar);
    expect(funcaoFavoritar).toHaveBeenCalled();
  });

  test("desfavoritar", async () => {
    const funcaoFavoritar = jest.fn();
    const estadoFavoritado = false;

    render(
      <Produto
        nomeProduto="Tênis Incrível"
        imagem="url_da_imagem.jpg"
        estadoFavoritado={estadoFavoritado}
        tipoProduto="Tênis"
        funcaoFavoritar={funcaoFavoritar}
        tipoDeBotao={true}
      />
    );

    const botaoFavoritar = screen.getByTitle("Desfavoritar");
    fireEvent.click(botaoFavoritar);
    expect(funcaoFavoritar).toHaveBeenCalled();
  });
});

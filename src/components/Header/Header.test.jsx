import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./index";
import { BrowserRouter } from "react-router-dom";

it("Testando se o Link do Header funciona corretamente", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const wishLink = screen.getByRole("link", { name: "Wishlist" });
  expect(wishLink).toBeInTheDocument();
  fireEvent.click(wishLink);
  expect(window.location.pathname).toBe("/wishlist");
});
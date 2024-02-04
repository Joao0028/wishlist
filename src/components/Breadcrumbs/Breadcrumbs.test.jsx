import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumbs from "./index";

test("Testando se o Link da Breadcrumbs funciona corretamente", () => {
  render(
    <BrowserRouter>
      <Breadcrumbs />
    </BrowserRouter>
  );

  const wishLink = screen.getByRole("link", { name: "Home" });
  expect(wishLink).toBeInTheDocument();
  fireEvent.click(wishLink);
  expect(window.location.pathname).toBe("/");
});
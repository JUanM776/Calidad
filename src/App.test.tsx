import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza los componentes principales", () => {
  render(<App />);
  expect(screen.getByText("Buscador de Nombres")).toBeInTheDocument();
  expect(screen.getByText("Tabla de Multiplicar")).toBeInTheDocument();
});

test("renderiza el componente SearchList", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Buscar nombre...")).toBeInTheDocument();
  expect(screen.getByText("Juan")).toBeInTheDocument();
});

test("renderiza el componente MultiplicationTable", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Número")).toBeInTheDocument();
  expect(screen.getByText("Generar")).toBeInTheDocument();
});
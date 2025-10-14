import { render, screen, fireEvent } from "@testing-library/react";
import SearchList from "./SearchList";

describe("SearchList", () => {
  test("Muestra todos los nombres al inicio", () => {
    render(<SearchList />);
    const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Lucía", "Carlos", "Sofía"];
    nombres.forEach(nombre => {
      expect(screen.getByText(nombre)).toBeInTheDocument();
    });
  });

  test("Filtra nombres correctamente", () => {
    render(<SearchList />);
    fireEvent.change(screen.getByPlaceholderText("Buscar nombre..."), { target: { value: "an" } });
    expect(screen.getByText("Juan")).toBeInTheDocument();
    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.queryByText("Pedro")).not.toBeInTheDocument();
  });

  test("Muestra 'No encontrado' si no hay coincidencias", () => {
    render(<SearchList />);
    fireEvent.change(screen.getByPlaceholderText("Buscar nombre..."), { target: { value: "zzz" } });
    expect(screen.getByText("No encontrado")).toBeInTheDocument();
  });
});
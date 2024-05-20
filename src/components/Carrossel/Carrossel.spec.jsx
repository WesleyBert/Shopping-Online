import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carrossel from "./Carrossel";

describe("Carrossel component", () => {
  test("renders Carrossel component with initial slide", () => {
    const { getByAltText } = render(<Carrossel />);

    expect(getByAltText("Imagem 1")).toBeInTheDocument();
  });

  test("clicking next button changes slide to next image", () => {
    const { getByAltText, getByText } = render(<Carrossel />);

    expect(getByAltText("Imagem 1")).toBeInTheDocument();

    fireEvent.click(getByText("❯"));

    expect(getByAltText("Imagem 2")).toBeInTheDocument();
  });

  test("clicking prev button changes slide to previous image", () => {
    const { getByAltText, getByText } = render(<Carrossel />);

    expect(getByAltText("Imagem 1")).toBeInTheDocument();

    fireEvent.click(getByText("❯"));
    fireEvent.click(getByText("❯"));

    expect(getByAltText("Imagem 3")).toBeInTheDocument();

    fireEvent.click(getByText("❮"));

    expect(getByAltText("Imagem 2")).toBeInTheDocument();
  });
});

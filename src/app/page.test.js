import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import this to enable .toBeInTheDocument()
import AppPage from "./page";
import React from "react";

describe("AppPage Component", () => {
  test("renders Hello homepage text", () => {
    render(<AppPage />);
    console.log(screen);
    const textElement = screen.getByText(/hello homepage/i);
    expect(textElement).toBeInTheDocument();
    const textBytestid = screen.getByTestId("app-page");
    expect(textBytestid).toBeTruthy();
  });
});

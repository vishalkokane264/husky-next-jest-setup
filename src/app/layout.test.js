import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout"; // Adjust the path if needed
import "@testing-library/jest-dom"; // Import this to enable .toBeInTheDocument()

describe("RootLayout Component", () => {
  test("renders children inside body", () => {
    render(
      <RootLayout>
        <div data-testid="child">Test Child</div>
      </RootLayout>
    );

    // Check if the child is rendered inside the body
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("renders with correct HTML structure", () => {
    render(
      <RootLayout>
        <p>Sample Text</p>
      </RootLayout>
    );

    // Check if HTML tag is rendered with correct lang attribute
    expect(document.documentElement).toHaveAttribute("lang", "en");

    // Check if body has the correct class
    expect(document.body).toHaveClass("antialiased");

    // Verify content inside body
    expect(screen.getByText("Sample Text")).toBeInTheDocument();
  });
});

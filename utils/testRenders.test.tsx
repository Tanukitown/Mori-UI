import clpx from "./classPrefixer";
import { renderWithDarkBg, renderWithLightBg } from "./testRenders";

import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("Test Render Utilities", () => {
  describe("renderWithLightBg", () => {
    it("should render a component with light mode background", () => {
      renderWithLightBg(<div data-testid="test-element">Light Mode</div>);
      const element = screen.getByTestId("test-element");
      expect(element).toBeInTheDocument();
    });

    it("should apply light mode background color", () => {
      const { container } = renderWithLightBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");

      expect(wrapper).toHaveStyle({ backgroundColor: "#F5EFE7" });
    });

    it("should apply light mode text color", () => {
      const { container } = renderWithLightBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");

      expect(wrapper).toHaveStyle({ color: "#2C2520" });
    });

    it("should apply padding to wrapper", () => {
      const { container } = renderWithLightBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");

      expect(wrapper).toHaveStyle({ padding: "1rem" });
    });

    it("should render nested elements correctly", () => {
      renderWithLightBg(
        <div>
          <span data-testid="child-1">Child 1</span>
          <span data-testid="child-2">Child 2</span>
        </div>,
      );

      const child1 = screen.getByTestId("child-1");
      const child2 = screen.getByTestId("child-2");

      expect(child1).toBeInTheDocument();
      expect(child2).toBeInTheDocument();
      expect(child1).toHaveTextContent("Child 1");
      expect(child2).toHaveTextContent("Child 2");
    });

    it("should maintain wrapper div structure", () => {
      const { container } = renderWithLightBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrappers = container.querySelectorAll("div");

      // Should have at least 2 divs: wrapper + test element
      expect(wrappers.length).toBeGreaterThanOrEqual(2);
    });

    it("should return RenderResult object", () => {
      const result = renderWithLightBg(
        <div data-testid="test-element">Content</div>,
      );

      // Check for standard RenderResult properties
      expect(result).toHaveProperty("container");
      expect(result).toHaveProperty("rerender");
      expect(result).toHaveProperty("unmount");
      expect(result.container).toBeInstanceOf(HTMLElement);
    });

    it("should work with complex React components", () => {
      const TestComponent = ({
        title,
        count,
      }: {
        title: string;
        count: number;
      }) => (
        <div>
          <h1>{title}</h1>
          <p>Count: {count}</p>
        </div>
      );

      renderWithLightBg(<TestComponent title="Test" count={42} />);

      expect(screen.getByText("Test")).toBeInTheDocument();
      expect(screen.getByText("Count: 42")).toBeInTheDocument();
    });

    it("should support fragments and multiple children", () => {
      renderWithLightBg(
        <>
          <div data-testid="item-1">Item 1</div>
          <div data-testid="item-2">Item 2</div>
          <div data-testid="item-3">Item 3</div>
        </>,
      );

      expect(screen.getByTestId("item-1")).toBeInTheDocument();
      expect(screen.getByTestId("item-2")).toBeInTheDocument();
      expect(screen.getByTestId("item-3")).toBeInTheDocument();
    });
  });

  describe("renderWithDarkBg", () => {
    it("should render a component with dark mode background", () => {
      renderWithDarkBg(<div data-testid="test-element">Dark Mode</div>);
      const element = screen.getByTestId("test-element");
      expect(element).toBeInTheDocument();
    });

    it("should apply dark mode background color", () => {
      const { container } = renderWithDarkBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");

      expect(wrapper).toHaveStyle({ backgroundColor: "#1a1a1a" });
    });

    it("should apply dark mode text color (white)", () => {
      const { container } = renderWithDarkBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");

      expect(wrapper).toHaveStyle({ color: "#ffffff" });
    });

    it("should apply padding to wrapper", () => {
      const { container } = renderWithDarkBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");

      expect(wrapper).toHaveStyle({ padding: "1rem" });
    });

    it("should render nested elements correctly", () => {
      renderWithDarkBg(
        <div>
          <span data-testid="child-1">Child 1</span>
          <span data-testid="child-2">Child 2</span>
        </div>,
      );

      const child1 = screen.getByTestId("child-1");
      const child2 = screen.getByTestId("child-2");

      expect(child1).toBeInTheDocument();
      expect(child2).toBeInTheDocument();
      expect(child1).toHaveTextContent("Child 1");
      expect(child2).toHaveTextContent("Child 2");
    });

    it("should maintain wrapper div structure", () => {
      const { container } = renderWithDarkBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrappers = container.querySelectorAll("div");

      // Should have at least 2 divs: wrapper + test element
      expect(wrappers.length).toBeGreaterThanOrEqual(2);
    });

    it("should return RenderResult object", () => {
      const result = renderWithDarkBg(
        <div data-testid="test-element">Content</div>,
      );

      // Check for standard RenderResult properties
      expect(result).toHaveProperty("container");
      expect(result).toHaveProperty("rerender");
      expect(result).toHaveProperty("unmount");
      expect(result.container).toBeInstanceOf(HTMLElement);
    });

    it("should work with complex React components", () => {
      const TestComponent = ({
        title,
        count,
      }: {
        title: string;
        count: number;
      }) => (
        <div>
          <h1>{title}</h1>
          <p>Count: {count}</p>
        </div>
      );

      renderWithDarkBg(<TestComponent title="Dark Test" count={99} />);

      expect(screen.getByText("Dark Test")).toBeInTheDocument();
      expect(screen.getByText("Count: 99")).toBeInTheDocument();
    });

    it("should support fragments and multiple children", () => {
      renderWithDarkBg(
        <>
          <div data-testid="item-1">Item 1</div>
          <div data-testid="item-2">Item 2</div>
          <div data-testid="item-3">Item 3</div>
        </>,
      );

      expect(screen.getByTestId("item-1")).toBeInTheDocument();
      expect(screen.getByTestId("item-2")).toBeInTheDocument();
      expect(screen.getByTestId("item-3")).toBeInTheDocument();
    });
  });

  describe("Color Contrast", () => {
    it("light mode should have distinct background and text colors", () => {
      const { container } = renderWithLightBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");
      const styles = window.getComputedStyle(wrapper!);

      // Check the computed color values
      const bgColor = styles.backgroundColor;
      const textColor = styles.color;

      expect(bgColor).not.toBe(textColor);
      // Light bg: #F5EFE7 = rgb(245, 239, 231)
      expect(bgColor).toBe("rgb(245, 239, 231)");
      // Light text: #2C2520 = rgb(44, 37, 32)
      expect(textColor).toBe("rgb(44, 37, 32)");
    });

    it("dark mode should have distinct background and text colors", () => {
      const { container } = renderWithDarkBg(
        <div data-testid="test-element">Content</div>,
      );
      const wrapper = container.querySelector("div");
      const styles = window.getComputedStyle(wrapper!);

      // Check the computed color values
      const bgColor = styles.backgroundColor;
      const textColor = styles.color;

      expect(bgColor).not.toBe(textColor);
      // Dark bg: #1a1a1a = rgb(26, 26, 26)
      expect(bgColor).toBe("rgb(26, 26, 26)");
      // Dark text: #ffffff = rgb(255, 255, 255)
      expect(textColor).toBe("rgb(255, 255, 255)");
    });

    it("light and dark modes should have different backgrounds", () => {
      const lightResult = renderWithLightBg(
        <div data-testid="light">Light</div>,
      );
      const darkResult = renderWithDarkBg(<div data-testid="dark">Dark</div>);

      const lightWrapper = lightResult.container.querySelector("div");
      const darkWrapper = darkResult.container.querySelector("div");

      const lightBg = lightWrapper?.style.backgroundColor;
      const darkBg = darkWrapper?.style.backgroundColor;

      expect(lightBg).not.toBe(darkBg);
    });
  });

  describe("Integration", () => {
    it("should support testing the same component in both modes", () => {
      const TestButton = () => <button>Click me</button>;

      const lightResult = renderWithLightBg(<TestButton />);
      const lightButton = screen.getByRole("button", { name: "Click me" });
      expect(lightButton).toBeInTheDocument();

      // Clean up before rendering again
      lightResult.unmount();

      renderWithDarkBg(<TestButton />);
      const darkButton = screen.getByRole("button", { name: "Click me" });
      expect(darkButton).toBeInTheDocument();
    });

    it("should preserve element attributes and props", () => {
      const TestElement = () => (
        <div
          data-testid="element"
          className={clpx("custom-class")}
          id="custom-id"
          aria-label="Custom Label"
        >
          Content
        </div>
      );

      renderWithLightBg(<TestElement />);
      const element = screen.getByTestId("element");

      expect(element).toHaveAttribute("class", "moriui:custom-class");
      expect(element).toHaveAttribute("id", "custom-id");
      expect(element).toHaveAttribute("aria-label", "Custom Label");
    });

    it("should support event handlers", () => {
      const handleClick = vi.fn();
      const TestButton = () => <button onClick={handleClick}>Click</button>;

      renderWithLightBg(<TestButton />);
      const button = screen.getByRole("button", { name: "Click" });

      button.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});

import { Button } from "./Button";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Heart } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button.classList.contains("moriui:btn-base")).toBe(true);
    expect(button.classList.contains("moriui:btn-primary")).toBe(true);
    expect(button.classList.contains("moriui:btn-medium")).toBe(true);
  });

  describe("Variants", () => {
    it("renders with primary variant", () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole("button", { name: /primary/i });
      expect(button.classList.contains("moriui:btn-primary")).toBe(true);
    });

    it("renders with secondary variant", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button", { name: /secondary/i });
      expect(button.classList.contains("moriui:btn-secondary")).toBe(true);
    });

    it("renders with tertiary variant", () => {
      render(<Button variant="tertiary">Tertiary</Button>);
      const button = screen.getByRole("button", { name: /tertiary/i });
      expect(button.classList.contains("moriui:btn-tertiary")).toBe(true);
    });

    it("renders with success variant", () => {
      render(<Button variant="success">Success</Button>);
      const button = screen.getByRole("button", { name: /success/i });
      expect(button.classList.contains("moriui:btn-success")).toBe(true);
    });

    it("renders with warning variant", () => {
      render(<Button variant="warning">Warning</Button>);
      const button = screen.getByRole("button", { name: /warning/i });
      expect(button.classList.contains("moriui:btn-warning")).toBe(true);
    });

    it("renders with error variant", () => {
      render(<Button variant="error">Error</Button>);
      const button = screen.getByRole("button", { name: /error/i });
      expect(button.classList.contains("moriui:btn-error")).toBe(true);
    });

    it("renders with neutral variant", () => {
      render(<Button variant="neutral">Neutral</Button>);
      const button = screen.getByRole("button", { name: /neutral/i });
      expect(button.classList.contains("moriui:btn-neutral")).toBe(true);
    });
  });

  describe("Sizes", () => {
    it("renders with small size", () => {
      render(<Button size="small">Small</Button>);
      const button = screen.getByRole("button", { name: /small/i });
      expect(button.classList.contains("moriui:btn-small")).toBe(true);
    });

    it("renders with medium size", () => {
      render(<Button size="medium">Medium</Button>);
      const button = screen.getByRole("button", { name: /medium/i });
      expect(button.classList.contains("moriui:btn-medium")).toBe(true);
    });

    it("renders with large size", () => {
      render(<Button size="large">Large</Button>);
      const button = screen.getByRole("button", { name: /large/i });
      expect(button.classList.contains("moriui:btn-large")).toBe(true);
    });
  });

  describe("Icons", () => {
    it("renders icon on the left by default", () => {
      render(<Button icon={Heart}>Like</Button>);
      const button = screen.getByRole("button", { name: /like/i });
      const icon = button.querySelector("svg");
      expect(icon).toBeInTheDocument();
      expect(icon?.classList.contains("moriui:btn-icon")).toBe(true);
      // Icon should be first child (left position)
      expect(button.firstChild).toEqual(icon);
    });

    it("renders icon on the right when specified", () => {
      render(
        <Button icon={Heart} iconPosition="right">
          Like
        </Button>,
      );
      const button = screen.getByRole("button", { name: /like/i });
      const icon = button.querySelector("svg");
      expect(icon).toBeInTheDocument();
      expect(icon?.classList.contains("moriui:btn-icon")).toBe(true);
      // Icon should be last child (right position)
      expect(button.lastChild).toEqual(icon);
    });

    it("does not render icon when loading", () => {
      render(
        <Button icon={Heart} isLoading>
          Like
        </Button>,
      );
      const button = screen.getByRole("button", { name: /loading/i });
      const icon = button.querySelector("svg");
      expect(icon).not.toBeInTheDocument();
    });
  });

  describe("Loading State", () => {
    it("displays loading text when isLoading is true", () => {
      render(<Button isLoading>Click me</Button>);
      expect(
        screen.getByRole("button", { name: /loading/i }),
      ).toBeInTheDocument();
    });

    it("disables button when isLoading is true", () => {
      render(<Button isLoading>Click me</Button>);
      const button = screen.getByRole("button", { name: /loading/i });
      expect(button).toBeDisabled();
    });

    it("replaces children text with loading text", () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.queryByText("Submit")).not.toBeInTheDocument();
      expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("displays custom loading text when provided", () => {
      render(
        <Button isLoading loadingText="Saving">
          Save
        </Button>,
      );
      expect(screen.queryByText("Save")).not.toBeInTheDocument();
      expect(screen.getByText("Saving")).toBeInTheDocument();
    });

    it("renders loading dots animation", () => {
      render(<Button isLoading>Click me</Button>);
      const button = screen.getByRole("button", { name: /loading/i });
      const dotsContainer = button.querySelector(".moriui\\:btn-loading-dots");
      expect(dotsContainer).toBeInTheDocument();
      const dots = button.querySelectorAll(".moriui\\:btn-loading-dot");
      expect(dots).toHaveLength(3);
    });
  });

  describe("Disabled State", () => {
    it("renders disabled button when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button", { name: /disabled/i });
      expect(button).toBeDisabled();
    });

    it("is disabled when isLoading is true", () => {
      render(<Button isLoading>Click me</Button>);
      const button = screen.getByRole("button", { name: /loading/i });
      expect(button).toBeDisabled();
    });

    it("prevents click when disabled", async () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Click me
        </Button>,
      );
      const button = screen.getByRole("button", { name: /click me/i });
      await userEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("User Interactions", () => {
    it("calls onClick handler when clicked", async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole("button", { name: /click me/i });
      await userEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("passes through other button props", () => {
      render(
        <Button id="test-btn" data-testid="custom-button" type="submit">
          Submit
        </Button>,
      );
      const button = screen.getByRole("button", { name: /submit/i });
      expect(button).toHaveAttribute("id", "test-btn");
      expect(button).toHaveAttribute("data-testid", "custom-button");
      expect(button).toHaveAttribute("type", "submit");
    });
  });

  describe("Combinations", () => {
    it("renders with variant, size, and icon", () => {
      render(
        <Button variant="success" size="large" icon={Heart}>
          Add to Favorites
        </Button>,
      );
      const button = screen.getByRole("button", { name: /add to favorites/i });
      expect(button.classList.contains("moriui:btn-base")).toBe(true);
      expect(button.classList.contains("moriui:btn-success")).toBe(true);
      expect(button.classList.contains("moriui:btn-large")).toBe(true);
      expect(button.querySelector("svg")).toBeInTheDocument();
    });

    it("renders disabled with icon and custom props", () => {
      render(
        <Button variant="error" disabled icon={Heart} aria-label="Delete item">
          Delete
        </Button>,
      );
      const button = screen.getByRole("button", { name: /delete item/i });
      expect(button).toBeDisabled();
      expect(button.classList.contains("moriui:btn-error")).toBe(true);
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });
});

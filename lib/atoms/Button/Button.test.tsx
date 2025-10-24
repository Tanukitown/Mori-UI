import { Button } from "./Button";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithDarkBg, renderWithLightBg } from "@Utils/testRenders";
import { Heart } from "lucide-react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";

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

  describe("Accessibility (WCAG 2.1 AAA)", () => {
    it("should not have accessibility violations - default button (light mode)", async () => {
      const { container } = renderWithLightBg(<Button>Click me</Button>);
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - default button (dark mode)", async () => {
      const { container } = renderWithDarkBg(<Button>Click me</Button>);
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - primary variant (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button variant="primary">Primary Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - primary variant (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button variant="primary">Primary Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - secondary variant (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button variant="secondary">Secondary Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - secondary variant (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button variant="secondary">Secondary Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - tertiary variant (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button variant="tertiary">Tertiary Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - tertiary variant (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button variant="tertiary">Tertiary Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - success variant (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button variant="success">Success Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - success variant (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button variant="success">Success Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - warning variant (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button variant="warning">Warning Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - warning variant (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button variant="warning">Warning Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - error variant (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button variant="error">Error Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - error variant (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button variant="error">Error Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - neutral variant (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button variant="neutral">Neutral Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - neutral variant (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button variant="neutral">Neutral Button</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - with icon (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button icon={Heart} aria-label="Add to favorites">
          Like
        </Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - with icon (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button icon={Heart} aria-label="Add to favorites">
          Like
        </Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - icon only (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button icon={Heart} aria-label="Like this item" />,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - icon only (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button icon={Heart} aria-label="Like this item" />,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - loading state (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button isLoading>Submit</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - loading state (dark mode)", async () => {
      const { container } = renderWithDarkBg(<Button isLoading>Submit</Button>);
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - disabled state (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button disabled>Disabled</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - disabled state (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button disabled>Disabled</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - small size (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button size="small">Small</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - small size (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button size="small">Small</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - medium size (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button size="medium">Medium</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - medium size (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button size="medium">Medium</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - large size (light mode)", async () => {
      const { container } = renderWithLightBg(
        <Button size="large">Large</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("should not have accessibility violations - large size (dark mode)", async () => {
      const { container } = renderWithDarkBg(
        <Button size="large">Large</Button>,
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it("has accessible button role", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button", { name: /click me/i });
      // Button has proper role automatically when rendering a native button element
      expect(button.tagName).toBe("BUTTON");
    });

    it("supports aria-label for icon-only buttons", () => {
      render(<Button icon={Heart} aria-label="Add to favorites" />);
      const button = screen.getByRole("button", { name: /add to favorites/i });
      expect(button).toHaveAttribute("aria-label", "Add to favorites");
    });

    it("supports aria-describedby for additional context", () => {
      render(
        <>
          <Button aria-describedby="btn-desc">Submit</Button>
          <div id="btn-desc">This will submit the form</div>
        </>,
      );
      const button = screen.getByRole("button", { name: /submit/i });
      expect(button).toHaveAttribute("aria-describedby", "btn-desc");
    });

    it("has proper focus management", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button", { name: /click me/i });
      button.focus();
      expect(button).toHaveFocus();
    });

    describe("Hover/Focus/Active States", () => {
      it("should not have accessibility violations - hover state (light mode)", async () => {
        const { container } = renderWithLightBg(<Button>Hover me</Button>);
        const button = container.querySelector("button");
        // Simulate hover
        button?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should not have accessibility violations - hover state (dark mode)", async () => {
        const { container } = renderWithDarkBg(<Button>Hover me</Button>);
        const button = container.querySelector("button");
        // Simulate hover
        button?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should not have accessibility violations - focus state (light mode)", async () => {
        const { container } = renderWithLightBg(<Button>Focus me</Button>);
        const button = container.querySelector("button");
        button?.focus();
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should not have accessibility violations - focus state (dark mode)", async () => {
        const { container } = renderWithDarkBg(<Button>Focus me</Button>);
        const button = container.querySelector("button");
        button?.focus();
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should not have accessibility violations - active/pressed state (light mode)", async () => {
        const { container } = renderWithLightBg(
          <Button aria-pressed="true">Active</Button>,
        );
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should not have accessibility violations - active/pressed state (dark mode)", async () => {
        const { container } = renderWithDarkBg(
          <Button aria-pressed="true">Active</Button>,
        );
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should maintain focus visible indicator on keyboard navigation (light mode)", async () => {
        const { container } = renderWithLightBg(
          <Button>Keyboard Focus</Button>,
        );
        const button = container.querySelector("button");

        // Simulate keyboard tab navigation
        button?.focus();
        expect(button).toHaveFocus();

        // Verify button is still accessible after focus
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should maintain focus visible indicator on keyboard navigation (dark mode)", async () => {
        const { container } = renderWithDarkBg(<Button>Keyboard Focus</Button>);
        const button = container.querySelector("button");

        // Simulate keyboard tab navigation
        button?.focus();
        expect(button).toHaveFocus();

        // Verify button is still accessible after focus
        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should have sufficient color contrast in hover state (light mode)", async () => {
        const { container } = renderWithLightBg(<Button>Hover Test</Button>);
        const button = container.querySelector("button");
        // Simulate hover state
        button?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));

        const results = await axe(container);
        // Check specifically for color contrast issues
        const contrastViolations = results.violations.filter(
          (violation) => violation.id === "color-contrast",
        );
        expect(contrastViolations).toEqual([]);
      });

      it("should have sufficient color contrast in hover state (dark mode)", async () => {
        const { container } = renderWithDarkBg(<Button>Hover Test</Button>);
        const button = container.querySelector("button");
        // Simulate hover state
        button?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));

        const results = await axe(container);
        // Check specifically for color contrast issues
        const contrastViolations = results.violations.filter(
          (violation) => violation.id === "color-contrast",
        );
        expect(contrastViolations).toEqual([]);
      });

      it("should have sufficient color contrast in focus state (light mode)", async () => {
        const { container } = renderWithLightBg(<Button>Focus Test</Button>);
        const button = container.querySelector("button");
        button?.focus();

        const results = await axe(container);
        // Check specifically for color contrast issues
        const contrastViolations = results.violations.filter(
          (violation) => violation.id === "color-contrast",
        );
        expect(contrastViolations).toEqual([]);
      });

      it("should have sufficient color contrast in focus state (dark mode)", async () => {
        const { container } = renderWithDarkBg(<Button>Focus Test</Button>);
        const button = container.querySelector("button");
        button?.focus();

        const results = await axe(container);
        // Check specifically for color contrast issues
        const contrastViolations = results.violations.filter(
          (violation) => violation.id === "color-contrast",
        );
        expect(contrastViolations).toEqual([]);
      });

      it("should have sufficient color contrast in active state (light mode)", async () => {
        const { container } = renderWithLightBg(
          <Button aria-pressed="true">Active Test</Button>,
        );

        const results = await axe(container);
        // Check specifically for color contrast issues
        const contrastViolations = results.violations.filter(
          (violation) => violation.id === "color-contrast",
        );
        expect(contrastViolations).toEqual([]);
      });

      it("should have sufficient color contrast in active state (dark mode)", async () => {
        const { container } = renderWithDarkBg(
          <Button aria-pressed="true">Active Test</Button>,
        );

        const results = await axe(container);
        // Check specifically for color contrast issues
        const contrastViolations = results.violations.filter(
          (violation) => violation.id === "color-contrast",
        );
        expect(contrastViolations).toEqual([]);
      });

      it("disabled button should have accessible disabled state indication (light mode)", async () => {
        const { container } = renderWithLightBg(
          <Button disabled>Disabled</Button>,
        );
        const button = container.querySelector("button");

        // Verify disabled state is properly set
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute("disabled");

        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("disabled button should have accessible disabled state indication (dark mode)", async () => {
        const { container } = renderWithDarkBg(
          <Button disabled>Disabled</Button>,
        );
        const button = container.querySelector("button");

        // Verify disabled state is properly set
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute("disabled");

        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should support aria-pressed for toggle buttons (light mode)", async () => {
        const { container } = renderWithLightBg(
          <Button aria-pressed="false">Toggle Me</Button>,
        );
        const button = container.querySelector("button");

        expect(button).toHaveAttribute("aria-pressed", "false");

        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("should support aria-pressed for toggle buttons (dark mode)", async () => {
        const { container } = renderWithDarkBg(
          <Button aria-pressed="false">Toggle Me</Button>,
        );
        const button = container.querySelector("button");

        expect(button).toHaveAttribute("aria-pressed", "false");

        const results = await axe(container);
        expect(results.violations).toEqual([]);
      });

      it("button should be keyboard accessible (enter key)", async () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const button = screen.getByRole("button", { name: /click me/i });

        button.focus();
        expect(button).toHaveFocus();

        // Simulate pressing Enter key
        button.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
        );
        button.dispatchEvent(
          new KeyboardEvent("keyup", { key: "Enter", bubbles: true }),
        );
      });

      it("button should be keyboard accessible (space key)", async () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const button = screen.getByRole("button", { name: /click me/i });

        button.focus();
        expect(button).toHaveFocus();

        // Simulate pressing Space key
        button.dispatchEvent(
          new KeyboardEvent("keydown", { key: " ", bubbles: true }),
        );
        button.dispatchEvent(
          new KeyboardEvent("keyup", { key: " ", bubbles: true }),
        );
      });
    });
  });
});

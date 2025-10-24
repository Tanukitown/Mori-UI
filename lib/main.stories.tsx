import { Button } from "./button/Button";
import { type ButtonVariant } from "./button/Button.types";

import { type Meta, type StoryObj } from "@storybook/react";
import {
  CheckCircle,
  AlertCircle,
  Plus,
  Trash2,
  ArrowRight,
} from "lucide-react";

const meta = {
  title: "Overview/Design System",
  tags: ["!autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const moriUIDesignSystem: Story = {
  render: () => (
    <div style={{ padding: "2rem", maxWidth: "1200px" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <h1 style={{ margin: "0 0 0.5rem 0", fontSize: "2.5rem" }}>
          🍃 Mori UI
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "1.1rem",
            opacity: 0.7,
          }}
        >
          A beautiful, accessible React component library with WCAG 2.1 AAA
          compliance
        </p>
      </div>

      {/* Color Palette Section */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
          Color Palette
        </h2>

        {/* Primary Colors */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            Primary - Warm Brown
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1rem",
            }}
          >
            {[
              { name: "50", color: "var(--color-primary-50)" },
              { name: "100", color: "var(--color-primary-100)" },
              { name: "200", color: "var(--color-primary-200)" },
              { name: "300", color: "var(--color-primary-300)" },
              { name: "400", color: "var(--color-primary-400)" },
              { name: "500", color: "var(--color-primary-500)" },
              { name: "600", color: "var(--color-primary-600)" },
              { name: "700", color: "var(--color-primary-700)" },
              { name: "800", color: "var(--color-primary-800)" },
              { name: "900", color: "var(--color-primary-900)" },
            ].map((swatch) => (
              <div
                key={swatch.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "80px",
                    borderRadius: "0.5rem",
                    backgroundColor: swatch.color,
                    border: "1px solid var(--color-neutral-200)",
                  }}
                />
                <small style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                  {swatch.name}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Colors */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            Secondary - Dark Green
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1rem",
            }}
          >
            {[
              { name: "50", color: "var(--color-secondary-50)" },
              { name: "100", color: "var(--color-secondary-100)" },
              { name: "200", color: "var(--color-secondary-200)" },
              { name: "300", color: "var(--color-secondary-300)" },
              { name: "400", color: "var(--color-secondary-400)" },
              { name: "500", color: "var(--color-secondary-500)" },
              { name: "600", color: "var(--color-secondary-600)" },
              { name: "700", color: "var(--color-secondary-700)" },
              { name: "800", color: "var(--color-secondary-800)" },
              { name: "900", color: "var(--color-secondary-900)" },
            ].map((swatch) => (
              <div
                key={swatch.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "80px",
                    borderRadius: "0.5rem",
                    backgroundColor: swatch.color,
                    border: "1px solid var(--color-neutral-200)",
                  }}
                />
                <small style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                  {swatch.name}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Status Colors */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            Status Colors
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            <div>
              <h4 style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                Success
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {["50", "500", "900"].map((shade) => (
                  <div
                    key={shade}
                    style={{
                      height: "60px",
                      borderRadius: "0.5rem",
                      backgroundColor: `var(--color-success-${shade})`,
                      border: "1px solid var(--color-neutral-200)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      padding: "0.25rem",
                    }}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                Warning
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {["50", "500", "900"].map((shade) => (
                  <div
                    key={shade}
                    style={{
                      height: "60px",
                      borderRadius: "0.5rem",
                      backgroundColor: `var(--color-warning-${shade})`,
                      border: "1px solid var(--color-neutral-200)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      padding: "0.25rem",
                    }}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                Error
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {["50", "500", "900"].map((shade) => (
                  <div
                    key={shade}
                    style={{
                      height: "60px",
                      borderRadius: "0.5rem",
                      backgroundColor: `var(--color-error-${shade})`,
                      border: "1px solid var(--color-neutral-200)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      padding: "0.25rem",
                    }}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button Components Section */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
          Button Components
        </h2>

        {/* Button Variants */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            All Variants
          </h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
            <Button variant="neutral">Neutral</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            All Sizes
          </h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" size="small">
              Small Button
            </Button>
            <Button variant="primary" size="medium">
              Medium Button
            </Button>
            <Button variant="primary" size="large">
              Large Button
            </Button>
          </div>
        </div>

        {/* Button with Icons */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            With Icons
          </h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary" icon={Plus} iconPosition="left">
              Add Item
            </Button>
            <Button variant="primary" icon={ArrowRight} iconPosition="right">
              Continue
            </Button>
            <Button variant="success" icon={CheckCircle}>
              Confirm
            </Button>
            <Button variant="warning" icon={AlertCircle}>
              Attention
            </Button>
            <Button variant="error" icon={Trash2}>
              Delete
            </Button>
            <Button variant="primary" icon={Plus} />
          </div>
        </div>

        {/* Button States */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>States</h3>
          <p style={{ margin: "0 0 1rem 0", fontSize: "0.9rem", opacity: 0.7 }}>
            All button states maintain WCAG AAA contrast (7:1 ratio) for
            accessibility
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary">Default</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" isLoading>
              Loading...
            </Button>
          </div>
        </div>

        {/* Interactive State Showcase */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            Interactive States (Hover, Focus, Active)
          </h3>
          <p style={{ margin: "0 0 1rem 0", fontSize: "0.9rem", opacity: 0.7 }}>
            Try hovering, focusing, or clicking buttons to see state transitions
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              "primary",
              "secondary",
              "tertiary",
              "success",
              "warning",
              "error",
              "neutral",
            ].map((variant) => (
              <div key={variant} style={{ textAlign: "center" }}>
                <Button
                  variant={variant as ButtonVariant}
                  style={{
                    width: "100%",
                    textTransform: "capitalize",
                  }}
                >
                  {variant}
                </Button>
                <small
                  style={{
                    display: "block",
                    marginTop: "0.5rem",
                    opacity: 0.6,
                  }}
                >
                  Hover to see contrast
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
          Key Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--color-bg-secondary)",
              borderRadius: "0.5rem",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>♿ Accessibility</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>
              WCAG 2.1 AAA compliant with enhanced color contrast (7:1 ratio)
              for all interactive elements.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--color-bg-secondary)",
              borderRadius: "0.5rem",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>🎨 Theming</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>
              Light and dark mode support with seamless theme switching via CSS
              variables.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--color-bg-secondary)",
              borderRadius: "0.5rem",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>📦 Modular</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>
              Tree-shakable components with optional icon support via Lucide
              React.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--color-bg-secondary)",
              borderRadius: "0.5rem",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>⚡ TypeScript</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>
              Full type safety with TypeScript and generated type definitions
              for better DX.
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
};

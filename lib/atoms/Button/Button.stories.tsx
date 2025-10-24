import { Button } from "./Button";
import { type ButtonVariant } from "./Button.types";

import { type Meta, type StoryObj } from "@storybook/react";
import { CheckCircle, AlertCircle, Plus, Trash2 } from "lucide-react";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "error",
        "neutral",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    isLoading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
          {
            id: "button-name",
            enabled: true,
          },
          {
            id: "aria-required-attr",
            enabled: true,
          },
        ],
      },
    },
    docs: {
      description: {
        component:
          "A versatile button component built with WCAG 2.1 AAA compliance in mind. Supports multiple variants, sizes, loading states, and icons with proper accessibility attributes.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default button with primary variant and medium size. Includes proper button semantics and keyboard navigation support.",
      },
    },
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary action button with high contrast ratio (7:1) meeting WCAG AAA standards. Use for primary call-to-action elements.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary action button with accessible contrast ratio. Use for alternative actions on a page.",
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    children: "Tertiary Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tertiary button variant for less prominent actions. Still maintains WCAG AAA contrast compliance.",
      },
    },
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "medium",
    children: "Success Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Success button for positive actions. Uses green color with sufficient contrast. Not color-dependent for meaning.",
      },
    },
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "medium",
    children: "Warning Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Warning button for cautionary actions. Yellow/amber color with high contrast text. Uses supplementary icons when needed.",
      },
    },
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    size: "medium",
    children: "Error Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error button for destructive actions. Red color with sufficient contrast. Consider using with confirmation dialogs.",
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    size: "medium",
    children: "Neutral Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Neutral button variant for general purposes with accessible contrast.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Small button size (32px height). Maintains 44x44px minimum touch target when possible. Suitable for compact layouts.",
      },
    },
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Medium",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Medium button size (40px height). Recommended default size for most interfaces. Exceeds 44x44px WCAG AAA touch target recommendation.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Large",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Large button size (48px height). Ideal for primary actions and touch interfaces. Comfortably exceeds touch target guidelines.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "medium",
    isLoading: true,
    children: "Submit",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Loading state automatically disables the button and displays loading text. Includes aria-hidden dots animation for visual feedback.",
      },
    },
  },
};

export const LoadingCustomText: Story = {
  name: "Loading (Localized)",
  args: {
    variant: "primary",
    size: "medium",
    isLoading: true,
    loadingText: "Cargando",
    children: "Enviar",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Loading state with custom text for localization. Fully keyboard navigable and screen reader accessible.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    children: "Disabled",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disabled button state. The disabled attribute properly prevents interaction. Communicate why a button is disabled when possible.",
      },
    },
  },
};

export const IconLeft: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: Plus,
    iconPosition: "left",
    children: "Add Item",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button with icon on the left. Icons are decorative (aria-hidden) and text label provides the accessible name.",
      },
    },
  },
};

export const IconRight: Story = {
  args: {
    variant: "error",
    size: "medium",
    icon: Trash2,
    iconPosition: "right",
    children: "Delete",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button with icon on the right. Useful for secondary icons that reinforce the action label.",
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: CheckCircle,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only button. REQUIRES aria-label for accessibility. Screen readers will announce the label, not the icon.",
      },
    },
  },
};

export const IconOnlyWithLabel: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: CheckCircle,
    "aria-label": "Confirm selection",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only button with aria-label. The aria-label provides the accessible name for screen readers while keeping the UI clean.",
      },
    },
  },
};

export const SuccessIcon: Story = {
  args: {
    variant: "success",
    size: "medium",
    icon: CheckCircle,
    iconPosition: "left",
    children: "Confirmed",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Success button combining color semantics with icon. The text label ensures meaning is not conveyed by color alone.",
      },
    },
  },
};

export const WarningIcon: Story = {
  args: {
    variant: "warning",
    size: "medium",
    icon: AlertCircle,
    iconPosition: "left",
    children: "Warning",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Warning button with alert icon. Combines visual and textual cues for clarity. Not dependent on color for meaning.",
      },
    },
  },
};

export const KeyboardNavigation: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Press Tab to Focus",
  },
  parameters: {
    docs: {
      description: {
        story:
          "All buttons support keyboard navigation. Use Tab to focus and Enter/Space to activate. Focus is visually indicated.",
      },
    },
  },
};

export const WithAriaDescribedBy: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Submit",
    "aria-describedby": "submit-help",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button with aria-describedby linking to additional context. Note: You would typically pair this with a separate description element in the DOM.",
      },
    },
  },
};

export const AllVariantsRow: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="neutral">Neutral</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All button variants showcased side-by-side. Each maintains WCAG AAA contrast ratios. The visual difference is not color-dependent.",
      },
    },
  },
};

export const AllSizesRow: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All button sizes showcased. Touch targets meet or exceed WCAG AAA recommendations (44x44px minimum).",
      },
    },
  },
};

export const HoverState: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Hover Over Me",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button in hover state. Shows color transition to darker shade (#4D3E2D for primary). CSS hover state automatically applied on mouse over.",
      },
    },
  },
};

export const FocusState: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Focus State",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button in focus state. Focus is visually indicated with outline. Essential for keyboard navigation (Tab key). Auto-focused in this story for visibility.",
      },
    },
  },
};

export const ActiveState: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Active State",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button in active/pressed state. Shows darkest color shade (#3F3123 for primary). Occurs when button is being clicked.",
      },
    },
  },
};

export const HoverFocusActiveRow: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}
        >
          Default
        </p>
        <Button variant="primary">Default State</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}
        >
          Hover
        </p>
        <Button variant="primary" style={{ backgroundColor: "#4D3E2D" }}>
          Hover State
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}
        >
          Active
        </p>
        <Button variant="primary" style={{ backgroundColor: "#3F3123" }}>
          Active State
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Visual representation of button state transitions. Shows default, hover, and active states side-by-side for comparison. Colors meet WCAG AAA contrast requirements in all states.",
      },
    },
  },
};

export const AllVariantStates: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {[
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "error",
        "neutral",
      ].map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", gap: "16px", alignItems: "center" }}
        >
          <span
            style={{
              minWidth: "80px",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {variant}:
          </span>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button variant={variant as ButtonVariant} size="medium">
              Default
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All button variants with their default state. Hover over or focus on any button to see state transitions. All variants maintain WCAG AAA contrast in default, hover, and active states.",
      },
    },
  },
};

export const DisabledStates: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    children: "Disabled Button",
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}
        >
          Enabled
        </p>
        <Button variant="primary">Enabled</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}
        >
          Disabled
        </p>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}
        >
          Disabled Loading
        </p>
        <Button variant="primary" disabled isLoading>
          Submitting
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of button states. Disabled buttons have reduced opacity (50%) but maintain sufficient contrast. Uses disabled attribute to prevent interaction.",
      },
    },
  },
};

export const InteractiveStateShowcase: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Interactive Showcase",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "16px",
      }}
    >
      <div>
        <h3 style={{ margin: "0 0 12px 0" }}>Default State</h3>
        <p style={{ margin: "0 0 12px 0", fontSize: "12px", color: "#666" }}>
          The button in its normal state. Keyboard accessible and ready for
          interaction.
        </p>
        <Button variant="primary" size="large">
          Default
        </Button>
      </div>

      <div>
        <h3 style={{ margin: "0 0 12px 0" }}>Keyboard Focus</h3>
        <p style={{ margin: "0 0 12px 0", fontSize: "12px", color: "#666" }}>
          Tab to the button below to see the focus indicator. Essential for
          keyboard navigation.
        </p>
        <Button variant="secondary" size="large">
          Press Tab to Focus
        </Button>
      </div>

      <div>
        <h3 style={{ margin: "0 0 12px 0" }}>Hover Indication</h3>
        <p style={{ margin: "0 0 12px 0", fontSize: "12px", color: "#666" }}>
          Hover over the button to see the color transition. Background becomes
          darker (#4D3E2D).
        </p>
        <Button variant="primary" size="large">
          Hover Over Me
        </Button>
      </div>

      <div>
        <h3 style={{ margin: "0 0 12px 0" }}>Loading State</h3>
        <p style={{ margin: "0 0 12px 0", fontSize: "12px", color: "#666" }}>
          Loading state disables interaction and shows animated dots. Maintains
          accessibility.
        </p>
        <Button variant="tertiary" size="large" isLoading>
          Processing
        </Button>
      </div>

      <div>
        <h3 style={{ margin: "0 0 12px 0" }}>Disabled State</h3>
        <p style={{ margin: "0 0 12px 0", fontSize: "12px", color: "#666" }}>
          Disabled buttons cannot be interacted with. Use aria-disabled or title
          for context about why.
        </p>
        <Button variant="error" size="large" disabled>
          Disabled Action
        </Button>
      </div>

      <div>
        <h3 style={{ margin: "0 0 12px 0" }}>With Icon</h3>
        <p style={{ margin: "0 0 12px 0", fontSize: "12px", color: "#666" }}>
          Icons enhance clarity. They are decorative (aria-hidden) and the text
          provides the accessible name.
        </p>
        <Button
          variant="success"
          size="large"
          icon={CheckCircle}
          iconPosition="left"
        >
          Confirm
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive interactive showcase of all button states. Demonstrates default, focus, hover, loading, disabled, and icon states with explanations for each.",
      },
    },
  },
};

import { Button } from "./Button";

import { type Meta, type StoryObj } from "@storybook/react";
import { CheckCircle, AlertCircle, Plus, Trash2 } from "lucide-react";

const meta = {
  title: "Components/Button",
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
        ],
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
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    children: "Tertiary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "medium",
    children: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "medium",
    children: "Warning Button",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    size: "medium",
    children: "Error Button",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    size: "medium",
    children: "Neutral Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Large",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "medium",
    isLoading: true,
    children: "Submit",
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
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    children: "Disabled",
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
};

export const IconRight: Story = {
  args: {
    variant: "error",
    size: "medium",
    icon: Trash2,
    iconPosition: "right",
    children: "Delete",
  },
};

export const IconOnly: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: CheckCircle,
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
};

export const WarningIcon: Story = {
  args: {
    variant: "warning",
    size: "medium",
    icon: AlertCircle,
    iconPosition: "left",
    children: "Warning",
  },
};

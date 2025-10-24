import { type LucideIcon } from "lucide-react";
import { type ComponentProps } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error"
  | "neutral";

export interface ButtonProps extends ComponentProps<"button"> {
  /**
   * The variant of the button.
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * The size of the button.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * Whether the button is in a loading state.
   * @default false
   */
  isLoading?: boolean;

  /**
   * The text to display when the button is loading.
   * @default "Loading"
   */
  loadingText?: string;

  /**
   * An optional icon to display in the button.
   */
  icon?: LucideIcon;

  /**
   * The position of the icon relative to the button text.
   * @default "left"
   */
  iconPosition?: "left" | "right";
}

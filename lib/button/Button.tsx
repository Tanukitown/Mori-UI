import { type ButtonProps } from "./Button.types";

import clpx from "@Utils/classPrefixer";
import { type PropsWithChildren } from "react";

export const Button = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  icon: Icon,
  iconPosition = "left",
  disabled,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;

  const iconElement =
    Icon && !isLoading ? <Icon className={clpx("btn-icon")} /> : null;

  return (
    <button
      disabled={disabled || isLoading}
      className={clpx("btn-base", variantClass, sizeClass)}
      {...props}
    >
      {iconPosition === "left" && iconElement}
      {isLoading ? "Loading..." : children}
      {iconPosition === "right" && iconElement}
    </button>
  );
};

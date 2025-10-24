import { type ButtonProps } from "./Button.types";

import clpx from "@Utils/classPrefixer";
import { type PropsWithChildren } from "react";
import "./Button.css";

export const Button = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  loadingText = "Loading",
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

  const loadingElement = isLoading ? (
    <>
      {loadingText}
      <span className={clpx("btn-loading-dots")} aria-hidden="true">
        <span className={clpx("btn-loading-dot")} />
        <span className={clpx("btn-loading-dot")} />
        <span className={clpx("btn-loading-dot")} />
      </span>
    </>
  ) : (
    children
  );

  return (
    <button
      disabled={disabled || isLoading}
      className={clpx("btn-base", variantClass, sizeClass)}
      {...props}
    >
      {iconPosition === "left" && iconElement}
      {loadingElement}
      {iconPosition === "right" && iconElement}
    </button>
  );
};

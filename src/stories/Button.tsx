import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * What type of button is this?
   */
  type?: "primary" | "default" | "secondary" | "link" | "text";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "default",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = `storybook-button--${type}`;
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

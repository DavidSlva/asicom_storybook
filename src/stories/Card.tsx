import React from "react";
import "./card.css";

interface CardProps {
  /**
   * How large should the card be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Should it be bordered?
   */
  bordered?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  size = "medium",
  bordered = false,
  ...props
}: CardProps) => {
  //   const mode = `storybook-card--${type}`;
  return (
    <div
      className={[
        "storybook-card",
        `storybook-card--${size}`,
        bordered ? "storybook-card--bordered" : "",
      ].join(" ")}
      {...props}
    >
      Hola
    </div>
  );
};

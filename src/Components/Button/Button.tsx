import clsx from "clsx";
import React, { MouseEventHandler } from "react";

export type ButtonProps = {
    text?: string;
    variant?: "primary" | "secondary" | "tertiary";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
};

const Button = ({
    variant,
    text,
    onClick,
    disabled,
    className,
}: ButtonProps) => {
    console.log(className);

    console.log(
        clsx(className, variant === "primary" ? "bg-red-500" : "bg-green-500"),
    );
    return (
        <button
            className={clsx(
                className,
                variant === "primary" ? "bg-red-500" : "bg-green-500",
            )}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="p-40">{text}</span>
        </button>
    );
};

export default Button;

import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
    disabled = false,
    onClick = () => {},
    variant = "primary",
    text = "Button",
    className = "",
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Button
                text={text}
                disabled={disabled}
                onClick={onClick}
                variant={variant}
                className={className}
            />
        </div>
    );
};

export default Example;

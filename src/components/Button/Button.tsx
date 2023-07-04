import React, {FC} from 'react';
import style from "./Button.module.scss"

interface IButton {
    children: React.ReactNode,
    className?: string,
    variant?: number,
    onClick: () => void,
}

const Button: FC<IButton> = ({onClick, className="", children, variant = 0}) => {

    return (
        <button onClick={onClick} className={`${style.btn} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
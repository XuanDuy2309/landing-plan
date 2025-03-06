interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`base-button ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </button>
    );
};
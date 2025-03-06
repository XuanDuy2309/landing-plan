import React from 'react';

interface InputProps {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
    required?: boolean;
}

export const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder = '',
    value,
    onChange,
    className = '',
    disabled = false,
    required = false,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="w-full h-14 border rounded-xl border-gray-300 focus-within:border-gray-400">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={`base-input ${className}`}
                disabled={disabled}
                required={required}
            />
        </div>
    );
};
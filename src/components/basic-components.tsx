import React from 'react'

export const Button: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => (
    <button
        {...props}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${props.className || ''}`}
    >
        {children}
    </button>
)

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
    props,
) => (
    <input
        {...props}
        className={`px-3 py-2 border rounded ${props.className || ''}`}
    />
)

export const Select: React.FC<
    React.SelectHTMLAttributes<HTMLSelectElement> & {
        children: React.ReactNode
    }
> = ({ children, ...props }) => (
    <select
        {...props}
        className={`px-3 py-2 border rounded ${props.className || ''}`}
    >
        {children}
    </select>
)

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    ...props
}) => (
    <div
        {...props}
        className={`bg-white shadow rounded-lg ${props.className || ''}`}
    >
        {children}
    </div>
)

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
    children,
    ...props
}) => (
    <span
        {...props}
        className={`px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm ${props.className || ''}`}
    >
        {children}
    </span>
)

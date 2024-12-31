"use client"
import React from 'react'

type ButtonProps = {
  name: string;
  onClick: () => void;  
  className?: string;  
}

const Button = ({ name, onClick, className }:ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className}  cursor-pointer `}>
      {name}
    </button>
  )
}

export default Button

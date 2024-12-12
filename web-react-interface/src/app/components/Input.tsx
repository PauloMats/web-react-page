import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ label, name, type, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} onChange={onChange} />
    </div>
  );
  
};
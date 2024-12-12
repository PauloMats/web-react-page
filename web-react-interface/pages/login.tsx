"use client";

import React, { useState } from 'react';
import { Button } from '../src/app/components/Button';
import { Form } from '../src/app/components/Form';
import { Input } from '../src/app/components/Input';



const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', senha: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para autenticar o usuário
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="form-container">
      <h1 className="form-title text-center">Login</h1>
      <Form onSubmit={handleSubmit} className="mt-6">
        <div className="form-field">
          <label>E-mail</label>
          <Input name="email" type="email" placeholder="Digite seu e-mail" onChange={handleChange} />
        </div>
        <div className="form-field">
          <label>Senha</label>
          <Input name="senha" type="password" placeholder="Digite sua senha" onChange={handleChange} />
        </div>
        <Button type="submit" className="form-button w-full mt-4">Entrar</Button>
      </Form>
    </div>
  </div>
  );
};

export default Login;
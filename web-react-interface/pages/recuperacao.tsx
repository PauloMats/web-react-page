"use client";

import { useState } from 'react';
import { Button } from '../src/app/components/Button';
import { Form } from '../src/app/components/Form';
import { Input } from '../src/app/components/Input';

const Recuperacao: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/recuperacao-senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o link de recuperação de senha');
      }

      alert('Link de recuperação de senha enviado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar o link de recuperação de senha.');
    }
  };

  return (
   
<div className="flex items-center justify-center min-h-screen bg-gray-50">
  <div className="form-container">
    <h1 className="form-title text-center">Recuperação de Senha</h1>
    <Form onSubmit={handleSubmit} className="mt-6">
      <div className="form-field">
        <label>E-mail</label>
        <Input name="email" type="email" placeholder="Digite seu e-mail" onChange={handleChange} />
      </div>
      <Button type="submit" className="form-button w-full mt-4">Enviar Link</Button>
    </Form>
  </div>
</div>
  );
};

export default Recuperacao;
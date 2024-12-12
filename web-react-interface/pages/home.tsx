"use client";

import { useState } from 'react';
import { Button } from '../src/app/components/Button';
import { Form } from '../src/app/components/Form';
import { Input } from '../src/app/components/Input';
import { fetchCepData } from '../src/app/services/cepService';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    endereco: {
      rua: '',
      bairro: '',
      numero: '',
      cidade: '',
      estado: '',
      cep: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCepBlur = async () => {
    const data = await fetchCepData(formData.endereco.cep);
    if (data) {
      setFormData((prev) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
        },
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
  };

  return (
    <div className="">
  <div className="form-container">
    <h1 className="form-title text-center">Cadastro</h1>
    <Form onSubmit={handleSubmit} className="mt-6">
      <div className="form-field">
        <label>Nome Completo</label>
        <Input name="nome" placeholder="Seu nome completo" onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>E-mail</label>
        <Input name="email" type="email" placeholder="Seu e-mail" onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>Senha</label>
        <Input name="senha" type="password" placeholder="Crie uma senha" onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>Confirmar Senha</label>
        <Input name="confirmarSenha" type="password" placeholder="Confirme sua senha" onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>CEP</label>
        <Input name="cep" placeholder="Digite seu CEP" onChange={handleChange} onBlur={handleCepBlur} />
      </div>
      <div className="form-field">
        <label>Rua</label>
        <Input name="rua" value={formData.endereco.rua} readOnly />
      </div>
      <div className="form-field">
        <label>Bairro</label>
        <Input name="bairro" value={formData.endereco.bairro} readOnly />
      </div>
      <div className="form-field">
        <label>Número</label>
        <Input name="numero" placeholder="Número" onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>Cidade</label>
        <Input name="cidade" value={formData.endereco.cidade} readOnly />
      </div>
      <div className="form-field">
        <label>Estado</label>
        <Input name="estado" value={formData.endereco.estado} readOnly />
      </div>
      <Button type="submit" className="form-button w-full mt-4">Cadastrar</Button>
    </Form>
  </div>
</div>
  );
};

export default Cadastro;
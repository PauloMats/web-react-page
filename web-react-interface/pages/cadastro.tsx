"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { fetchCepData  } from '../src/app/services/cepService';

interface Endereco {
  rua: string;
  bairro: string;
  numero: string;
  cidade: string;
  estado: string;
  cep: string;
}

interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  endereco: Endereco;
}

const Cadastro: React.FC = (a) => {
  const [formData, setFormData] = useState<FormData>({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="senha"
        value={formData.senha}
        onChange={handleChange}
        placeholder="Senha"
      />
      <input
        type="password"
        name="confirmarSenha"
        value={formData.confirmarSenha}
        onChange={handleChange}
        placeholder="Confirmar senha"
      />
      <input
        type="text"
        name="cep"
        value={formData.endereco.cep}
        onChange={handleChange}
        onBlur={handleCepBlur}
        placeholder="CEP"
      />
      <input
        type="text"
        name="rua"
        value={formData.endereco.rua}
        onChange={handleChange}
        placeholder="Rua"
      />
      <input
        type="text"
        name="bairro"
        value={formData.endereco.bairro}
        onChange={handleChange}
        placeholder="Bairro"
      />
      <input
        type="text"
        name="numero"
        value={formData.endereco.numero}
        onChange={handleChange}
        placeholder="Número"
      />
      <input
        type="text"
        name="cidade"
        value={formData.endereco.cidade}
        onChange={handleChange}
        placeholder="Cidade"
      />
      <input
        type="text"
        name="estado"
        value={formData.endereco.estado}
        onChange={handleChange}
        placeholder="Estado"
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};
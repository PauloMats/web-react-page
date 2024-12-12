"use client";

import React from 'react';
import Link from 'next/link';
import "./globals.css";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Nosso App</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/home" className="text-gray-600 hover:text-gray-800">Cadastro</Link></li>
            <li><Link href="/login" className="text-gray-600 hover:text-gray-800">Login</Link></li>
            <li><Link href="/recuperacao" className="text-gray-600 hover:text-gray-800">Recuperação</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow pt-20 pb-16 flex flex-col items-center gap-6">
        <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Funcionalidades principais</h2>
          <p className="text-gray-600 mt-2">
            Este é um exemplo de aplicação moderna utilizando React.js, Next.js e Tailwind CSS.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
            <Link href="/home"> 
            <img
              src="/images/cadastro.jpg"
              alt="Feature 1"
              className="w-full h-60 object-cover rounded-md mb-4"/> </Link>
            <h3 className="text-lg font-medium text-gray-700">Cadastro</h3>
            <p className="text-gray-500 mt-2">Gerencie seus dados com facilidade.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
            <Link href="/login">
            <img
              src="/images/login.png"
              alt="Feature 2"
              className="w-50 h-45 object-cover rounded-md mb-4"
            /> </Link>
            <h3 className="text-lg font-medium text-gray-700">Login</h3>
            <p className="text-gray-500 mt-2">Acesse sua conta com segurança.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
            <Link href="/recuperacao">
            <img
              src="/images/novasenha.png"
              alt="Feature 3"
              className="w-full h-50 object-cover rounded-md mb-4"
            /> </Link>
            <h3 className="text-lg font-medium text-gray-700">Recuperação</h3>
            <p className="text-gray-500 mt-2">Recupere sua conta rapidamente.</p>
          </div>
        </div>
      </main>
      <footer className="w-full bg-gray-800 p-4 fixed bottom-0 left-0">
        <p className="text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Nosso App. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
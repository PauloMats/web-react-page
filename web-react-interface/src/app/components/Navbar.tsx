import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <Link href="/home" className="text-white mr-4">Cadastro</Link>
      <Link href="/login" className="text-white mr-4">Login</Link>
      <Link href="/recuperacao" className="text-white">Recuperação de Senha</Link>
      <Link href="/" className="text-white">Home</Link>
    </nav>
  );
};

export default NavBar;
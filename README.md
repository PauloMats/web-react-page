# Meu Projeto - Interface Web com React, Next.js e Tailwind CSS


![image](https://github.com/user-attachments/assets/395f8447-ed06-413b-bbda-6c0b0f17f357)
![image](https://github.com/user-attachments/assets/81bec036-76d2-428c-b093-e66697d22a8f)
![image](https://github.com/user-attachments/assets/f3db2926-320b-42c3-abfd-7f25ca637259)



Este projeto é uma interface web desenvolvida com React, Next.js e Tailwind CSS. Ele inclui páginas para cadastro, login, recuperação de senha e uma página inicial que exibe uma lista de usuários.

## Funcionalidades

- **Cadastro de Usuário**: Permite que novos usuários se cadastrem com validação de CEP utilizando uma API externa.
- **Login de Usuário**: Usuários podem se autenticar com e-mail e senha.
- **Recuperação de Senha**: Usuários podem solicitar um link para recuperação de senha.
- **Página Inicial**: Exibe uma lista de usuários em uma tabela organizada.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API](https://reactjs.org/docs/context.html) para gerenciamento de estado

## Estrutura do Projeto

/components 
/Button.js 
/Input.js 
/Form.js 
/NavBar.js 
/pages 
/cadastro.js 
/login.js 
/recuperacao.js 
/home.js 
/services 
/authService.js 
/cepService.js 
/context 
/AuthContext.js

## Como Executar

Para executar este projeto, você precisará ter o Node.js instalado em sua máquina. Em seguida, clone este repositório e execute os seguintes comandos:

```bash
cd web-react-interface
npm install
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.


Cadastro: Acesse a página de cadastro e preencha os campos. O CEP será validado automaticamente.

Login: Acesse a página de login e insira suas credenciais.

Recuperação de Senha: Acesse a página de recuperação de senha e insira seu e-mail para receber um link de recuperação.

Home: Acesse a página inicial para visualizar a lista de usuários.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Autor

Feito com :heart: por [Paulo Mateus](https://www.linkedin.com/in/paulomatsdev)



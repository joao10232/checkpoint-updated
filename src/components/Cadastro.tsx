import React, { useState } from 'react';
import styles from './Cadastro.module.css'; // Importar o CSS Module

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para cadastrar o usuário
    console.log({ nome, email, senha, confirmarSenha });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cadastroBox}>
        <div className={styles.header}>
          <img 
            src="/src/assets/logo.png" 
            alt="Logo" 
            className={styles.logo}
          />
          <h1 className={styles.title}>Check Point</h1>
        </div>
        <h2 className={styles.subtitle}>Cadastro de Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome</label>
            <input 
              type="text" 
              id="nome" 
              placeholder="Nome Completo" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha" 
              placeholder="Senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input 
              type="password" 
              id="confirmarSenha" 
              placeholder="Confirmar Senha" 
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.cadastrarButton}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;

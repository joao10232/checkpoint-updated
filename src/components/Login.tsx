import React, { useState } from "react";
import styles from "./Login.module.css";

export const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica de login pode ser adicionada aqui
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.titleContainer}>
                    <img src='/src/assets/logo.png' alt='Logo' className={styles.logo} />
                    <h1 className={styles.title}>Check Point</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='username'>Usuário</label>
                        <input
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Usuário'
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='password'>Senha</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Senha'
                        />
                    </div>
                    <button type='submit' className={styles.loginButton}>
                        Entrar
                    </button>
                    <a href='#' className={styles.forgotPassword}>
                        Esqueci minha senha
                    </a>
                </form>
                <footer className={styles.footer}>Rede Doctum - Ciência da Computação</footer>
            </div>
        </div>
    );
};

export default Login;

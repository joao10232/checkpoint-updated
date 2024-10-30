import React from 'react';
import styles from './editarUsuario.module.css';

const EditarUsuario: React.FC = () => {
  return (
    <div className={styles.container}>
      
      
      <h2 className={styles.title}>Dados pessoais</h2>
      
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Nome completo</label>
            <input type="text" placeholder="Digite o nome completo ..." />
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Digite o email ..." />
          </div>
          <div className={styles.inputGroup}>
            <label>Setor</label>
            <select>
              <option>Selecione o setor</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>CPF</label>
            <input type="text" placeholder="___.___.___-__" />
          </div>
          <div className={styles.inputGroup}>
            <label>RG</label>
            <input type="text" placeholder="Digite o RG ..." />
          </div>
          <div className={styles.inputGroup}>
            <label>Órgão Expedidor</label>
            <input type="text" placeholder="Digite o órgão expedidor ..." />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Data nascimento</label>
            <input type="date" />
          </div>
          <div className={styles.inputGroup}>
            <label>Celular</label>
            <input type="text" placeholder="(33) 99999-9999" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Endereço</label>
            <input type="text" placeholder="Digite o endereço ..." />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Complemento</label>
            <input type="text" placeholder="Digite o complemento ..." />
          </div>
        </div>

        <div className={styles.row}>
          <button type="submit" className={styles.saveButton}>Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default EditarUsuario;

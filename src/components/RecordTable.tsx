import React from 'react';
import styles from './recordTable.module.css';

const RecordTable: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeader}>Data</th>
            <th className={styles.tableHeader}>Jornada</th>
            <th className={styles.tableHeader}>Chegada</th>
            <th className={styles.tableHeader}>Início Intervalo</th>
            <th className={styles.tableHeader}>Fim Intervalo</th>
            <th className={styles.tableHeader}>Saída</th>
            <th className={styles.tableHeader}>Atrasos</th>
            <th className={styles.tableHeader}>Horas extras</th>
            <th className={styles.tableHeader}>Turno</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr className={styles.tableRow} key={index}>
              <td className={styles.tableCell}>01/01/2000</td>
              <td className={styles.tableCell}>08:00 - 18:00</td>
              <td className={styles.tableCell}>08:00</td>
              <td className={styles.tableCell}>08:00</td>
              <td className={styles.tableCell}>12:30</td>
              <td className={styles.tableCell}>18:05</td>
              <td className={styles.tableCell}>00:30</td>
              <td className={styles.tableCell}>02:00</td>
              <td className={styles.tableCell}>Diurno</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;

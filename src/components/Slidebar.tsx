import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaClock, FaUser, FaPlus } from "react-icons/fa";
import styles from "./Sidebar.module.css";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    toggleStatusModal: () => void;
    toggleCadastroModal: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, toggleStatusModal, toggleCadastroModal }) => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            <div className={styles.toggleButton} onClick={toggleSidebar}>
                <FaBars />
                {isOpen && <span className={styles.logo}>Check Point</span>}
            </div>
            <div className={`${styles.menuItem} ${isOpen ? styles.open : styles.closed}`} onClick={() => navigate("/")}>
                <FaClock /> {isOpen && <span>Histórico de Ponto</span>}
            </div>
            <div className={`${styles.menuItem} ${isOpen ? styles.open : styles.closed}`} onClick={toggleStatusModal}>
                <FaUser /> {isOpen && <span>Bater Ponto</span>}
            </div>
            <div
                className={`${styles.menuItem} ${isOpen ? styles.open : styles.closed}`}
                onClick={toggleCadastroModal}
            >
                <FaPlus /> {isOpen && <span>Adicionar colaborador</span>}
            </div>
        </div>
    );
};

export default Sidebar;

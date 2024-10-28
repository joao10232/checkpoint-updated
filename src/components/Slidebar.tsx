import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaClock, FaUser, FaUsers, FaPlus, FaCog } from "react-icons/fa";
import styles from "./Sidebar.module.css";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    toggleStatusModal: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, toggleStatusModal }) => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            <div className={styles.toggleButton} onClick={toggleSidebar}>
                <FaBars />
            </div>
            <div className={styles.logo}>
                <div className={styles.iconWrapper}>
                    <FaClock />
                </div>
                {isOpen && <span>Check Point</span>}
            </div>
            <div className={`${styles.menuItem} ${isOpen ? styles.open : styles.closed}`} onClick={() => navigate("/")}>
                <FaClock /> {isOpen && <span>Histórico de ponto</span>}
            </div>
            <div className={`${styles.menuItem} ${isOpen ? styles.open : styles.closed}`} onClick={toggleStatusModal}>
                <FaUser /> {isOpen && <span>Ausências</span>}
            </div>
            <div
                className={`${styles.menuItem} ${isOpen ? styles.open : styles.closed}`}
                onClick={() => navigate("/cadastro")}>
                <FaPlus /> {isOpen && <span>Adicionar colaborador</span>}
            </div>
        </div>
    );
};

export default Sidebar;

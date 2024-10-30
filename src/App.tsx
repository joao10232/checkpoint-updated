import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Slidebar";
import Header from "./components/Header";
import RecordTable from "./components/RecordTable";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";
import EditarUsuario from "./components/EditarUsuario";
import { Modal } from "@mui/material";
import "./App.css";
import {  toast } from "react-toastify";
import Login from "./components/Login";
import CustomToastContainer from "./components/toastSucess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const SidebarWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
    z-index: 1000;
    transition: width 0.3s;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 20px;
    overflow: hidden;
`;

const Ponto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CadastroForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ nome, email, senha, confirmarSenha });

        // Lógica de cadastro (simulada)
        // Se o cadastro for bem-sucedido, feche o modal
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField label="Nome" id="nome" value={nome} onChange={setNome} />
            <InputField label="Email" id="email" value={email} onChange={setEmail} />
            <InputField label="Senha" id="senha" value={senha} onChange={setSenha} type="password" />
            <InputField label="Confirmar Senha" id="confirmarSenha" value={confirmarSenha} onChange={setConfirmarSenha} type="password" />
            <button type="submit" className="cadastrarButton">Cadastrar</button>
        </form>
    );
};

type InputFieldProps = {
    label: string;
    id: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    type?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, id, value, onChange, type = "text" }) => (
    <div className="inputGroup">
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
        />
    </div>
);

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [statusModal, setStatusModal] = useState(false);
    const [statusCadastroModal, setStatusCadastroModal] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const handleStatusModal = () => setStatusModal((prev) => !prev);
    const handleCadastroModal = () => setStatusCadastroModal((prev) => !prev);

    return (
        <>
            <Router>
                <GlobalStyle />
                <Container>
                    {/* Renderiza o Sidebar apenas se a rota não for "/login" */}
                    {location.pathname !== "/login" && (
                        <SidebarWrapper isOpen={isSidebarOpen}>
                            <Sidebar
                                isOpen={isSidebarOpen}
                                toggleStatusModal={handleStatusModal}
                                toggleCadastroModal={handleCadastroModal}
                                toggleSidebar={toggleSidebar}
                            />
                        </SidebarWrapper>
                    )}
                    <ContentWrapper>
                        <Routes>
                            <Route path="/" element={<MainPage statusModal={statusModal} onCloseModal={handleStatusModal} />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/editar-usuario" element={<EditarUsuario />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                        {/* CadastroModal controlado pelo statusCadastroModal */}
                        <CadastroModal open={statusCadastroModal} onClose={handleCadastroModal} />
                    </ContentWrapper>
                </Container>
            </Router>
        </>
    );
};

type MainPageProps = {
    statusModal: boolean;
    onCloseModal: () => void;
};

const MainPage: React.FC<MainPageProps> = ({ statusModal, onCloseModal }) => (
    <Ponto>
        <Header />
        <RecordTable />
        <CustomModal
            open={statusModal}
            onClose={onCloseModal}
            onConfirm={() => {
                onCloseModal();
                toast.success('🦄 Wow so easy!',
                    <CustomToastContainer />
                    );
            }}
            title="Bater Ponto"
            buttonLabel="Registrar"
        />
    </Ponto>
);

type CustomModalProps = {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    buttonLabel: string;
};

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, onConfirm, title, buttonLabel }) => (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="container"
                style={{
                    position: "relative",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    width: "400px",
                    textAlign: "center",
                }}
            >
                {/* Botão de fechar com ícone de "X" */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-0px",
                        background: "none",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        color: 'black'
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <h2 id="modal-title">{title}</h2>
                <button onClick={onConfirm}>{buttonLabel}</button>
            </div>
        </div>
    </Modal>
);


const CadastroModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-cadastro-title">
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               
            }}
        >
         <div className="container" style={{ position: "relative", padding: "20px", backgroundColor: "white", borderRadius: "8px" }}>
                {/* Botão de fechar com ícone do Font Awesome */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-0px",
                        background: "none",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        color: 'black'
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h2>Cadastro de Usuário</h2>
                <CadastroForm onClose={onClose} /> {/* Passe `onClose` aqui */}
            </div>
        </div>
    </Modal>
);

export default App;

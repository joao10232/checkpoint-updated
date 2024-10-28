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
import { Bounce, toast, ToastContainer } from "react-toastify";
import moment from "moment";
import Login from "./components/Login";

// moment().format("DD/MM/YYYY HH:mm")

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
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    width: 100%;
    height: 100vh;
    padding: 20px;
    overflow: hidden;
    margin-left: 300px;
`;

const MainContent = styled.div`
    width: 100%;
    max-width: 1200px; /* Define um tamanho máximo para o conteúdo */
    height: 100%;
    overflow-y: auto;
    background-color: #f4f6f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [statusModal, setStatusModal] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleStatusModal = () => {
        setStatusModal((prev) => !prev);
    };

    return (
        <>
            <Router>
                <GlobalStyle />
                <Container>
                    <SidebarWrapper isOpen={isSidebarOpen}>
                        <Sidebar
                            isOpen={isSidebarOpen}
                            toggleStatusModal={handleStatusModal}
                            toggleSidebar={toggleSidebar}
                        />
                    </SidebarWrapper>
                    <ContentWrapper>
                        <MainContent>
                            <Routes>
                                <Route
                                    path='/'
                                    element={
                                        <>
                                            <Header />
                                            <RecordTable />
                                            {statusModal && (
                                                <Modal
                                                    open={statusModal}
                                                    onClose={handleStatusModal}
                                                    aria-labelledby='modal-modal-title'
                                                    aria-describedby='modal-modal-description'>
                                                    <>
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                width: "100%",
                                                                height: "100%",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                            }}>
                                                            <div className='container'>
                                                                <div id='clock'></div>
                                                                <button
                                                                    id='punchButton'
                                                                    onClick={() => {
                                                                        handleStatusModal();
                                                                        toast.success("Ponto batido com sucesso!");
                                                                    }}>
                                                                    Bater Ponto
                                                                </button>
                                                            </div>

                                                            <div className='overlay' id='overlay'></div>
                                                            <div className='popup' id='popup'>
                                                                <div className='checkmark'>✔️</div>
                                                                <h2>Ponto registrado com sucesso!</h2>
                                                                <p id='popupMessage'></p>
                                                                <button id='closePopup'>OK</button>
                                                            </div>
                                                        </div>
                                                    </>
                                                </Modal>
                                            )}
                                        </>
                                    }
                                />
                                <Route path='/cadastro' element={<Cadastro />} />
                                <Route path='/editar-usuario' element={<EditarUsuario />} />
                                <Route path='/login' element={<Login />} />
                            </Routes>
                        </MainContent>
                    </ContentWrapper>
                </Container>
            </Router>
            {/* <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex" }}>
                <ToastContainer
                    position='top-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='light'
                    transition={Bounce}
                />
            </div> */}
        </>
    );
};

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 18px;
    color: #333;
`;

const UserContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    z-index: 10;
`;

const DropdownItem = styled.div`
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const Header: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleEditUser = () => {
        navigate("/editar-usuario");
    };

    return (
        <HeaderContainer>
            <Title>Histórico de ponto • Caratinga-MG</Title>
            <div style={{ display: "flex", alignItems: "center" }}>
                <UserContainer onClick={toggleDropdown}>
                    <UserImage src='/src/assets/user.jpg' alt='Usuário' />
                    {isDropdownOpen && (
                        <DropdownMenu>
                            <DropdownItem onClick={handleEditUser}>Editar usuário</DropdownItem>
                            <DropdownItem onClick={() => navigate("/")}>Logout</DropdownItem>
                        </DropdownMenu>
                    )}
                </UserContainer>
            </div>
        </HeaderContainer>
    );
};

export default Header;

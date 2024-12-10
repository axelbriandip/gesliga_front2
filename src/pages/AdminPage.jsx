import React from 'react';
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
    const navigate = useNavigate();

    const volver = () => {
        navigate(-1)
    }

    return (
    <div>
        <h1>AdminPage</h1>
        <p>Este es un componente funcional básico</p>
        <button onClick={volver}>volver</button>
    </div>
    );
};

export default AdminPage;
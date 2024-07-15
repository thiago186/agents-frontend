import React from 'react';
import { useOrganizationsContext } from '../contexts/organizationContext';

const HomePage = () => {
    const context = useOrganizationsContext();

    // Verificar se o contexto está definido
    if (!context) {
        return <div>Erro: Contexto de organizações não encontrado.</div>;
    }

    const { organizations, isLoading } = context;

    return (
        <div>
            <h1>Bem-vindo à Página Inicial</h1>
            <p>Você fez login com sucesso!</p>
            {isLoading ? (
                <p>Carregando Organizações...</p>
            ) : organizations && organizations.length > 0 ? (
                <ul>
                    {organizations.map(org => (
                        <li key={org.organizationId}>{org.organizationName}</li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma organização encontrada.</p>
            )}
        </div>
    );
};

export default HomePage;
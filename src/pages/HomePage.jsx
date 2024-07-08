import React from 'react';

import { useOrganizationsContext } from '../contexts/organizationContext';


const HomePage = () => {

    const { organizations, isLoading } = useOrganizationsContext();

    return (
            <div>
                <h1>Bem-vindo à Página Inicial</h1>
                <p>Você fez login com sucesso!</p>
                {isLoading ? (
                    <p> Carregando Oranizações... </p>
                ) : (
                    <ul>
                        {organizations.map(org => (
                            <li key={org.organizationId}>{org.organizationName}</li>
                        ))}
                    </ul>
                )}
            </div>
    );
};


export default HomePage;
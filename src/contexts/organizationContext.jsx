// context.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getOrganizations } from '../services/commonsServices';

export const OrgsContext = createContext();

const OrganizationProvider = ({ children }) => {
    const [organizations, setOrganizations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrgs = async () => {
            try {
                const orgs = await getOrganizations();
                console.log("Response from getOrganizations:", orgs);
                setOrganizations(orgs);
                setIsLoading(false);
                console.log("State organizations after setOrganizations:", orgs);
                console.log('loading: ', false);
            } catch (error) {
                console.error("Erro ao buscar organizações:", error);
                setIsLoading(false);
                console.log('loading: ', false);
            }
        }
        console.log('effect');
        fetchOrgs();
    }, []);

    return (
        <OrgsContext.Provider value={{ organizations, isLoading }}>
            {children}
        </OrgsContext.Provider>
    );
}

export function useOrganizationsContext() {
    return useContext(OrgsContext);
};

export default OrganizationProvider;

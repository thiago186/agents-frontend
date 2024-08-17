// context.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getOrganizations } from '../services/commonsServices';

export const OrgsContext = createContext();

const OrganizationProvider = ({ children }) => {
    const [currOrganization, setCurrOrganization] = useState(null);
    const [organizations, setOrganizations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrgs = async () => {
            try{
                const orgs = await getOrganizations();
                console.log("Response from getOrganizations:", orgs);
                setOrganizations(orgs);
                console.log("State organizations after setOrganizations:", orgs);
            } catch (error) {
                console.error("Erro ao buscar organizações:", error);
            }
        };
        fetchOrgs();
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if ((!currOrganization) && organizations.length > 0) {
            console.log('orgs[0]', organizations[0]);
            setCurrOrganization(organizations[0]);
        }
    }, [organizations]);

    useEffect(() => console.log("currOrg changed: ", currOrganization), [currOrganization]);


    return (
        <OrgsContext.Provider value={{ organizations, isLoading, currOrganization }}>
            {children}
        </OrgsContext.Provider>
    );
}

export function useOrganizationsContext() {
    return useContext(OrgsContext);
};

export default OrganizationProvider;

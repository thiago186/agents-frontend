import React, { createContext, useState, useContext, useEffect } from 'react';

import { getOrganizations } from '../services/commonsServices';

const OrganizationContext = createContext();

export const useOrganization = () => useContext(OrganizationContext);

export const OrganizationProvider = ({ children }) => {
  const [currentOrganization, setCurrentOrganization] = useState(null);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const orgs = await organizationService.getUserOrganizations();
      setOrganizations(orgs);
      if (orgs.length > 0 && !currentOrganization) {
        setCurrentOrganization(orgs[0]);
      }
    } catch (error) {
      console.error('Erro ao buscar organizações:', error);
    }
  };

  const changeCurrentOrganization = async (orgId) => {
    const org = organizations.find(o => o.id === orgId);
    if (org) {
      try {
        await organizationService.setCurrentOrganization(orgId);
        setCurrentOrganization(org);
      } catch (error) {
        console.error('Erro ao mudar a organização atual:', error);
      }
    }
  };

  return (
    <OrganizationContext.Provider 
      value={{ 
        currentOrganization, 
        organizations, 
        changeCurrentOrganization 
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
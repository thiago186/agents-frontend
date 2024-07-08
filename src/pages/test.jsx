import React, { useContext } from "react";

import { useOrganizationsContext } from "../contexts/organizationContext";


export default function Test() {

    console.log('carregando teste');
    const { organizations, isLoading } = useOrganizationsContext();
    console.log('Organizações:', organizations)

    if (isLoading) {
        return <p>Carregando...</p>
    }

    return (
        <p>{organizations[0].organizationName}</p>
    )
};
import React from 'react';
import { getOrganizations } from '../services/commonsServices';

const HomePage = () => {
 let organizations = getOrganizations();
  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Você fez login com sucesso!</p>
    </div>
  );
};

export default HomePage;
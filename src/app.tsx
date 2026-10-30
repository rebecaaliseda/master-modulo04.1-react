import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage } from './login';
import { ListPage } from './list';
import { DetailPage } from './detail';
import { RickMortyPage } from './rickMorty/rickmorty';
import { RickMortyDetailPage } from './rickMorty/rickmorty-detail';

import { OrganizationContext } from './context/organization.context';

export const App = () => {
  const [organization, setOrganization] = React.useState('lemoncode');

  return (
    <OrganizationContext.Provider
      value={{
        organization,
        setOrganization,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/rickmorty" element={<RickMortyPage />} />
          <Route path="/rickmorty/:id" element={<RickMortyDetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </OrganizationContext.Provider>
  );
};

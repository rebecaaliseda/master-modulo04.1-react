import React from 'react';

interface OrganizationContextModel {
  organization: string;
  setOrganization: (organization: string) => void;
}

export const OrganizationContext = React.createContext<OrganizationContextModel>({
  organization: 'lemoncode',
  setOrganization: () => {},
});

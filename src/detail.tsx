import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface MemberDetail {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const org = new URLSearchParams(location.search).get('org') || 'lemoncode';

  const [member, setMember] = React.useState<MemberDetail | null>(null);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, [id]);

  if (!member) return <p>Cargando...</p>;

  return (
    <Box className="detail-container">
      <Card className="detail-card">
        <CardMedia component="img" height="350" image={member.avatar_url} alt={member.login} />

        <Box className="detail-content">
          <Typography variant="h4">{member.login}</Typography>
          <Typography variant="h6">{member.name}</Typography>
          <Typography variant="body1">{member.company}</Typography>
          <Typography variant="body2">{member.bio}</Typography>

          <Button
            variant="contained"
            component={Link}
            to={`/list?org=${org}`}
            className="back-button"
          >
            Volver
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

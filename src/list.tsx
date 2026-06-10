import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const initialOrg = query.get('org') || 'lemoncode';
  const initialPage = parseInt(query.get('page') || '1');

  const [organization, setOrganization] = React.useState(initialOrg);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setPage] = React.useState(initialPage);

  const handleSearch = () => {
    fetch(`https://api.github.com/orgs/${organization}/members?per_page=8&page=${page}`)
      .then((response) => response.json())
      .then((json) => setMembers(json));

    navigate(`/list?org=${organization}&page=${page}`);
  };

  React.useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <Box className="list-container">
      {}
      <Box className="nav-rickmorty">
        <Button variant="contained" component={Link} to="/rickmorty" className="rickmorty-button">
          Rick & Morty
        </Button>
      </Box>

      <Typography variant="h4" className="list-title">
        Miembros de GitHub
      </Typography>

      <Box className="filter-container">
        <TextField
          label="Organización"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Buscar
        </Button>
      </Box>

      {}
      <Grid2 container spacing={1} justifyContent="center">
        {members.map((member) => (
          <Grid2 xs={12} sm={6} md={3} key={member.id}>
            <Card className="member-card">
              <CardMedia
                component="img"
                height="260"
                image={member.avatar_url}
                alt={member.login}
              />

              <Box className="card-overlay">
                <Typography variant="h6" className="card-title">
                  {member.login.toUpperCase()}
                </Typography>

                <Typography variant="body2">{member.id}</Typography>

                <Button
                  variant="outlined"
                  className="card-button"
                  component={Link}
                  to={`/detail/${member.login}?org=${organization}`}
                >
                  MORE
                </Button>
              </Box>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {}
      <Stack spacing={2} className="pagination-container">
        <Pagination
          count={2}
          page={page}
          onChange={(_, value) => setPage(value)}
          className="pagination"
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
};

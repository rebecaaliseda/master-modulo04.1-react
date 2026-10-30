import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './rickmorty.scss';
import { CharacterEntity, getCharacters } from '../api/rickmorty.api';
import { CharacterCard } from '../components/character-card';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  origin: { name: string };
  gender: string;
  location: { name: string };
}

export const RickMortyPage: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [search, setSearch] = React.useState('');
  const [debouncedSearch, setDebouncedSearch] = React.useState(search);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  React.useEffect(() => {
    const loadCharacters = async () => {
      const data = await getCharacters(page, debouncedSearch);

      const limitedResults = data.results ? data.results.slice(0, 6) : [];

      setCharacters(limitedResults);
      setTotalPages(data.info?.pages || 1);
    };

    loadCharacters();
  }, [debouncedSearch, page]);

  return (
    <Box className="rickmorty-container">
      {}
      <Box className="nav-github">
        <Button variant="contained" component={Link} to="/list" className="github-button">
          Volver a Miembros GitHub
        </Button>
      </Box>

      <Typography variant="h4" className="rickmorty-title">
        Personajes de Rick & Morty
      </Typography>

      <Box className="search-container">
        <TextField
          label="Buscar personaje"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" className="search-button">
          Buscar
        </Button>
      </Box>

      <Grid2 container spacing={2}>
        {characters.map((char) => (
          <Grid2 xs={12} sm={6} md={4} key={char.id}>
            <CharacterCard character={char} />
          </Grid2>
        ))}
      </Grid2>

      {}
      <Stack spacing={2} className="pagination-container">
        <Pagination
          count={totalPages}
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

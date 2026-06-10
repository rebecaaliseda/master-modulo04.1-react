import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './rickmorty.scss';

interface CharacterDetail {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  origin: { name: string };
  gender: string;
  location: { name: string };
}

export const RickMortyDetailPage: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState<CharacterDetail | null>(null);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <p>Cargando...</p>;

  return (
    <Box className="detail-container">
      <Card className="detail-card">
        <CardMedia
          component="img"
          height="400"
          image={character.image}
          alt={character.name}
          className="detail-image"
        />
        <Box className="detail-content">
          <Typography variant="h4" className="detail-title">
            {character.name}
          </Typography>
          <Typography variant="body1">
            {character.status} - {character.species}
          </Typography>
          <Typography variant="body2">Origen: {character.origin.name}</Typography>
          <Typography variant="body2">Género: {character.gender}</Typography>
          <Typography variant="body2">Ubicación: {character.location.name}</Typography>

          <Button variant="contained" component={Link} to="/rickmorty" className="back-button">
            VOLVER
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

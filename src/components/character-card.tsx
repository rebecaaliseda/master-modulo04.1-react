import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { CharacterEntity } from '../api/rickmorty.api';

interface Props {
  character: CharacterEntity;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <Card className="character-card">
      <CardMedia component="img" height="300" image={character.image} alt={character.name} />

      <Box className="character-overlay">
        <Typography variant="h6">{character.name}</Typography>

        <Typography variant="body2">
          {character.status} - {character.species}
        </Typography>

        <Typography variant="body2">Origen: {character.origin.name}</Typography>

        <Typography variant="body2">Género: {character.gender}</Typography>

        <Typography variant="body2">Ubicación: {character.location.name}</Typography>

        <Button
          variant="outlined"
          component={Link}
          to={`/rickmorty/${character.id}`}
          className="card-button"
        >
          Detalle
        </Button>
      </Box>
    </Card>
  );
};

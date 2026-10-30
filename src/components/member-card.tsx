import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { MemberEntity } from '../api/github.api';

interface Props {
  member: MemberEntity;
}

export const MemberCard = ({ member }: Props) => {
  return (
    <Card className="member-card">
      <CardMedia component="img" height="260" image={member.avatar_url} alt={member.login} />

      <Box className="card-overlay">
        <Typography variant="h6" className="card-title">
          {member.login.toUpperCase()}
        </Typography>

        <Typography variant="body2">{member.id}</Typography>

        <Button
          variant="outlined"
          className="card-button"
          component={Link}
          to={`/detail/${member.login}`}
        >
          MORE
        </Button>
      </Box>
    </Card>
  );
};

// src/components/Card.js
import * as React from 'react';
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Avatar, IconButton, Typography
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function RecipeReviewCard({ title, subheader, image, description }) {

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{title[0]}</Avatar>}
        action={<IconButton><MoreVertIcon /></IconButton>}
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
        <IconButton aria-label="share"><ShareIcon /></IconButton>
      </CardActions>
    </Card>
  );
}

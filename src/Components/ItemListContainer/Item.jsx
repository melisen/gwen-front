import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Item.css";
import {Link} from 'react-router-dom';







export default function Item( {_id, title, price, thumbnail}) {

  return (

    <Card sx={{ width: 250 }} className="cardArticulo">
      <CardMedia
        sx={{ height: 140, objectFit:'contain' }}
        image={thumbnail}
        title={title}
        component='img'
        className="cardImage"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='primary.main' style={{fontFamily: 'Modern Antiqua'}}>
        {title.toUpperCase()}
        </Typography>
        <Typography variant="body2" color='primary.light'>
        ${price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" color="secondary">
          <Link to={`/item/${_id}`} style={{ color: 'inherit', textDecoration: 'none' }} ><p color='secondary' > Ver Detalle</p></Link>
          </Button>
      </CardActions>
    </Card>
  );
}
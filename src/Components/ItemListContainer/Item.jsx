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

    <Card sx={{ width: 210 }} className="cardArticulo">
      <CardMedia
        sx={{ height: 120, objectFit:'contain' }}
        image={thumbnail}
        title={title}
        component='img'
        className="cardImage"
        
      />
      <CardContent sx={{py:0}}>
        <Typography gutterBottom variant="h5" component="div" color='primary.main' style={{fontFamily: 'Modern Antiqua', height:60, marginTop:5}}>
        {title.toUpperCase()}
        </Typography>
        <Typography variant="body1" color='primary.light'>
        $ {price}
        </Typography>
      </CardContent>
      <CardActions style={{position:'relative', left:'0', bottom:'0', right:'0', paddingTop:'0'}} >
      <Button size="small" color="secondary">
          <Link to={`/item/${_id}`} style={{ color: 'inherit', textDecoration: 'none' }} ><p color='secondary' > Ver Detalle</p></Link>
          </Button>
      </CardActions>
    </Card>
  );
}
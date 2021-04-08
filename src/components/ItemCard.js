import { Card, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 250,
    width: 300,
    backgroundSize: 'contain',
    borderBottom: '1px solid #DED9E2',
  },
  primaryText: {
    fontSize: '2rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '153306'
  },
  secondaryText: {
    fontSize: '1rem',
    color: 'red',
    fontFamily: 'Roboto',
    color: '112905',
  },
  cartBtn: {
    backgroundColor: '#729b79',
    color: '#f7f4ea',
    transition: 'all .3s',
    '&:hover': {
      backgroundColor: '#f7f4ea',
      color: '#112905',
      border: '1px solid #112905'
    }
  }

});

function ItemCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} raised={true}>
      <CardMedia className={classes.media} image={props.image} title="product listing image" />
      <CardContent>
        <Typography className={classes.primaryText}>{props.title}</Typography>
        <Typography className={classes.secondaryText}>{props.description}</Typography>
        <Button className={classes.cartBtn}>Add to Cart</Button>
      </CardContent>
    </Card>
  )
}

export default ItemCard;
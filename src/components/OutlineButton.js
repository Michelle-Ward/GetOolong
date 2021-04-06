import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#112905',
    borderRadius: 3,
    border: '#f7f4ea solid 1px',
    color: '#f7f4ea',
    height: 48,
    padding: '0 30px',
    transition: 'all .3s',
    '&:hover': {
      backgroundColor: '#f7f4ea',
      color: '#112905',
    }
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function OutlineButton(props) {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      {props.text === 'Sign In / Create Account'? <PersonIcon /> : ''}
      {props.text === 'Cart'? <LocalMallIcon /> : ''}
      {props.text}
    </Button>
  );
}
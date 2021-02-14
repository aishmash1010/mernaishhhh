import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    background:'rgba(11, 57, 133)',
    font: 'Corben',// Georgia, Times, serif,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  heading: {
    font: 'Corben',
    color: 'white',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{
  mainContainer: {
    flexDirection: 'column-reverse',
  }}

}));
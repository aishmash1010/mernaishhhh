import React,{ useState,useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid,Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';


import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts} from './actions/posts';

import useStyles from './styles';
import memories from './images/memories.jpeg';
import fun from './images/fun.jpg';
/**
 * App js is the main file of our application responsible for showing all the data retrieved from rest api on the frontend.
 * Contains internal elements of separately defined posts and form.js
 */
const App = () => {
    const [currentId,setCurrentId] = useState(null);
    const classes =useStyles();
    const dispatch =useDispatch();
    const refreshPage = ()=>{
        window.location.reload();
     }

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);
      
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="primary">
            <img className={classes.image} src={fun} alt="memories" height="60"/>
                <Typography variant="h2" align="center" font='Georgia' >Memes-App</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Button variant="contained" color="primary" onClick={refreshPage} disableElevation>  Latest Ten Memes</Button>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                            
                    </Grid>
                    <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                       
                    </Grid>
                        
                        
                        
                    </Grid>
                </Container>
            </Grow>
             
        </Container>
    );
}

export default App;
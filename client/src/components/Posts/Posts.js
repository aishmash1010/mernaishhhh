import React from 'react';
import {Grid, CircularProgress } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles';

/**
 * Posts are displayed by each element being an individual post
 * An array of post is called and displayed by mapping.
 */
const Posts = ({ setCurrentId}) => {
    const posts = useSelector((state)=> state.posts );
    const classes = useStyles();
    
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) =>(
               
               <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid> 

            ))}
            </Grid>
        )
    );
}

export default Posts;
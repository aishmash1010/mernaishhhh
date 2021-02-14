import React,{ useState , useEffect} from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch} from 'react-redux';
import { useSelector} from 'react-redux';

import useStyles from './styles';
import {createPost,updatePost} from '../../actions/posts';

/**
 * The code for form element of our website
 * also calls functions to call create and update post api from actions and calls them on click
 */

const Form = ({currentId,setCurrentId}) => {
    const [postData, setPostData] = useState({creator: '', caption: '', memeurl:''});
    const post = useSelector((state)=> (currentId ? state.posts.find((p) => p._id=== currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();
    const clear =() =>{
        setCurrentId(null);
        setPostData({creator: '', caption: '', memeurl:''});

    };
    useEffect(()=>{
        if(post) setPostData(post);
    },[post]);
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === null) {
          dispatch(createPost(postData));
          clear();
        } else {
          dispatch(updatePost(currentId, postData));
          clear();
        }
      };
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId? 'Editing' :'Create meme post'}</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value })}  />
            <TextField name="caption" variant="outlined" label="Caption" fullWidth value={postData.caption} onChange={(e)=> setPostData({...postData, caption: e.target.value })}  />
            
            <TextField name="memeurl" variant="outlined" label="Meme url" fullWidth value={postData.memeurl} onChange={(e)=> setPostData({...postData, memeurl: e.target.value })}  />
            <div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth value >Submit</Button>
                <Button variant="contained" color="primary" size="small" onClick={clear} fullWidth value>Clear</Button>

            </div>
            </form>

        </Paper>
    );
}

export default Form;
            

            
    



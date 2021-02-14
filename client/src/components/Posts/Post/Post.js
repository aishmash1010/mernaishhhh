import React from 'react';
import { Card, CardActions , CardContent, CardMedia, Button, Typography, requirePropFactory} from '@material-ui/core'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz' 
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
/**Defines individual post frontend
 * Each post is in form of a flexbox card
 * We have the code to load meme image here
 * Can edit any meme by clicking on edit button
 */

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const url = post.memeurl;
    return (
        <Card className={classes.card}>
      <CardMedia className={classes.media} square image={url} title={post.caption} />
          
            
            <div className={classes.overlay}>
         
                <Typography variant="body2">{moment(post.createAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'black'}} size="small" onClick={() =>setCurrentId(post._id)}>
                    edit
                </Button>
            </div>
            <CardContent>
                <Typography variant="h6" color="textSecondary" component="p">{post.creator}</Typography>
            </CardContent>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.caption}</Typography>
            

            
        </Card>
    );
}

export default Post;
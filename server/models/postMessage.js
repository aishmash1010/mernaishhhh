import mongoose from 'mongoose';
/**
 * This file defines the schema all our data will have, specifies their types also.
 */
const postSchema = mongoose.Schema(
    {
        
        creator: String,
        caption: String,
        memeurl:String,
        
        createAt : { type : Date, default: Date.now }
    }
);
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
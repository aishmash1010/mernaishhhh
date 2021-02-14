import axios from 'axios';
/**
 * WE are connecting to the backend from here by providing url of backend server
 *
 */
//const url = 'http://localhost:5000/memes';
const url = 'https://aishmeme.herokuapp.com/memes';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url,newPost);
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);


import express from 'express';
import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js';

const router = express.Router();
/**
 * MEmes controller has all functionality to return required rest api feedback
 * by connecting to db and editing according to our requirements and sends http response and also json object.
 *
 * It contains of getMemes to fetch top 10 memes
 * Contains createMEme to make new meme
 * Contains UpdateMeme to update existing meme by id 
 * contains getMEmebyID to get corresponding id meme
 */
export const getMemes = async (req,res) => {
    try{
        const { id } = req.params;
         
        
        //postMessages =postMessages.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
        const postMessages = await PostMessage.find({}).sort({createAt: 'desc'}).limit(10);
    
        res.status(200).json(postMessages);

    }
    catch(error)
    {
        res.status(404).json({ message: error.message });

    }
    
}

export const createMeme = async(req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);

    }
    catch(error)
    {
        res.status(409).json({message: error.message});

    }
}

export const updateMeme = async (req, res) => {
    const { id } = req.params;
    const { creator, caption , memeurl} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, caption, memeurl, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const getMemeById = async (req, res) => {
    
    const { id } = req.params;
    
    try {
        const meme = await PostMessage.findById(id);
        
        res.status(200).json(meme);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
  };

export default router;
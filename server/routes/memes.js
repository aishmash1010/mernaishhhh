import express from 'express';
import { getMemes, createMeme , updateMeme,getMemeById} from '../controllers/memesController.js'
const router = express.Router();
/**
 * All Endpoints for our rest api are defined here 
 * They are edited in memesConroller
 * 
 */
router.get('/',getMemes );
router.post('/',createMeme);
router.patch('/:id',updateMeme)
router.get('/:id',getMemeById)

export default router;
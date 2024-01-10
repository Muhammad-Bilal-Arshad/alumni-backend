import express from 'express';
import {upload} from "../middleware/multer.js"
import { welcomeuser, adduser, showusers } from '../controllers/UserController.js';

const router = express.Router();


router.get('/welcome', welcomeuser);
router.get('/show', showusers);
router.post('/adduser', upload.single('image'), adduser);

export default router;

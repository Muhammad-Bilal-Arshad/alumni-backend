import express from 'express';
import {welcomeuser,adduser,showusers} from '../controllers/UserController.js'
const router = express.Router();


router.get('/welcome',welcomeuser)
router.get('/show',showusers)
router.post('/adduser',express.json(), adduser)

export default router;
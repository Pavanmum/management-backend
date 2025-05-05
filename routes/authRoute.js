import express from 'express';
import { addUsers, authenticateDetails, deleteUser, forgotPassword, getUsers, login, logout, register, updateUser, verifyOtp } from '../controllers/authController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/register", register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgotPassword',forgotPassword)
router.post('/verifyOtp', verifyOtp);
router.post('/adduser',authenticate, addUsers);
router.put('/updateUser', authenticate, updateUser)
router.get('/getUsers',authenticate,getUsers)
router.delete('/deleteUser',authenticate,deleteUser)
router.get('/profileDetails', authenticate,authenticateDetails)


export default router;
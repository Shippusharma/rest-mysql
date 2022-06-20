'use strict';
import express from 'express';
import UserController from '../components/user/UserController';

const router = express.Router();

router.post('/create-table', UserController?.creatingNewUserTable);

router.post('/insert', UserController?.insertingNewUser);

router.get('/users', UserController?.getAllUsers);

router.get('/:id', UserController?.getUser);

export default router;

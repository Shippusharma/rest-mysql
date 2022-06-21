'use strict';
import express from 'express';
import UserController from '../components/user/UserController';

const router = express.Router();

router.post('/create-table', UserController?.creatingNewUserTable);

router.post('/insert', UserController?.insertingNewUser);

router.get('/users', UserController?.getAllUsers);

router.get('/:id', UserController?.getUser);

//? //////////////////////////////// User Event/////////////////////////////////////////////////

router.post('/event/create-table', UserController?.creatingNewUserEventTable);

router.post('/event/insert/:id', UserController?.insertingNewUserEvent);

export default router;

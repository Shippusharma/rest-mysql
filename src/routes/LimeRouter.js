'use strict';
import express from 'express';
// import Auth from '../middleware/Auth';
import LimeController from '../components/liam_platform/LimeController';

const router = express.Router();

router.get('/assets', LimeController?.RetrieveEvents);

router.get('/all', LimeController?.getAllData);

router.get('/:id', LimeController?.getById);

router.put('/:id', LimeController?.updateById);

router.post('/:id', LimeController?.deleteById);

router.post('/insert', LimeController?.InsertingNewData);

export default router;

'use strict';
import express from 'express';
import DummyController from '../components/DummyData/DummyController';

const router = express.Router();

router.post('/create-table', DummyController?.creatingNewTable);

router.post('/insert', DummyController?.insertingNewData);

router.post('/obj', DummyController?.objNewData);

export default router;

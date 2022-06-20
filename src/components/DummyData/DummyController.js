'use strict';
import { db } from '../../server';
import DummyModel from './DummyModel';

export default {
  creatingNewTable: async (req, res) => {
    const { tableName } = req.body;
    if (!tableName) throw res.status(400).send('please, give the required Data');
    try {
      const tableData = db.query(DummyModel?.creatingTable(tableName), async (err, result) => {
        if (err) throw new Error(err.message);
        console.log('<|> Create a Table <|>', result);
      });
      return res.status(200).json({ payload: tableData?.sql, message: 'Created a Table' });
    } catch (error) {
      return new Error(error.message);
    }
  },

  insertingNewData: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    try {
      if (!firstName || !lastName) throw res.status(400).send('Please provide the required Field!');
      const insertedData = db.query(DummyModel?.insertedData(firstName, lastName, age), (err, result) => {
        if (err) throw new Error(err.message);
        console.log('1 record inserted', result);
      });

      return res.status(201).json({ payload: insertedData.sql, message: 'Data Inserted Successfully!!!' });
    } catch (error) {
      return new Error(error.message);
    }
  },

  objNewData: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    try {
      if (!firstName || !lastName) throw res.status(400).send('Please provide the required Field!');
      const Sql = [[firstName, lastName, age]];

      const insertedData = db.query(DummyModel?.objData(), [Sql], (err, result) => {
        if (err) throw new Error(err.message);
        console.log('1 record inserted', result);
      });

      return res.status(201).json({ payload: insertedData.sql, message: 'Data Inserted Successfully!!!' });
    } catch (error) {
      return new Error(error.message);
    }
  },
};

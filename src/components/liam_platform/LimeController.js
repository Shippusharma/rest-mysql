'use strict';
import 'dotenv/config';
import axios from 'axios';
// import GlobalController from '../../utils/GlobalController';
import { db } from '../../server';
import LimeModel from './LimeModel';

// const account_address = '0x51CEB58dd6f321E5d62Cc1F0e2A4a10DD3bCA93E';
// const event_type = 'successful';
// const limit = 1;
//https://testnets-api.opensea.io/api/v1/events?account_address=0x51CEB58dd6f321E5d62Cc1F0e2A4a10DD3bCA93E&event_type=successful&only_opensea=false&limit=2

export default {
  RetrieveEvents: async (req, res) => {
    const { account_address, event_type, limit } = await req.query;
    try {
      const response = await axios.get(
        `https://testnets-api.opensea.io/api/v1/events?account_address=${account_address}&event_type=${event_type}&only_opensea=false&limit=${limit}`
      );

      return res.status(200).json({ payload: response?.data?.asset_events, message: 'fetching succesfull' });
    } catch (error) {
      return new Error(error.message);
    }
  },

  getAllData: async (req, res) => {
    try {
      db.query(LimeModel?.allData(), async (err, result) => {
        if (err) throw new Error(err.message);
        return res.status(200).json({ payload: await result, message: 'Fetching All Data!' });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },

  getById: async (req, res) => {
    const { id } = await req.params;
    if (!parseInt(id)) throw res.status(400).send('Invalid Credential');
    try {
      db.query(LimeModel?.findById(id), async (err, result) => {
        if (err) throw new Error(err.message);
        return res.status(200).json({ payload: await result, message: 'Fetching Data!' });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },

  updateById: async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    if (!parseInt(id)) throw res.status(400).send('Invalid Credential');
    try {
      db.query(LimeModel?.findByIdAndUpdate(id, name, age), async (err, result) => {
        if (err) throw new Error(err.message);
        return res.status(200).json({ payload: await result, message: 'Updated Data !!' });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },

  deleteById: async (req, res) => {
    const { id } = req.params;
    if (!parseInt(id)) throw res.status(400).send('Invalid Credential');
    try {
      db.query(LimeModel?.findByIdAndDelete(id), async (err, result) => {
        if (err) throw new Error(err.message);
        return res.status(200).json({ payload: await result, message: 'Deleted Data!!' });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },

  // InsertingNewData: async (req, res) => {
  //   const { name, age } = req.body;
  //   if (!name || !age) throw res.status(400).send('Please provide required Field!');
  //   try {
  //     const insertedData = db.query(LimeModel?.insertedData(name, age), (err, result) => {
  //       if (err) throw new Error(err.message);
  //       console.log('1 record inserted', result);
  //     });

  //     return res.status(201).json({ payload: insertedData.sql, message: 'Data Inserted Successfully!!!' });
  //   } catch (error) {
  //     return new Error(error.message);
  //   }
  // },
};

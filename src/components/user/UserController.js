'use strict';
import { db } from '../../server';
import UserModel from './UserModel';

export default {
  creatingNewUserTable: async (req, res) => {
    const { tableName } = req.body;
    if (!tableName) return res.status(400).send('please, give the required Data');
    try {
      const tableData = db.query(UserModel?.creatingNewTable(tableName), async (err, result) => {
        if (err) return new Error(err.message);
        console.log('<|> Create a Table <|>', result);
      });
      return res.status(200).json({ payload: tableData?.sql, message: 'Created a Table' });
    } catch (error) {
      return new Error(error.message);
    }
  },

  insertingNewUser: async (req, res) => {
    const {
      owner,
      assets_id,
      assets_image_url,
      assets_name,
      assets_description,
      asset_contract_address,
      asset_contract_created_date,
      asset_contract_name,
      asset_contract_schema_name,
      asset_contract_description,
      asset_contract_external_link,
      asset_contract_image_url,
      asset_contract_payout_address,
      permalink,
      collection_banner_image_url,
      collection_created_date,
      collection_description,
      collection_slug,
      token_metadata,
      creator_address,
      token_id,
    } = req.body;

    const SQL = [
      [
        owner,
        assets_id,
        assets_image_url,
        assets_name,
        assets_description,
        asset_contract_address,
        asset_contract_created_date,
        asset_contract_name,
        asset_contract_schema_name,
        asset_contract_description,
        asset_contract_external_link,
        asset_contract_image_url,
        asset_contract_payout_address,
        permalink,
        collection_banner_image_url,
        collection_created_date,
        collection_description,
        collection_slug,
        token_metadata,
        creator_address,
        token_id,
      ],
    ];
    try {
      const insertedData = db.query(UserModel?.insertedNewData(), [SQL], (err, result) => {
        if (err) return new Error(err.message);
        console.log('1 record inserted', result);
      });

      return res.status(201).json({ payload: insertedData.sql, message: 'Data Inserted Successfully!!!' });
    } catch (error) {
      return new Error(error.message);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      db.query(UserModel?.allUserData(), async (err, result) => {
        if (err) return new Error(err.message);
        return res.status(200).json({ payload: await result, message: 'Fetching All Users!' });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },

  getUser: async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).send('Invalid Credential');
    try {
      db.query(UserModel?.findById(id), (err, result) => {
        if (err) throw new Error(err.message);
        return res.status(200).json({ payload: result, message: 'Fetching User!' });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },
};

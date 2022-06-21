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
      return res.status(200).json({ message: 'Created a Table', payload: tableData?.sql });
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

      return res.status(201).json({ message: 'Data Inserted Successfully!!!', payload: insertedData.sql });
    } catch (error) {
      return new Error(error.message);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      db.query(UserModel?.allUserData(), async (err, result) => {
        if (err) return new Error(err.message);
        return res.status(200).json({ message: 'Fetching All Users!', payload: await result });
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
        return res.status(200).json({ message: 'Fetching User!', payload: result });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },

  //? //////////////////////////////// User Event/////////////////////////////////////////////////

  creatingNewUserEventTable: async (req, res) => {
    try {
      const tableData = db.query(UserModel?.createNewEventTable(), async (err, result) => {
        if (err) return new Error(err.message);
        console.log('<|> Create a UserEvent Table <|>', result);
      });
      return res.status(200).json({ message: 'Created a UserEvent Table', payload: tableData?.sql });
    } catch (error) {
      return new Error(error.message);
    }
  },

  insertingNewUserEvent: async (req, res) => {
    const { id } = req.params;
    const {
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
      total_price,
      seller_address,
      winner_address,
    } = req.body;
    if (!id) return res.status(400).send('Invalid Credential');
    try {
      db.query(`SELECT * FROM UserAssets WHERE userId=${id}`, (err, result) => {
        if (err) return new Error(err.message);

        const SQL = [
          [
            result[0].userId,
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
            total_price,
            seller_address,
            winner_address,
          ],
        ];
        const insertedData = db.query(UserModel?.insertNewEventData(), [SQL], (err, result) => {
          if (err) return new Error(err.message);
          console.log('1 record inserted', result);
        });

        return res.status(201).json({ message: 'Event Data Inserted Successfully!!!', payload: insertedData.sql });
      });
    } catch (error) {
      return new Error(error.message);
    }
  },
};

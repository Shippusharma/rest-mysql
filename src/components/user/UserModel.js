'use strict';

export default {
  creatingNewTable: (table) => {
    return `CREATE TABLE [IF NOT EXISTS] ${table} (id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
                owner varchar(255) NOT NULL,
                assets_id int NOT NULL,
                assets_image_url varchar(255),
                assets_name varchar(255),
                assets_description TEXT,
                asset_contract_address varchar(255) NOT NULL,
                asset_contract_created_date DATE,
                asset_contract_name varchar(255),
                asset_contract_schema_name varchar(255),
                asset_contract_description TEXT,
                asset_contract_external_link varchar(255),
                asset_contract_image_url varchar(255),
                asset_contract_payout_address varchar(255),
                permalink varchar(255),
                collection_banner_image_url varchar(255),
                collection_created_date DATE,
                collection_description TEXT,
                collection_slug varchar(255),
                token_metadata varchar(255),
                creator_address varchar(255),
                token_id int
    )`;
  },

  insertedNewData: () => {
    return `INSERT INTO UserAssets (
                owner,
                assets_id ,
                assets_image_url ,
                assets_name ,
                assets_description ,
                asset_contract_address ,
                asset_contract_created_date ,
                asset_contract_name ,
                asset_contract_schema_name ,
                asset_contract_description ,
                asset_contract_external_link ,
                asset_contract_image_url ,
                asset_contract_payout_address ,
                permalink ,
                collection_banner_image_url ,
                collection_created_date ,
                collection_description ,
                collection_slug ,
                token_metadata ,
                creator_address ,
                token_id 
        ) VALUES ?`;
  },

  allUserData: () => {
    return 'SELECT * FROM UserAssets';
  },

  findById: (id) => {
    return `SELECT * FROM UserAssets WHERE id=${id}`;
  },
};

/* 
    (
        '${owner}',
        ${assets_id},
        '${assets_image_url}',
        '${assets_name}',
        '${assets_description}',
        '${asset_contract_address}',
        '${asset_contract_created_date}',
        '${asset_contract_name}',
        '${asset_contract_schema_name}',
        '${asset_contract_description}',
        '${asset_contract_external_link}',
        '${asset_contract_image_url}',
        '${asset_contract_payout_address}',
        '${permalink}',
        '${collection_banner_image_url}',
        '${collection_created_date}',
        '${collection_description}',
        '${collection_slug}',
        '${token_metadata}',
        '${creator_address}',
        ${token_id} 
    )

*/

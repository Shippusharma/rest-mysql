'use strict';

export default {
  creatingTable: (table) => {
    return `CREATE TABLE ${table} (PersonId int NOT NULL AUTO_INCREMENT,PRIMARY KEY (Personid),FirstName varchar(255) NOT NULL, LastName varchar(255) , Age int)`;
  },

  insertedData: (firstName, lastName, age) => {
    return `INSERT INTO Persons (FirstName,LastName, Age) VALUES ('${firstName}','${lastName}',${age})`;
  },

  objData: () => {
    return 'INSERT INTO Persons (FirstName,LastName, Age) VALUES ?';
  },
};

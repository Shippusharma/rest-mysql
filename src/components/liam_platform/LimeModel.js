// import GlobalController from '../../utils/GlobalController';

export default {
  insertedData: (name, age) => {
    const randomId = Math.floor(Math.random() * 1000);
    // const randomId = GlobalController.RandomNumber(1000);
    return `INSERT INTO Dummy (id, name, age) VALUES (${randomId},'${name}',${age})`;
  },

  allData: () => {
    return 'SELECT * FROM Dummy';
  },

  findById: (id) => {
    return `SELECT * FROM Dummy WHERE id=${id}`;
  },

  findByIdAndUpdate: (id, name, age) => {
    return `UPDATE Dummy SET name='${name}', age=${age} WHERE id=${id}`;
  },

  findByIdAndDelete: (id) => {
    return `DELETE FROM Dummy WHERE id=${id}`;
  },
};

/*

SELECT * FROM Dummy
LIMIT 3;

SELECT * FROM Dummy
ORDER BY Country; 

SELECT COUNT(column_name)
FROM Dummy
WHERE condition;
*/

// const randomId = Math.floor(Math.random() * 1000);

export default {
  // insertedData: (name, age) => {
  //   return `INSERT INTO Dummy (name, age) VALUES ('${name}',${age})`;
  // },

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

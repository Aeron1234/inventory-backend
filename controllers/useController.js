const connection = require("../config/db");

exports.getAllProducts = (req, res) => {
  const query = `
        SELECT * FROM inventory
    `;
  connection.query(query, (err, rows, fields) => {
    if (err) throw err;

    res.json(rows);
  });
};
exports.createProduct = (req, res) => {
  const { productName, category, stockCount, locationCode } = req.body;

  const query = `
        INSERT INTO inventory (productName, category, stockCount, locationCode)
        VALUES (?, ?, ?, ?)
    `;

  connection.query(
    query,
    [productName, category, stockCount, locationCode],
    (err, result) => {
      if (err) throw err;

      res.json({
        message: "product created successfully",
        userId: result.insertId,
      });
    },
  );
};

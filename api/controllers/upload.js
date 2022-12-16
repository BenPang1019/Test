import { db } from "../db.js";


export const upload = (req, res) => {
  //CHECK EXISTING USER
  // const q = "SELECT * FROM book WHERE firstName = ?";

  // db.query(q, [req.body.username], (err, data) => {
  //   if (err) return res.status(500).json(err);
  //   if (data.length) return res.status(409).json("User already exists!");

    const q = "INSERT INTO upload(`productName`,`price`,`description`,`specs`,`category`,`image`) VALUES (?)";
    const values = [
      req.body.productName, 
      req.body.price,
      req.body.description, 
      req.body.specs,  
      req.body.category,  
      req.body.image,  
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(data);
      return res.status(200).json("Product has been created.");
    });
  // });
};

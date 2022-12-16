import { db } from "../db.js";


export const getProduct = (req, res)=>{
    const q = "SELECT * FROM product";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err);
    
        return res.status(200).json(data) ;
      });
};
 
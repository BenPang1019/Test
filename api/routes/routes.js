import express from "express"
import { getProduct } from "../controllers/getProduct.js";
import {upload} from '../controllers/upload.js'


const router = express.Router()

router.post("/upload", upload);
router.get("/getProduct", getProduct);


export default router
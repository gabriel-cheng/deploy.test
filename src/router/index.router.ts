import controller from "../controller/index.controller";
import * as express from "express";
const router = express.Router();

router.get("/", controller.index);

export default router;
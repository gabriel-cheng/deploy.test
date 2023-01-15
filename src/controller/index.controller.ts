import express from "express";

export default {
    index: (req: express.Request, res: express.Response) => {
        res.json({message: "Hello, world!"});
    }
};
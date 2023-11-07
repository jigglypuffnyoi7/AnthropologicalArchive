import express, { Request, Response } from 'express'
const articleController = require('../controllers/articleController')

const router = express.Router();

//route to populate homepage
router.get('/home', (_req:Request, _res:Response) => {

})

//route to grab an article's content

//route to update an article's content

module.exports = router;
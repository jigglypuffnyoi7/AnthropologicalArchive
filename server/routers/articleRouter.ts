import express, { Request, Response } from 'express'
const articleController = require('../controllers/articleController')

const router = express.Router();

//route to populate homepage
router.get('/home', articleController.getHome,  (req:Request, res:Response) => {
    return res.status(200).json(res.locals.titles);
})

//route to grab an article's content
router.get('/view/:title', articleController.getArticle, (req:Request, res:Response) => {
    return res.status(200).json(res.locals.article);
})

//route to add an article
router.post('/add', articleController.addArticle, (req:Request, res: Response) => {
    res.status(200).send('Added successfully')
})

//route to update an article's content
router.put('/update', articleController.updateArticle, (req:Request, res: Response) => {
    res.status(200).send('Updated successfully')
})

module.exports = router;
const db = require('../database/model.ts')
import express, { Request, Response, NextFunction } from 'express'


const articleController = {
    
    getHome: async function(req: Request, res: Response, next: NextFunction) {
        //query db for a handful of random topics
    
        try{
            const data = await db.query('SELECT title FROM articles');
            console.log('data', data.rows)
            // const result = await data.rows.json();
            // console.log('result: ', result);
            // //select titles at random??
            res.locals.titles = data.rows;
            return next();
        } catch (err) {
            return next(err);
        }
    },

    getArticle: async function(req: Request, res: Response, next: NextFunction) {
        const { title } = req.params;
        const query = 'SELECT * FROM articles WHERE title = $1';
        
        try{
            const data = await db.query(query, [title]);
            console.log('data', data.rows[0])
            // const result = await data.json();
            // console.log('result', result)

            res.locals.article = data.rows[0];
            return next();
        } catch (err) {
            return next(err);
        }
    },

    /*{
        title: string
        author: string
        content: [{header: string, text: string}]
    }*/
    
    addArticle: async function(req: Request, res: Response, next: NextFunction) {
        const query = 'INSERT INTO articles (title, author, content) VALUES ($1, $2, $3)'
        const { title, author, content } = req.body;
        
        const values = [title, author, JSON.stringify(content)]
        console.log('content', JSON.stringify(content))
        try{
            const data = await db.query(query, values);
            // console.log('data: ', data);
    
            return next();
        }catch(err){
            return next(err);
        }
    },

    updateArticle: async function(req: Request, res: Response, next: NextFunction) {
        const query = 'UPDATE articles SET author = $2, content = $3 WHERE title = $1'
        const { title, author, content } = req.body;
        const values = [title, author, content]

        try{
            const data = await db.query(query, values);
            console.log('data: ', data);
    
            return next();
        }catch(err){
            return next(err);
        }
    }
}





module.exports = articleController;
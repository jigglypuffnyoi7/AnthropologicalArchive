import React from 'react';
import Section from './Section';
import { useEffect } from 'react';

const Article = ({ articleData } : any) => {  

   let contentArr = [];
   
   articleData.content ? contentArr = JSON.parse(articleData?.content) : contentArr = []




    console.log(contentArr);

    type ContentObj = {
        heading: String,
        text: String
    }



    const sections = contentArr.map((obj: ContentObj) => {
        return (
        <div>
          {/* <Section info={obj}/> */}
          <h1>{obj.heading}</h1>
          <p>{obj.text}</p>
        </div>
        )
    })


    return (
        <>
        <div className='article-container'>
          <div className='article'>
          <div className='articleTitle'>
            <h1 className='articleh1'>{articleData.title}</h1> 
            <p>{articleData.author}</p>

          
          </div>
          <button>edit</button>

          {sections}
          </div>
          </div>
        </>
    )
};

export default Article;
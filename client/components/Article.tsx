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
          <Section info={obj}/>
        </div>
        )
    })


    return (
        <>
          Hi from article component
          <div className='articleTitle'>{articleData.title}</div>
          <div className='articleAuthor'>{articleData.author}</div>
          {sections}
        </>
    )
};

export default Article;
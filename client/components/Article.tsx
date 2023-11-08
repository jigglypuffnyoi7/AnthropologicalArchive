import React from 'react';
import Section from './Section';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Article = ({ articleData } : any) => { 
  const navigate = useNavigate(); 

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

    const onEditClick = () => {
       navigate(`/edit/${articleData.title}`)
    }


    return (
        <>
          <h1 className='articleTitle'>{articleData.title}</h1>
          <button onClick={onEditClick}>edit</button>
          <h2 className='articleAuthor'>{articleData.author}</h2>
          {sections}
        </>
    )
};

export default Article;
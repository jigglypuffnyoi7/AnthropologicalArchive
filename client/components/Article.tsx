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
          <h2>{obj.heading}</h2>
          <p style={{fontSize: '25px'}}>{obj.text}</p>
          <hr></hr>
        </div>
        )
    })

    const onEditClick = () => {
       navigate(`/edit/${articleData.title}`)
    }


    return (
        <>
        <div className='article-container'>
          <div className='article'>
          <div className='articleTitle'>
            <h1 className='articleh1'>{articleData.title}</h1> 
            <p className='articleauthor'>By {articleData.author}</p>


          
          </div>
          <button onClick={onEditClick}>edit</button>

          {sections}
          </div>
        </div>
        </>
    )
};

export default Article;
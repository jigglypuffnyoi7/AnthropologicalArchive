import React from 'react';
import Section from './Section';

import { useEffect } from 'react';

const Article = (props: any) => {

  

  useEffect(() => {
    getArticle();
  }, [])

  

  

  const getArticle = async () => {
  const response = await fetch('http://localhost:3000/article/view/Snacks')
  const data = await response.json()
  console.log(data)
  }

  useEffect(() => {
    getArticle();
  }, [])


    const Cobj = {
        heading: 'why i like snacks',
        text: 'they are very good and tastey'
    }



    type ContentObj = {
        heading: String,
        text: String
    }


    const sections = [Cobj].map((obj: ContentObj) => {
        return (
        <div>
          <Section info={obj}/>
        </div>
        )
    })


    return (
        <>
          Hi from article component
          <div className='articleTitle'>{props.title}</div>
          {sections}
        </>
    )
};

export default Article;
import React from 'react';
import { useEffect } from 'react';

const Article = () => {

  const getArticle = async () => {
  const response = await fetch('http://localhost:3000/article/view/Snacks')
  const data = await response.json()
  console.log(data)
  }

  useEffect(() => {
    getArticle();
  }, [])


    return(
        <>
          Hi from article component
        </>
    )
};

export default Article;
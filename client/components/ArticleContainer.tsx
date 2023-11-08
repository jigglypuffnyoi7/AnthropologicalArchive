import React from 'react';
import Article from './Article';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ArticleContainer = (props: any) => {
    const [articleData, setArticleData] = useState({});
    const param = useParams();
  
    
    const getArticle = async () => {
        const response = await fetch(`/api/article/view/${param.title}`)
        const data = await response.json();
        setArticleData(data);
        console.log(data)
    }
    
    useEffect(() => {getArticle()}, [param.title])


  return (
    <>
     <Article articleData={articleData}/>
    </>
  )

}


export default ArticleContainer;
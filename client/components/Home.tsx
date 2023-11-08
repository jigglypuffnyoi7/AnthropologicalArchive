import React from 'react';
import Article from './Article';
import MakePageForm from './MakePageForm';
import { useState, useEffect } from 'react';
import  { Link } from 'react-router-dom';

const Home = () => {
const [titles, setTitles] = useState<string[]>([])
const [content, setContent] = useState<string[]>([])

  const getHome = async () => {
    const response = await fetch('/api/article/home')
    //update state 
    const data = await response.json()
    setTitles(data.map((obj:any) => obj.title))
    // setContent(data.map((obj: any) => obj.content))
  }

  useEffect(() => {
    getHome();
  }, [])

  console.log(titles)
    // query to get names all the name of articles
    // const response = ['snacks', 'temperature', 'relay race']



    const ArticleLinks = titles.map(title => {
        return (
            <li id={title}>
              <Link to={`article/${title}`}>{title}</Link> 
            </li>
        )
    })


    return(
        <>

    <h1>HELLO WORLD</h1>
    <p>THIS IS A HELLO WORLD STATEMENT</p>
          <ul>
            {ArticleLinks}
          </ul>    
        </>
    )
};

export default Home;
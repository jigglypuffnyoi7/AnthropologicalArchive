import React from 'react';
import Article from './Article';
import MakePageForm from './MakePageForm';
import { useState, useEffect } from 'react';
import  { Link, useParams } from 'react-router-dom';

const Home = () => {
const [titles, setTitles] = useState<string[]>([]);
const [content, setContent] = useState<string[]>([]);
const param = useParams();

console.log('this the param', param.true)

  const getHome = async () => {
    const response = await fetch('/api/article/home')
    //update state 
    const data = await response.json()
    setTitles(data.map((obj:any) => obj.title))
    // setContent(data.map((obj: any) => obj.content))
  }

  useEffect(() => {
    getHome();
  }, [param.true])

    const NUM_OF_TITLES:number = 4; // hardcoded number of suggested titles

    let shown:string[] = [];
    (param.true === 'all') 
      ? shown = titles
      : shown = titles.sort((a, b):number => Math.random() - .5 ).slice(0, NUM_OF_TITLES);

    const ArticleLinks = shown.map(title => {

        if (param.true === 'all'){
          return (
              <li id={title}>
                <Link to={`/article/${title}`}>{title}</Link> 
              </li>
          )
          } else {
              return (
                  <>our rando articles</>
              )
        }
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
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
            return ( //all titles
                <div className='allarticles' id={title}>
                  <Link to={`/article/${title}`}>{title}</Link> 
                </div>
            )
          } else {
            return ( //random selection of titles
              <div className ='homearticles' id={title}>
                <Link to={`/article/${title}`}><b>{title}</b></Link> <br/> 
              </div>
            )
        }
    })


    return(
        <>
        <div className='homepage'>
          <h1 style={{fontSize: '85px', marginBottom: '-5px', textAlign: 'center'}}> Welcome to the Single Source of Truth for Codesmith Lore </h1>
          <h2 style={{fontSize: '45px'}}> An Encloypedia of Codesmith</h2>
          <p style={{fontSize:'25px'}}> Click a Random Article Below to Learn More About Codesmith</p>

            {ArticleLinks}
            </div> 
            <img src='jigglypuff.webp'></img>
            <img src='jigglypuff12.png'></img>

        </>
    )
};

export default Home;
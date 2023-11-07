import React from 'react';
import Article from './Article';
import MakePageForm from './MakePageForm';
import { useState, useEffect } from 'react';

const Home = () => {
const [titles, setTitles] = useState<string[]>([])
const [content, setContent] = useState<string[]>([])

  const getHome = async () => {
    const response = await fetch('http://localhost:3000/article/home')
    //update state 
    const data = await response.json()
    setTitles(data.map((obj:any) => obj.title))
    // setContent(data.map((obj: any) => obj.content))
  }

  useEffect(() => {
    getHome();
  }, [])

  console.log(titles)

    return(
        <>
    <h1>HELLO WORLD</h1>
    <p>THIS IS A HELLO WORLD STATEMENT</p>


      {titles}<br></br>
      {/* {content} */}
      
          <Article/>
          <MakePageForm/>
        </>
    )
};

export default Home;
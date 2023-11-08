import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const NavBar = () => {
  const [text, setText] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([])

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
  
  // push something into suggestions
  const giveSuggestion = () => {
    if (text.length) {
      const newSug: string[] = [];
      titles.forEach((title) => {
        if(title.toLowerCase().includes(text.toLowerCase())){
          newSug.push(title);
        } 
      })
      setSuggestions(newSug);
    } else setSuggestions([]);
  }

  useEffect(() => giveSuggestion(), [text])


  const suggestionComponents = suggestions.map(word => <span><Link to={`article/${word}`}>{word}</Link> <br/></span>)



  const onChangeHandler = (e: any) => {
      setText(e.target.value)
  };

  console.log('from nav bar',titles);


    return (
        <>
          <nav>
          <ul>
            <li>
              CS LORE
            </li>
            <li>
              <input type="text" onChange={onChangeHandler} value={text} name='search'/>
              <label htmlFor='search'>search</label><br/>
              {suggestionComponents}
            </li>
             <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`newarticle`}>Add Article</Link>
            </li>
            <li>
              <Link to={`/all`}>Browse All Articles</Link>
            </li>
          </ul>
        </nav>
        </>
    )
}


export default NavBar;

{/* <li>
<Link to={`article`}>View Article</Link>
</li> */}
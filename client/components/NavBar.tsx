import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { title } from 'process';
import { Box, Grid, Typography, AppBar, Toolbar, Button } from '@mui/material';

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
      if (title){
        if(title.toLowerCase().includes(text.toLowerCase())){
          newSug.push(title);
        } 
    }})
      setSuggestions(newSug);
    } else setSuggestions([]);
  }

  useEffect(() => giveSuggestion(), [text])


  const suggestionComponents = suggestions.map(word => <div><Link to={`article/${word}`}>{word}</Link> <br/></div>)



  const onChangeHandler = (e: any) => {
      setText(e.target.value)
  };

  console.log('from nav bar',titles);


    return (
        <>
        <Box>
        <AppBar position='static' style={{ backgroundColor: 'transparent', marginBottom:'10px', height: '100%' }}>
  <Toolbar style={{height:'100%'}}>
    
  <Link to={`/`}><img src="cslogo.ico" style={{ height: '5vh', color: 'white' }} /></Link>
      <Typography sx={{ fontWeight: 'bolder', fontSize: '25px', color: 'rgba(19, 51, 124)', marginLeft: '10px' }}>
        <Link to={`/`} style={{fontWeight: 'bolder', fontSize:'30px'}}>CSPedia</Link>
        <Typography sx={{ fontSize: '15px', color: 'rgba(19, 51, 124)', marginLeft: '7px', marginTop: '-4px' }}>Codesmith Lore</Typography>

      </Typography>
      <Typography sx={{ marginLeft: '20px' }}>
        <Link to={`newarticle`} style={{fontSize: '20px', fontWeight: 'bold'}}>Add Article</Link>
      </Typography>
      <Typography sx={{ marginLeft: '20px' }}>
        <Link to={`/all`} style={{fontSize: '20px', fontWeight: 'bold'}}>Browse All Articles</Link>
      </Typography>
      <Typography sx={{ marginLeft: '20px' }}>
        <div style={{ position: 'relative' }}>
          <input  type="text" onChange={onChangeHandler} value={text} name="Search" placeholder="Search CSPEDIA" style={{padding: '2px'}}/>
          {suggestionComponents && (
            <div className="dropdown" style={{ position: 'absolute', top: '100%', zIndex: 999, background: 'lightgray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '5px' }}>
              {suggestionComponents}
            </div>
          )}
        </div>
      </Typography>
  </Toolbar>
</AppBar>
</Box>
        </>
    )
}


export default NavBar;

{/* <li>
<Link to={`article`}>View Article</Link>
</li> */}
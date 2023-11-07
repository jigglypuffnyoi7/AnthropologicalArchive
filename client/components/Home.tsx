import React from 'react';
import Article from './Article';
import MakePageForm from './MakePageForm';
import Link from 'react-router-dom';

const Home = () => {

    // query to get names all the name of articles
    const response = ['snacks', 'temperature', 'relay race']



    const ArticleLinks = response.map(title => {
        return (
            <li>{title}
              {/* <Link to={`${title}`}>{title}</Link>  */}
            </li>
        )
    })


    return(
        <>
          Hi from Home component
          <ul>
            {ArticleLinks}
          </ul>
          
        </>
    )
};

export default Home;
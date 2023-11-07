import React from 'react';
import Article from './Article';
import MakePageForm from './MakePageForm';


const Home = () => {

    // query to get names all the name of articles
    const response = ['snacks', 'temperature', 'relay race']

    const ArticleLinks = response.map(title => {
        return (
            <div>
                {title}
            </div>
        )
    })


    return(
        <>
          Hi from Home component
          {ArticleLinks}
          <Article/>
          {/* <MakePageForm/> */}
        </>
    )
};

export default Home;
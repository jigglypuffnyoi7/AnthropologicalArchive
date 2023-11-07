import React from 'react';
import Article from './Article';

const ArticleContainer = (props: any) => {

  return (
    <>
     <Article content={props.content}/>
    </>
  )

}


export default ArticleContainer;
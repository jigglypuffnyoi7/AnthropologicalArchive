import React from 'react';
import Section from './Section';


const Article = (props: any) => {


    const Cobj = {
        heading: 'why i like snacks',
        text: 'they are very good and tastey'
    }



    type ContentObj = {
        heading: String,
        text: String
    }


    const sections = [Cobj].map((obj: ContentObj) => {
        return (
        <div>
          <Section info={obj}/>
        </div>
        )
    })


    return (
        <>
          Hi from article component
          <div className='articleTitle'>{props.title}</div>
          {sections}
        </>
    )
};

export default Article;
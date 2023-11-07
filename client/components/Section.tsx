import React from 'react';

// type SectionProps = {
//     info: 
// };

const Section = (props: any) => {


    return(
        <>
          Hi from section component
          <div className='sectionHeading'>
            {props.info.heading}
          </div>
          <div className='sectionText'>
            {props.info.text}
          </div>
        </>
    )
};

export default Section;
import React, {useState, useEffect} from 'react';

const FormSection = (props: any) => {
  //console.log(props.allContent, props.id)
// console.log('bla', props.allContent[Number(props.id) - 1])
    // useEffect(props.changeAllContents, []);
    // useEffect(props.changeAllContents, [])

  // console.log('in formsection', props.allContent, props.id, props.allContent[Number(props.id) - 1].header)

  

  

  

    const neededObj = props.allContent[Number(props.id) - 1]
    


    return (
        <div className='formsubmit2' id={`form$${props.id}`} onSubmit={props.submitNewPageInfo}>
          <p>Enter Header:</p>
            <input className = 'header' placeholder='Title of Section'value={neededObj.heading} id={`input1$${props.id}`} type="text" onChange={props.changeHeader}/>
          <p> Enter Content:</p>
            <textarea className='content' placeholder='Section Description' value={neededObj.text} id={`input2$${props.id}`}  onChange={props.changeContent}/>
        </div>
    )
}

export default FormSection;


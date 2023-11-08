import React, {useState, useEffect} from 'react';

const FormSection = (props: any) => {
  //console.log(props.allContent, props.id)
// console.log('bla', props.allContent[Number(props.id) - 1])
    // useEffect(props.changeAllContents, []);
    // useEffect(props.changeAllContents, [])

  console.log('in formsection', props.allContent, props.id, props.allContent[Number(props.id)], props.allContent[Number(props.id)].heading)

  
  function changeHeader(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    // const sectionFormsLength = allContent.length;
    const sectionFormsLength = props.allContent.length;

    const inputId = event.target.id 
    let index: any = Number(inputId.split('$')[1]);
    console.log(index)

    const newContentState = [...props.allContent];
    console.log('newContentState', newContentState)
    newContentState[index].heading = event.target.value;
    console.log('newcontent', newContentState)
    props.setAllContent(newContentState);
   
  }

  function changeContent(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    const sectionFormsLength = props.allContent.length;

    const inputId = event.target.id
    // const index: any = inputId.split('$')[1];
    let index: any = Number(inputId.split('$')[1]);

    const newContentState = [...props.allContent];
    newContentState[index].text = event.target.value;
    props.setAllContent(newContentState);

  }


    const neededObj = props.allContent[Number(props.id)]
    
    return (
        <div className='formsubmit2' id={`form$${props.id}`} >
          <p>Enter Header:</p>
            <input className = 'header' placeholder='Title of Section'value={neededObj.heading} id={`input1$${props.id}`} type="text" onChange={changeHeader}/>
          <p> Enter Content:</p>
            <textarea className='content' placeholder='Section Description' value={neededObj.text} id={`input2$${props.id}`}  onChange={changeContent}/>

        </div>
    )
}

export default FormSection;


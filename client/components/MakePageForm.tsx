import React, {useState, useEffect} from 'react';
import FormSection from './FormSection'


const MakePageForm = () => {

  //state

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const [allContent, setAllContent] = useState([{
      header: '',
      content: ''
  }]);

  const [sections, setSections] = useState<any>([])

  //event handlers

  
  
  function changeTitle(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();

    const inputtedTitle = event.target.value;
    console.log(inputtedTitle)
    setTitle(inputtedTitle);
  }

  function changeAuthor(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();

    const inputtedAuthor = event.target.value;
    console.log(inputtedAuthor)
    setAuthor(inputtedAuthor);
  }


  function submitNewPageInfo(event: React.ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    
    fetch("/makeNewPage", {
      method: "POST",
      body: JSON.stringify({
        title,
        allContent,
        author
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

  }

  function addSection(event: any){
    event.preventDefault();
    
  
    // console.log('sectionFormsLength', allContent)

    changeAllContents();

    const sectionFormsLength = allContent.length;

    setSections([...sections, <FormSection changeContent={changeContent} changeAllContents={changeAllContents} allContent={allContent} submitNewPageInfo={submitNewPageInfo} changeTitle={changeTitle} changeHeader={changeHeader} id={sectionFormsLength} />]);
    

  }

  function changeHeader(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    // const sectionFormsLength = allContent.length;
    const sectionFormsLength = allContent.length;

    const inputId = event.target.id 
    let index: any = Number(inputId.split('$')[1]) - 1;
    console.log(index)

    const newContentState = [...allContent];
    console.log('newContentState', newContentState)
    newContentState[index].header = event.target.value;
    console.log('newcontent', newContentState)
    setAllContent(newContentState);
    setSections([...sections, <FormSection changeContent={changeContent} changeAllContents={changeAllContents} allContent={allContent} submitNewPageInfo={submitNewPageInfo} changeTitle={changeTitle} changeHeader={changeHeader} id={sectionFormsLength} value={allContent}/>]);

  }

  function changeContent(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    const sectionFormsLength = allContent.length;

    const inputId = event.target.id
    // const index: any = inputId.split('$')[1];
    let index: any = Number(inputId.split('$')[1]) - 1;

    const newContentState = [...allContent];
    newContentState[index].content = event.target.value;
    setAllContent(newContentState);

    
    setSections([...sections, <FormSection changeContent={changeContent} changeAllContents={changeAllContents} allContent={allContent} submitNewPageInfo={submitNewPageInfo} changeTitle={changeTitle} changeHeader={changeHeader} id={sectionFormsLength} value={allContent}/>]);

  }

  function changeAllContents(){
    const allContentCopy = allContent.slice()
    allContentCopy.push({
      header: '',
      content: ''
    })
    console.log('allContentCopy', allContentCopy)
    setAllContent(allContentCopy);
    return allContent
  }


    return(
      <>
        <form onSubmit={submitNewPageInfo}>
          <label>Title: 
            <input type="text" onChange={changeTitle}/>
          </label>
          <label>Author: 
            <input type="text" onChange={changeAuthor}/>
          </label>
          <button type="submit">Make Article</button>
        </form>
          {sections}
        <button onClick={addSection}>Add Section</button>
      </>
        
    )
};

export default MakePageForm;
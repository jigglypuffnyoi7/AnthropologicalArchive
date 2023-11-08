import React, {useState, useEffect} from 'react';
import FormSection from './FormSection';
import { useNavigate } from "react-router-dom";



const MakePageForm = () => {
  const navigate = useNavigate();

  //state

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [navTitle, setNavTitle] = useState<string>('');

  const [allContent, setAllContent] = useState([{
      heading: '',
      text: ''
  }]);

  const [sections, setSections] = useState<any>([])

  // useEffect(() => {
  //   // clear all fields here
  //   setAuthor('');
  //   setTitle('');
  //   setAllContent([]);
  // },[])
;

  
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
    const newContentState = [...allContent];

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
    newContentState[index].heading = event.target.value;
    console.log('newcontent', newContentState)
    // setAllContent(newContentState);
    setSections([...sections, <FormSection changeContent={changeContent} changeAllContents={changeAllContents} allContent={allContent} submitNewPageInfo={submitNewPageInfo} changeTitle={changeTitle} changeHeader={changeHeader} id={sectionFormsLength} />]);

  }

  function changeContent(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    const sectionFormsLength = allContent.length;

    const inputId = event.target.id
    // const index: any = inputId.split('$')[1];
    let index: any = Number(inputId.split('$')[1]) - 1;

    const newContentState = [...allContent];
    newContentState[index].text = event.target.value;
    // setAllContent(newContentState);

    
    setSections([...sections, <FormSection changeContent={changeContent} changeAllContents={changeAllContents} allContent={allContent} submitNewPageInfo={submitNewPageInfo} changeTitle={changeTitle} changeHeader={changeHeader} id={sectionFormsLength} />]);

  }

  function changeAllContents(){
    const allContentCopy = allContent.slice()
    allContentCopy.push({
      heading: '',
      text: ''
    })
    console.log('allContentCopy', allContentCopy)
    setAllContent(allContentCopy);
    return allContent
  }

  async function sendPost(){
    if(title === '') return; // title is required; reject articles with blank title field

    setNavTitle(title);
    
    if (!author.length){
      setAuthor('Anonymous');
    }

    const newContent = allContent;
    const body = {
      title: title,
      author: author,
      content: allContent
    }
    try{
      await fetch('/api/article/add', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
      })


      
      setIsSubmitted(true);
      
    }catch(err){
      console.log('Error while adding article: ', err)
    }
  }

  useEffect(() => {
    if (isSubmitted && navTitle){
    navigate(`/article/${navTitle}`);
    }
    setNavTitle('');
  },[isSubmitted])


    return(
      <>
      <div className='formsubmit'>
        <form onSubmit={submitNewPageInfo}>
        <form>
          <label>Title: 
            <input required type="text" onChange={changeTitle}/>
          </label>
          <label>Author: 
            <input type="text" onChange={changeAuthor}/>
          </label>
          <button className ='addsection' onClick={addSection}>Add Section</button>
        </form>
          {/* {sections} */}
        </form>
          
        {/* <button onClick={sendPost}>Submit</button> */}

       

        {sections}
        </div>
        <div>
        <button onClick={sendPost}>Submit</button>
        </div>
      </>
        
    )
};

export default MakePageForm;
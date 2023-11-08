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

  const [allContent, setAllContent] = useState<any>([]);


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

  function addSection(event: any){
    event.preventDefault();
    
  
    // console.log('sectionFormsLength', allContent)
    const newContentState = [...allContent];

    changeAllContents();

    const sectionFormsLength = allContent.length;

  }

  function changeAllContents(){
    const allContentCopy = allContent.slice()
    allContentCopy.push({heading: '', text: ''});
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

  const sections: any = [];



  for (let i = 0; i < allContent.length; i++){
    sections.push(<FormSection setAllContent={setAllContent} changeAllContents={changeAllContents} allContent={allContent} changeTitle={changeTitle} id={i} />)

  }


    return(
      <>
      <div className='formsubmit'>
        <form onSubmit={sendPost}>
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